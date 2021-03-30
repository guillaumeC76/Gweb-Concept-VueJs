<template>
  <div class="offres">
    <h1>Nos offres</h1>
    <div class="flex">
      <div class="offre" v-for="item in items" :key="item.id">
        <h2>{{ item.titre }}</h2>
        <h3>{{ item.prix }} € <br /> <span>{{ item.recurence }}</span></h3>
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
          titre: "offre starter",
          prix: 49,
          recurence: "par mois",
          text:
            "• Site vitrine <br /> • Intégration des contenus <br /> • Site une page Slider (3 slides) <br /> • SAV constant <br /> • L’hébergement <br /> • Le nom de domaine <br /> • Le référencement SEO <br /> • Engagement 24 mois puis 25€/mois",
        },
        {
          id: 2,
          titre: "offre pro",
          prix: 59,
          recurence: "par mois",
          text:
            "• Site vitrine <br /> • Intégration des contenus <br /> • Site à pages multiples <br /> • Slider (3 slides) avec animations <br /> • SAV constant <br /> • Demande de devis en ligne intégrée (formulaire sur mesure) <br /> • L’hébergement Le nom de domaine <br /> • Le référencement SEO <br /> • Engagement 24 mois puis 35€/mois",
        },
        {
          id: 3,
          titre: "offre expert",
          prix: 69,
          recurence: "par mois",
          text:
            "• Site E-commerce (achats en ligne et différents systèmes de paiements) <br /> • Intégration des contenus <br /> • Site à pages multiples <br /> • Slider (3 slides) avec animations <br /> • SAV constant <br /> • Demande de devis en ligne intégrée (formulaire sur mesure) <br /> • L’hébergement Le nom de domaine <br /> • Le référencement SEO <br /> • Engagement 24 mois puis 45€/mois",
        },
      ],
    };
  },
};
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 40px 0;
  font-family: 'Roboto', sans-serif;
}

.offre {
  width: 25%;
  border: 1px solid #F5F5F5;
  border-radius: 10px;
  color: black;
  min-height: 600px;
}

.offre h2 {
  font-size: 1.4em;
  text-transform: uppercase;
  margin: 15px 0;
}

.offre h3 {
  font-size: 3.8em;
  background-color: #F5F5F5;
  padding: 20px 0;
  margin: 0;
  font-weight: 800;
}

.offre span {
  font-size: 0.4em;
  font-weight: 200;
}

.offre p {
  font-size: 1em;
  text-align: left;
  color: #999999;
  padding: 10px 50px;
  line-height: 28px;
  font-weight: 300;
}
</style>
