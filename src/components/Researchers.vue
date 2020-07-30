<template>
  <v-container>
    <div id="ResearcherID">    </div>
<!--    Kommentar-->
    <v-card >
      <v-toolbar dense light  >
        <h3 class="headline mb-0" >Wissenschaftliche Mitarbeiter</h3>
      </v-toolbar>
      <v-card-text>
        <v-data-table
                v-model="selected"
                :headers="Ueberschriften"
                :items="Mitarbeiter.researchers_root"

                :single-select="singleSelect"
                item-key="_id"
                show-select
                hide-default-footer

        >
          <template v-slot:item.name="{ item }">
            <router-link :to="{ name: 'editresearcher' }">{{ item.name }}</router-link>
          </template>
        </v-data-table>
      </v-card-text>


        <v-card-actions >

          <v-btn id="BtnId" text outlined >Loeschen</v-btn>
        </v-card-actions>

    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: "ResearchersOverview",
    props: {
      Mitarbeiter: Array
    },
    data: function () {
      return {
        singleSelect: true,
        selected: [],
        dialog: false,
        dialogAssign: false,
        pagination: {
          rowsPerPage: 100
        },
        Ueberschriften: [
          {align: 'end',  text: "Name", sortable: false,               value: "name"},
          {               text: "ID", sortable: true,                  value: "_id"},
          {               text: "Boss", sortable: true,                value: "boss"},
          {               text: "department", sortable: true,          value: "department"},
        ],
      };
    },
    created() {
    },
    methods: {}
  };
</script>

