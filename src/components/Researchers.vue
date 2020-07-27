<template>
  <v-container>
    <div id="researchers">
    </div>
    <v-card>
      <v-toolbar dense light>
        <h3 class="headline mb-0">Researchers</h3>
      </v-toolbar>
      <v-card-text>
        <v-data-table
                :headers="headers"
                :items="researchers"
                hide-default-footer
        >
          <template v-slot:item.name="{ item }">
            <router-link :to="{ name: 'editresearcher' }">{{ item.name }}</router-link>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: "ResearchersOverview",
    props: {
      researchers: Array
    },
    data() {
      return {
        dialog: false,
        dialogAssign: false,
        pagination: {
          rowsPerPage: 100
        },
        headers: [
          { text: "Name", sortable: true, value: "name" },
          { text: "ID", sortable: true, value: "_id" }
        ],
      };
    },
    created() {
    },
    methods: {}
  };
</script>