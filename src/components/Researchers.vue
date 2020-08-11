<template>
    <v-container>
        <div id="ResearcherID"></div>
        <!--    Kommentar-->
        <v-card>
            <v-toolbar dense dark>
                <h3 class="headline mb-0">Wissenschaftliche Mitarbeiter</h3>

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

            <v-divider></v-divider>


            <v-card-actions>
                <v-container>
                    <v-row>


                        <v-col lg="4" align="center">
                            <v-btn id="BtnId" text outlined @click="MitarbeiterLoeschen">
                                <v-icon> mdi-delete</v-icon>
                                Mitarbeiter Löschen
                            </v-btn>

                        </v-col>

                        <v-col lg="4" align="center">
                            <v-text-field
                                    label="Name"
                                    v-model="model"
                            ></v-text-field>
                        </v-col>

                        <v-col lg="4" align="center">
                            <v-btn id="BtnId" text outlined @click="MitarbeiterAdden">
                                <v-icon> mdi-plus</v-icon>
                                Hinzufügen
                            </v-btn>
                        </v-col>

                    </v-row>
                </v-container>
            </v-card-actions>

        </v-card>
    </v-container>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ResearchersOverview",
        props: {
            Mitarbeiter: Array
        },
        data: function () {
            return {
                singleSelect: true,
                selected: [],
                model: 'NameVomMitarbeiter',
                selectedResearcherId: [],
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
            MitarbeiterLoeschen: function () {
                console.log("Debugger")
                console.log(this.selected[0]._id)
                // console.log(this.Mitarbeiter.researchers_root)
                //console.log(this.Mitarbeiter.researchers_root.find(element => element.name == 'Nina'))
                axios.delete('http://localhost:3000/deleteresearcher', {data: this.selected[0]})
                window.location.reload()
            },
            MitarbeiterAdden: function () {
                //axios.post('http://localhost:3000/addresearcher',{data: this.Mitarbeiter.researchers_root.find(element => element.name == this.model)})
                axios.post('http://localhost:3000/addresearcher', {name: this.model})
                window.location.reload()
            }
        }
    };
</script>

