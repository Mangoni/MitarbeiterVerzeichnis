<template>
    <v-container>
        <div id="ResearcherID"></div>
        <v-card>
            <v-toolbar dense dark>
                <h3 class="headline mb-0">Wissenschaftliche Mitarbeiter</h3>
            </v-toolbar>

            <v-container style="height: 30vh" class="overflow-y-auto">
                <v-row v-scroll:#scroll-target="onScroll">
                    <v-data-table
                            v-model="selected"
                            :headers="Ueberschriften"
                            :items="$store.state.researchersData.researchers_root"
                            :single-select="singleSelect"
                            item-key="_id"
                            show-select
                            hide-default-footer
                    >
                        <template v-slot:item.name="{ item }">
                            <router-link :to="{ name: 'nEditResearcher', params: {id:item._id }}">{{ item.name }}</router-link>
                        </template>
                    </v-data-table>
                </v-row>
            </v-container>

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
                                               @click="deleteResearcher(selected[0]);showSnackbar('gelöscht')">
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
                                            v-model="newResearcher.name"
                                    ></v-text-field>

                                    <v-text-field
                                            label="Boss"
                                            v-model="newResearcher.boss"
                                    ></v-text-field>

                                    <v-text-field
                                            label="Department"
                                            v-model="newResearcher.department"
                                    ></v-text-field>

                                </v-card-text>

                                <v-card-actions>
                                    <v-col align="center">
                                        <v-btn id="BtnId" text outlined color="success"
                                               @click="addResearcher(newResearcher);showSnackbar('hinzugefügt')">
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
    export default {
        name: "ResearchersOverview",

        data: function () {
            return {
                singleSelect: true,
                selected: [],
                newResearcher: {
                    name: '',
                    boss: '',
                    department: ''
                },
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
                offsetTop: 0
            };
        },
        created() {
        },
        methods: {
            deleteResearcher(selectedResearcher) {
                this.$store.dispatch('deleteResearcher', selectedResearcher)
            },
            addResearcher(newResearcher) {
                this.$store.dispatch('addResearcher', newResearcher)
            },
            showSnackbar(task) {
                this.$store.commit('showSnackbar', task)
            },
            goToSteplist() {
                this.$router.push({name: 'nSteplist'})
            },
            onScroll(e) {
                this.offsetTop = e.target.scrollTop
            }
        }
    };
</script>

