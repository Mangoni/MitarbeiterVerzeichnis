<template>
    <v-stepper-content step="3">
        <v-list disabled dense>
            <v-subheader class="title">
                Prüfe Eingaben
            </v-subheader>
            <v-list-item-group color="primary">
                <v-list-item
                        v-for="(value,name) in data"
                        :key="name"
                >
                    <v-list-item-content>
                        <v-list-item-title>
                            {{name}}: {{value}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-btn
                color="primary"
                @click="submitOrder"
        >
            Absenden
        </v-btn>
        <v-btn
                text
                @click="previous"
        >
            Zurück
        </v-btn>
    </v-stepper-content>


</template>

<script>
    export default {
        name: "StepThree",
        props: {
            previous: Function,
            submitOrder: Function,
            data: Object
        }
    }
</script>

<style scoped>

</style>