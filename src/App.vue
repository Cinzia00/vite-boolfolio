<script>
import Projects from './components/Projects.vue';
import NavBar from './components/Navbar.vue';

export default {
  components: {
    Projects,
    NavBar
  }
}
</script>

<template>
  <router-view></router-view>
  <div>
    <Projects />
  </div>
</template>

<style scoped>
</style>
