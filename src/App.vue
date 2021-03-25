<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 v-show="AfficherMessage()">Mon message : {{ message }}</h1>
  <br><input v-model="message">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  methods: {
    AfficherMessage () { 
      if(this.message === '') {
        this.vide = true;
      } else {
        this.vide = false;
        return this.message;
      }
    },
  },
  data () {
    return {
      message: '',
      vide: true,
    }
  },
  name: 'App',
  components: {
    HelloWorld
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
