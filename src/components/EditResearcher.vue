<template>

    <v-container>
        <v-row>
            <v-col cols="4">
                <v-card outlined>

                    <v-card-title class="text-subtitle-2">
                        <v-col align="center" class="pa-0">
                            Mitarbeiterdaten anpassen
                        </v-col>
                    </v-card-title>

                    <v-card-text>

                        <v-text-field
                                label="ID"
                                v-model="editedSelectedResearcher._id"
                                disabled
                        ></v-text-field>

                        <v-text-field
                                label="Name"
                                v-model="editedSelectedResearcher.name"
                        ></v-text-field>

                        <v-text-field
                                label="Boss"
                                v-model="editedSelectedResearcher.boss"
                        ></v-text-field>

                        <v-text-field
                                label="Department"
                                v-model="editedSelectedResearcher.department"
                        ></v-text-field>

                    </v-card-text>

                    <v-card-actions>
                        <v-col align="center">
                            <v-btn id="BtnId" text outlined color="success"
                                   @click="editResearcher(editedSelectedResearcher);showSnackbar('verändert')">
                                <v-icon left> mdi-account-edit</v-icon>
                                Aktualisieren
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "EditResearcher",
        data() {
            return {
                editedSelectedResearcher: this.$store.getters.getSelectedResearcher
            }
        },
        methods: {
            editResearcher(editedResearcher) {
                this.$store.dispatch('editResearcher', editedResearcher)
                this.$router.push({name: 'nHome'})
            },
            showSnackbar(task) {
                this.$store.commit('showSnackbar', task)
            }
        }
    }
</script>

<style scoped>

</style>