<template>
  <div class="projet">
    <h1>Votre projet</h1>
    <div class="flex">
      <div class="single_info" v-for="item in items" :key="item.id">
        <img :src="item.image" :alt="item.titre" />
        <h2>{{ item.titre }}</h2>
        <p>{{ item.text }}</p>
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
          image:
            "http://www.gweb-concept.fr/wp-content/uploads/2021/03/webdesign-3411373_1920-1024x683-ConvertImage.jpg",
          titre: "Web Design",
          text:
            "Création de sites Web, design et adaptation au client avec des créations graphiques et des animations. Votre site vous sera donc personnel, unique et selon vos envies.",
        },
        {
          id: 2,
          image:
            "http://www.gweb-concept.fr/wp-content/uploads/2021/03/computer-768608_1920-1024x683-ConvertImage.jpg",
          titre: "Développement",
          text:
            "Votre site pourra être totalement personnalisé selon vos goûts, vos couleurs, ou encore vos envies. Nous vous accompagnerons jusqu’à la fin de votre projet et après encore.",
        },
        {
          id: 3,
          image:
            "http://www.gweb-concept.fr/wp-content/uploads/2021/03/digital-marketing-gweb-concept-seo-1024x683-ConvertImage.jpg",
          titre: "Référencement",
          text:
            "Le référencement sera naturel ou sponsorisé. C’est une partie importante et complexe dans la construction du projet et de plus en plus efficace au cours du temps.",
        },
        {
          id: 4,
          image:
            "http://www.gweb-concept.fr/wp-content/uploads/2021/03/Accompagnement-gweb-concept-seo-1-1024x683-ConvertImage.jpg",
          titre: "Accompagnement",
          text:
            "Vous serez accompagné tout au long du projet puis avec un service SAV en cas de problèmes ou de changement de design, d’idée ou toute autre demande.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 40px 0;
}

.single_info {
  width: 18%;
  transition: 0.5s;
  border-bottom: 3px solid #E73E3E;
  min-height: 430px;
}

.single_info:hover {
  box-shadow: 0 20px 72px -20px rgba(128, 128, 128, 0.40);
  transition: 0.5s;
}

.single_info img {
  width: 100%;
}

.single_info p {
  padding: 0 30px;
  line-height: 20px;
  font-weight: 500;
}
</style>
