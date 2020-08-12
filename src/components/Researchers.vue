<template>
    <v-container>
        <div id="ResearcherID"></div>
        <!--    Kommentar-->
        <v-card>
            <v-toolbar dense dark>
                <h3 class="headline mb-0">Wissenschaftliche Mitarbeiter</h3>
            </v-toolbar>

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

            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>

            <v-card-title class="mt-2">
                Mitarbeiter-Administration
            </v-card-title>


            <v-card-actions class="mt-n5">
                <v-container>
                    <v-row>
                        <v-col class="pa-0">
                            <v-card outlined height="100%">

                                <v-card-title class="text-subtitle-2">
                                    <v-col align="center" class="pa-0">
                                        Löschen
                                    </v-col>
                                </v-card-title>

                                <!--    <v-card-text class="grow">

                                    </v-card-text>-->

                                <v-card-action>
                                    <v-col align="center" class="pa-0">
                                        <v-btn class="mt-14" id="BtnId" text outlined rounded
                                               @click="MitarbeiterLoeschen">
                                            <v-icon left> mdi-delete</v-icon>
                                            Mitarbeiter Löschen
                                        </v-btn>
                                    </v-col>
                                </v-card-action>
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

                                <v-card-action>
                                    <v-col align="center">
                                        <v-btn id="BtnId" text outlined color="success" @click="MitarbeiterAdden">
                                            <v-icon left> mdi-plus</v-icon>
                                            Hinzufügen
                                        </v-btn>
                                    </v-col>
                                </v-card-action>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-btn fab>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </v-row>
                </v-container>

            </v-card-actions>

        </v-card>

        <CFooter></CFooter>

    </v-container>
</template>

<script>
    import axios from 'axios'
    import CFooter from "@/components/Footer";

    export default {
        name: "ResearchersOverview",
        props: {
            Mitarbeiter: Array
        },
        components: {
            CFooter
        },
        data: function () {
            return {
                singleSelect: true,
                selected: [],
                neuerMitarbeiter: '',
                neuerBoss: '',
                neuesDepartment: '',
                //selectedResearcherId: [],
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
                axios.post('http://localhost:3000/addresearcher', {
                    name: this.neuerMitarbeiter,
                    boss: this.neuerBoss,
                    department: this.neuesDepartment
                })
                window.location.reload()
            }
        }
    };
</script>

