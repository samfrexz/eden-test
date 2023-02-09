import { createStore } from 'vuex'
import { getDogImages } from '@/services'

export default createStore({
  state: {
    dogImgs: <string[]> [],
    loadingState: <boolean> false,
  },
  getters: {
    getDogImgs: state => state.dogImgs.slice(0, 100),
    getLoadingState: state => state.loadingState,
  },
  mutations: {
    getDogImages(state, payload) {
      state.dogImgs = payload
    },
    getLoadingState(state, payload){
      state.loadingState = payload
    }
  },
  actions: {
    getDogImages({commit}){
      commit('getLoadingState', true)
      getDogImages()
      .then(res => {
        const {data}  = res
        commit('getLoadingState', false)
        commit('getDogImages', data.message)
      })
      .catch(err => console.log(err.message))
    }
  }
})