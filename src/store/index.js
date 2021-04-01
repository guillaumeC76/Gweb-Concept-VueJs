import { createStore } from 'vuex'

export default createStore({
  state: {
    day: 1,
    month: 4,
    year: 2021,
    bestScore: 0,
  },
  getters: {
    formattedScore(state) {
      return `${state.bestScore}`;
    },
    formattedDate(state) {
      return `${state.day}/${state.month}/${state.year}`;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
