<template>
    <v-stepper-content step ="2">
        <v-text-field
                v-model="data.street"
                label="Straße"
                required
        />
        <v-text-field
                v-model="data.state"
                label="Land"
                required
        />
        <v-text-field
                v-model="data.zip"
                :rules="[rules.required, rules.zip]"
                label="PLZ"
                required
        />

        <v-btn
                color="primary"
                @click="next"
        >
            Weiter
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
        name: "StepTwo",
        props: {
            next: Function,
            previous: Function,
            rules: Object,
            data: Object
        }
    }
</script>

<style scoped>

</style>