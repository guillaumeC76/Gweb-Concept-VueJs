<template>
  <div class="home">
    <HelloWorld msg="Bienvenue chez Gweb Concept" />
    <p>{{ formattedDate }}</p>
    <p v-on:keyup.enter="nombre++"></p>
    <input
      v-on:keyup.up="nombre++"
      v-on:keyup.down="nombre--"
      type="text"
      :value="nombre"
    />
    <h2>Le record sur cet ordinateur est de : {{ record > 0 ? record : 0 }}</h2>
    <div class="theFlex">
      <div class="base-timer">
        <svg
          class="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g class="base-timer__circle">
            <circle
              class="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            ></circle>
            <path
              :stroke-dasharray="circleDasharray"
              class="base-timer__path-remaining"
              :class="remainingPathColor"
              d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
            ></path>
          </g>
        </svg>
        <span class="base-timer__label">{{ formattedTimeLeft }}</span>
        <button @click="newGame()">Recommencer</button>
      </div>
      <div ref="main" class="main">
        <div ref="box" class="box" @click="random()"></div>
      </div>
      <div class="resultat">
        <p v-for="resultat in resultats" :key="resultat.message">{{ resultat.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 5;

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";

export default {
  name: "Accueil",
  components: {
    HelloWorld,
  },

  data() {
    return {
      nombre: 0,
      clique: 0,
      timePassed: 0,
      timerInterval: null,
      activate: false,
      record: localStorage.getItem("recordDeClique"),
      resultats: [
        {
          message: JSON.parse(localStorage.getItem("resultat")),
        },
      ],
    };
  },
  methods: {
    random() {
      const {
        clientWidth: mainWidth,
        clientHeight: mainHeight,
      } = this.$refs.main;

      if (this.activate === false) {
        this.startTimer();
        this.activate = true;

        this.$refs.box.style.left =
          Math.random() * (mainWidth - this.$refs.box.clientWidth) + "px";
        this.$refs.box.style.top =
          Math.random() * (mainHeight - this.$refs.box.clientHeight) + "px";

        this.clique++;
      } else {
        this.$refs.box.style.left =
          Math.random() * (mainWidth - this.$refs.box.clientWidth) + "px";
        this.$refs.box.style.top =
          Math.random() * (mainHeight - this.$refs.box.clientHeight) + "px";

        this.clique++;
      }
    },
    onTimesUp() {
      clearInterval(this.timerInterval);
      this.resultats.push({message: this.clique})
      localStorage.setItem("resultat", JSON.stringify(this.resultats) );
      if (this.clique > this.record) {
        window.alert(
          "Votre nombre de cliques est de : " +
            this.clique +
            ". NOUVEAUX RECORD !!!!!!"
        );
        this.record = this.clique;
        localStorage.setItem("recordDeClique", this.record);
      } else if (this.record === this.clique) {
        window.alert(
          "Votre nombre de cliques est de : " +
            this.clique +
            ". Vous êtes à égalité avec le record."
        );
      } else {
        window.alert(
          "Votre nombre de cliques est de : " +
            this.clique +
            ". Dommage, vous pouvez recommencer."
        );
      }
    },

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },

    newGame() {
      document.location.reload();
      localStorage.clear();
    },
  },
  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    },
  },
  computed: {
    ...mapGetters(["formattedDate"]),
    ...mapGetters(["formattedScore"]),

    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },

    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },

    timeLeft() {
      return TIME_LIMIT - this.timePassed;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    },

    remainingPathColor() {
      const { alert, warning, info } = COLOR_CODES;

      if (this.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    },
  },
};
</script>

<style lang="scss">
.theFlex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0 40px 0;
}

@media screen and (max-width: 890px) {
  .theFlex {
    flex-direction: column;
    padding: 20px 0 40px 0;
  }
}

.resultat {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
}

.main {
  width: 500px;
  height: 500px;
  border: 2px solid black;
  border-radius: 20px;
  margin: 60px auto 0 auto;
  display: block;
  position: relative;
  cursor: crosshair;
}

.box {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: red;
  position: absolute;
}

.base-timer {
  position: relative;
  width: 300px;
  height: 300px;
  display: block;
  margin: 0 auto;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
}
</style>
