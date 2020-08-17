<template>
    <div class="text-center">
        <v-overlay :value="overlay" class="flex-column">
            <p> Ihre Eingabe wird verarbeitet...</p>
            <v-progress-circular indeterminate size="64" />
        </v-overlay>
        <v-container v-if="!overlay">
            <v-row>
                <v-col sm="6" ofsett-sm="3" xl="4" ofsett-xl="4">
                    <h2>
                        Die Eingage wurde erfolgreich gespeichert.
                    </h2>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Danke",
        data(){
            return {
                overlay: false
            }
        },
        mounted(){
            setTimeout(()=> {
                this.overlay = false
            }, 3000)
        },
        beforeMount(){
            this.overlay = true
        }
    }
</script>

<style scoped>

</style>