<template>
  <div id="nav">
    <router-link to="/">Kliker</router-link>
    <router-link to="/Carte_a_suivre">Carte à suivre</router-link>
    <router-link to="/solution">A venir</router-link>
    <router-link to="/offres">A venir</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 2px solid #ffffff;
  box-shadow: 0 10px 30px rgba(180, 180, 180, 0.6);

  a:hover {
    color: #2c3e50;
    transition: 0.5s;
  }

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5em;
    transition: 0.5s;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
