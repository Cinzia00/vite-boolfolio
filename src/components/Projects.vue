<script>
import axios from 'axios'
import CardProject from './CardProject.vue'

export default {
components:{
  CardProject
},
    data() {
      return {
        projects: [],
      }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/test')
            .then(res => {
                console.log(res)

                const { results } = res.data
                this.projects = results
            })
            .catch(err => {
            console.log(err)
            })
        },
    },
    mounted() {
      this.fetchProjects()
    },
  }
</script>

<template>
  <h1 class="title">Boolfolio</h1>
    <div class="container">
        <CardProject v-for="project in projects" :key="project.id" :project="project"/>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem;
}

.title {
  text-align: center;
  margin-top: 2rem;
}

</style>
