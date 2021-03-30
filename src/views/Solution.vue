<template>
  <div class="solution">
    <h1>Notre solution</h1>
    <h2>Étapes du développement de votre site</h2>
    <div class="flex">
      <div class="single_solution" v-for="item in items" :key="item.id">
        <h2>{{ item.titre }}</h2>
        <p v-html="item.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          titre: "Conception",
          text:
            "Chaque projet commence par une phase de conception. Durant cette première partie, nous vous conseillerons et guiderons dans la construction et la présentation de votre activité.",
        },
        {
          id: 2,
          titre: "Visuel",
          text:
            "Le visuel est très important pour un site web car il permet à vos futurs clients de percevoir votre activité. C’est une phase nécessaire afin de vous projeter, d’avoir un aperçus du rendu final et que le site vous convienne",
        },
        {
          id: 3,
          titre: "Développement",
          text:
            "Le développement sera la mise en place de la maquette graphique validé à l’étape précédente. Nous organiserons un suivi particulier afin que vous puissiez suivre l’avancement de votre projet.",
        },
        {
          id: 4,
          titre: "Accompagnement",
          text:
            "Le SAV est disponible pour vous accompagner en cas de problème, de changement de style ou de texte. Le site sera modifié en quelques jours voire quelques heures selon l’ampleur des modifications.",
        }
      ],
    };
  },
};
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.solution {
  background-image: url(http://www.gweb-concept.fr/wp-content/uploads/2021/03/agency_steps_bg-1024x639-1.jpg);
  background-position: center;
  background-repeat: repeat;
}

.flex {
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
  width: 65%;
  color: white;
  margin-left: 35%;
  flex-wrap: wrap;
}

.single_solution {
  width: 40%;
  text-align: left;
}
</style>
