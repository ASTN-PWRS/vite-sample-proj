import vuetify from '../plugins/vuetify'
import '../plugins/theme'
import { Theme } from '../plugins/theme'

export const setTheme = (theme:Theme) => {
  const name = theme.name
  const dark = theme.dark
  const light = theme.light
  // set themes
  if(vuetify){
    this.$vuetify.theme.themes.dark = dark
    this.$vuetify.theme.themes.light = light
    this.$vuetify.theme.themes.name = name  
  }
}