<template>
  <v-btn v-if="iconName"
    icon
    color="primary"
    @click="toggleTheme"
  >
    <v-icon>{{iconName}}</v-icon>
  </v-btn>
</template>

<script setup lang="ts" name="DarkBtn">
  import {ref} from 'vue'
  import { useTheme } from 'vuetify'

const iconName = ref('mdi-weather-sunny')
  const theme = useTheme()

  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    iconName.value = theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'
  }
</script>
