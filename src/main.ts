import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
//import { loadFonts } from './plugins/webfontloader'
import { pinia } from './store'
import { router } from './route/index'

//loadFonts()

const app = createApp(App)

app.use(vuetify).use(router).use(pinia).mount('#app')
