<template>
  <researchers :researchers="data"> </researchers>
</template>

<script>
  import axios from 'axios'
  import Researchers from "@/components/Researchers";
  export default {
    name: 'App',
    components: {
      Researchers
    },
    data() {
      return {
        data: []
      };
    },
    mounted() {
      axios
              .get('http://localhost:3000/researchers')
              .then(response => this.data = response.data)
              .catch(error => console.log(error))
    }
  };
</script>