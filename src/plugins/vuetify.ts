// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { CustomLightTheme,CustomDarkTheme} from '../configs/vuetify.theme'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'CustomLightTheme',
    themes: {
      CustomLightTheme,
      CustomDarkTheme,
    }
  }
})
