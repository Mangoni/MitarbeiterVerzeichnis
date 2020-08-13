<template>
    <div>
        <v-sheet
                v-if="$vuetify.breakpoint.smAndUp"
                :elevation="4"
                class="pa-3"

        >
            <h3>Filter</h3>
            <v-radio-group v-model="KursFilter" :mandatory="true">
                <v-radio
                        v-for="(Kurs,i) in Kurse"
                        :key="i"
                        :label="Kurs"
                        :value="i"
                />
            </v-radio-group>
        </v-sheet>
        <v-expansion-panels v-else>
            <v-expansion-panel>
                <v-expansion-panel-header expand-icon="mdi-chevron-down">
                    Filter
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-radio-group v-model="KursFilter" :mandatory="true">
                        <v-radio
                                v-for="(Kurs,i) in Kurse"
                                :key="i"
                                :label="Kurs"
                                :value="i"
                        />
                    </v-radio-group>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                Kurse: [
                    'Alle',
                    'Mathematik',
                    'Thermodynamik',
                    'Produktionsplanung'
                ],
                KursFilter: 0
            }
        }
    }
</script>

<style scoped>

</style>