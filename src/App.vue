<template>
  <v-app dark>
    <div>
      <v-toolbar></v-toolbar>
    </div>
    <main>
      <CResearchers :Mitarbeiter="daten" > </CResearchers>
    </main>
    <v-snackbar
      v-model="$store.state.snackbar.show"
      :timeout = "6000"
      :top="true">
      Dies ist eine Snackbar.
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