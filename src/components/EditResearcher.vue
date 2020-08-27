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
                                :value="$route.params.id"
                                disabled
                        ></v-text-field>

                        <v-text-field
                                label="Name"

                                :value="$store.state.researchersData.researchers_root.find(x=>x._id === $route.params.id).name"
                                @input="editedResearcher.name = $event"
                        ></v-text-field>

                        <v-text-field
                                label="Boss"
                                :value="$store.state.researchersData.researchers_root.find(x=>x._id === $route.params.id).boss"
                                @input="editedResearcher.boss = $event"
                        ></v-text-field>

                        <v-text-field
                                label="Department"
                                :value="$store.state.researchersData.researchers_root.find(x=>x._id === $route.params.id).department"
                                @input="editedResearcher.department = $event"
                        ></v-text-field>

                    </v-card-text>

                    <v-card-actions>
                        <v-col align="center">
                            <v-btn id="BtnId" text outlined color="success"
                                   @click="editResearcher(editedResearcher);showSnackbar('verändert')">
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
                test: '',
                editedResearcher: {
                    _id:  this.$route.params.id,
                    name: this.$store.state.researchersData.researchers_root.find(x=>x._id === this.$route.params.id).name,
                    boss: this.$store.state.researchersData.researchers_root.find(x=>x._id === this.$route.params.id).boss,
                    department: this.$store.state.researchersData.researchers_root.find(x=>x._id === this.$route.params.id).department
                },
            }
        },
        methods: {
            editResearcher(editedResearcher) {
                console.log("editedResearcher: " )
                console.log(this.editedResearcher._id)
                console.log(this.editedResearcher.name)
                console.log(this.editedResearcher.boss)
                console.log(this.editedResearcher.department)
                console.log(this.$store.state.researchersData.researchers_root.find(x=>x._id === this.$route.params.id).name)
                this.$store.dispatch('editResearcher', editedResearcher)
            },
            showSnackbar(task) {
                this.$store.commit('showSnackbar', task)
            }
        },
        params:{
            id:''
        }

    }
</script>

<style scoped>

</style>