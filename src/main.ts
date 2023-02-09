import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'



import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueLazyLoad, {
  loading: '',
  lifecycle: {
    loading: ()=> '',
    error: (el) => {
      console.log('error', el)
    },
    loaded: () => ''
  }
})
app.mount('#app')
