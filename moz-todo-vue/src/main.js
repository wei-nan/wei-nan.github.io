import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'


// Vue.prototype.$axios = axios;

// import ElementUI from 'element-ui'
// createAppVue.use(ElementUI);

const app = createApp(App)
installElementPlus(app)
app.mount('#app')