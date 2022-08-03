<template>
  <v-navigation-drawer app>
  </v-navigation-drawer>
  <v-app-bar app>
  </v-app-bar>
  <v-main>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>About</h1>
          <router-link to="/">Back to Home</router-link>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12">
          <member-lists/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <v-footer app>
  </v-footer>
</template>
<script setup lang="ts">
  /* sub component */
  import MemberLists from '../components/MemberLists.vue';
</script>
<style scoped>
</style>