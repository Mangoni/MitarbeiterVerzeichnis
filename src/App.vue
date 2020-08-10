<template>
  <v-app dark>
    <v-toolbar></v-toolbar>
    <main>
      <CResearchers :Mitarbeiter="daten" > </CResearchers>
    </main>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import CResearchers from "@/components/Researchers";
  export default {
    name: 'App',
    components: {
      CResearchers
    },
    data() {
      return {
        daten: []
      };
    },
    mounted() {
      axios
              .get('http://localhost:3000/researchers')
              .then(response => this.daten = response.data)
              .catch(error => console.log(error))
    }
  };
</script>