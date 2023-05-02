<script>
import axios from 'axios'
import Projectcard from './Projectcard.vue'

export default {

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

                const { results} = res.data
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
    <div>
        <Projectcard v-for="project in projects" :key="project.id"/>
    </div>

</template>

<style scoped>

</style>
