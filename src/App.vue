<template>
  <v-app dark>
    <div>
      <v-toolbar></v-toolbar>
    </div>
    <main>
      <CResearchers> </CResearchers>
    </main>
    <v-snackbar
      v-model="$store.state.snackbar.show"
      :timeout = "6000"
      :top="true">
      {{$store.state.snackbar.message}}
    </v-snackbar>
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
    mounted() {
      axios
              .get('http://localhost:3000/researchers')
              .then(response => this.$store.state.daten = response.data)
              .catch(error => console.log(error))
    }
  };
</script>