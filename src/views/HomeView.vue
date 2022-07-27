<template>
  <div class="home">
    <img alt="App logo" class="logo" src="../assets/logo.png">
    <AboutComponent msg="Welcome to super-duper-ui"/>
  </div>
</template>

<script>
import AboutComponent from '@/components/AboutComponent.vue';

export default {
  name: 'HomeView',
  components: {
    AboutComponent,
  },
};
</script>
