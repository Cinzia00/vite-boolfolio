<template>
  <div>
    <div class="container" v-if="loading === false">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      
    </div>
  </div>
</template>

<script>
import CardProject from './CardProject.vue'
import axios from 'axios'

  export default {
    components:{
      CardProject
    },
    data() {
      return {
        project: null,
        loading: true,
      }
    },
    props: ['slug'],
    methods:{
      fetchProjects() {
        axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
        .then(res => {
          console.log('res', res)
          const { project } = res.data
          this.project = project
          this.loading = false

        })
        .catch(error => {
          console.log('error', error)
        })
      }
    },
    mounted() {{
      this.fetchProjects()
      // console.log(this.$route, 'ciao')
    }}
    
  }

</script>

<style scoped>
</style>