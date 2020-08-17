<template>
    <v-container>
        <div id="ResearcherID"></div>
        <v-card>
            <v-toolbar dense dark>
                <h3 class="headline mb-0">Wissenschaftliche Mitarbeiter</h3>
            </v-toolbar>

            <v-data-table
                    v-model="selected"
                    :headers="Ueberschriften"
                    :items="$store.state.daten.researchers_root"
                    :single-select="singleSelect"
                    item-key="_id"
                    show-select
                    hide-default-footer
            >
                <template v-slot:item.name="{ item }">
                    <router-link :to="{ name: 'nEditResearcher' }">{{ item.name }}</router-link>
                </template>
            </v-data-table>

            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>

            <v-card-title class="mt-2">
                Mitarbeiter-Administration
            </v-card-title>

            <v-card-text class="mt-n5">
                <v-container>
                    <v-row>
                        <v-col class="pa-0">
                            <v-card outlined height="100%">

                                <v-card-title class="text-subtitle-2">
                                    <v-col align="center" class="pa-0">
                                        Löschen
                                    </v-col>
                                </v-card-title>

                                <v-card-actions>
                                    <v-col align="center" class="pa-0">
                                        <v-btn class="mt-14" id="BtnId2" text outlined rounded
                                               @click="MitarbeiterLoeschen();SnackbarAnzeigen('gelöscht')">
                                            <v-icon left> mdi-delete</v-icon>
                                            Mitarbeiter Löschen
                                        </v-btn>
                                    </v-col>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col class="pa-0">
                            <v-card outlined>

                                <v-card-title class="text-subtitle-2">
                                    <v-col align="center" class="pa-0">
                                        Hinzufügen
                                    </v-col>
                                </v-card-title>

                                <v-card-text>

                                    <v-text-field
                                            label="Name"
                                            v-model="neuerMitarbeiter"
                                    ></v-text-field>

                                    <v-text-field
                                            label="Boss"
                                            v-model="neuerBoss"
                                    ></v-text-field>

                                    <v-text-field
                                            label="Department"
                                            v-model="neuesDepartment"
                                    ></v-text-field>

                                </v-card-text>

                                <v-card-actions>
                                    <v-col align="center">
                                        <v-btn id="BtnId" text outlined color="success"
                                               @click="MitarbeiterAdden();SnackbarAnzeigen('hinzugefügt')">
                                            <v-icon left> mdi-plus</v-icon>
                                            Hinzufügen
                                        </v-btn>
                                    </v-col>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row >
                        <v-btn fab @click="goToSteplist" class="mt-4">
                            <v-icon>mdi-shoe-print</v-icon>
                        </v-btn>
                    </v-row>
                </v-container>

            </v-card-text>

        </v-card>


    </v-container>

</template>

<script>
    import axios from 'axios'


    export default {
        name: "ResearchersOverview",

        data: function () {
            return {
                singleSelect: true,
                selected: [],
                neuerMitarbeiter: '',
                neuerBoss: '',
                neuesDepartment: '',
                dialog: false,
                dialogAssign: false,
                pagination: {
                    rowsPerPage: 100
                },
                Ueberschriften: [
                    {align: 'end', text: "Name", sortable: false, value: "name"},
                    {text: "ID", sortable: true, value: "_id"},
                    {text: "Boss", sortable: true, value: "boss"},
                    {text: "department", sortable: true, value: "department"},
                ],
            };
        },
        created() {
        },
        methods: {
            MitarbeiterLoeschen: async function () {
                console.log("Löschvorgang gestartet.")
                console.log("Mitarbeiter mit folgender Id wird gelöscht:", this.selected[0]._id)
                await axios.delete('http://localhost:3000/deleteresearcher', {data: this.selected[0]})
                axios.get('http://localhost:3000/researchers')
                    .then(response => this.$store.state.daten = response.data)
                    .catch(error => console.log(error))
            },
            MitarbeiterAdden: async function () {
                await axios.post('http://localhost:3000/addresearcher', {
                    name: this.neuerMitarbeiter,
                    boss: this.neuerBoss,
                    department: this.neuesDepartment
                })
                axios.get('http://localhost:3000/researchers')
                    .then(response => this.$store.state.daten = response.data)
                    .catch(error => console.log(error))
                this.neuerMitarbeiter = ''
                this.neuerBoss = ''
                this.neuesDepartment = ''
            },
            SnackbarAnzeigen: function (Aufgabe) {
                this.$store.state.snackbar.show = "true"
                this.$store.state.snackbar.message = "Der Mitarbeiter wurde " + Aufgabe + "."
            },
            goToSteplist(){
                this.$router.push({name:'nSteplist'})
            }
        }
    };
</script>

