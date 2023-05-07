<template>
  <div class="card">
    <router-link :to="{name: 'projects.show', params:{slug:project.slug}}"><h3>{{ project.title }}</h3></router-link>
    <p>{{ project.description }}</p>
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


.card {
  width:calc((100% / 4) - 2rem);
}
</style>