<template>
  <v-app>
    <router-view>
    </router-view>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import RouteLocationNormalizedLoaded from 'vue-router'
export default defineComponent({
  name: 'App',
  setup() {
  }
})
</script>
