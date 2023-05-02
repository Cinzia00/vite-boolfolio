<template>
  <div class="project-card">
    <h3>{{ project.title }}</h3>
  </div>
</template>

<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    mounted() {
      console.log(this.project.category)
    },
  }
</script>

<style scoped>

</style>