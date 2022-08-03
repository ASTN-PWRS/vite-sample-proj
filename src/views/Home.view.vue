<template>
  <v-navigation-drawer app
    v-model="drawer"
  >
  </v-navigation-drawer>
  <v-app-bar app>
    <dark-btn/>
  </v-app-bar>
  <v-main>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <router-link to="/about">Go to About</router-link><br/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <v-footer app>
  </v-footer>
</template>
<script setup lang="ts">
  /* sub component */
  import DarkBtn from '../components/DarkBtn.vue';
  /**/
  import {ref} from 'vue'
  const drawer = ref(false)

</script>
<style scoped>
</style>