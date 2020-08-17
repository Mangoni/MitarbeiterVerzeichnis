<template>
    <v-stepper-content step="1">
        <v-text-field
                v-model="data.name"
                :rules="[rules.required]"
                label="Name"
                required
        />
        <v-text-field
                v-model="data.email"
                :rules="[rules.required,rules.email]"
                label="E-Mail"
                required
        />
        <v-text-field
                v-model="data.phone"
                :rules="[rules.required, rules.phone]"
                label="Telefonnummer"
                required
        />

        <v-btn
                color="primary"
                @click="next"
        >
            Weiter
        </v-btn>
        <v-btn text @click="$router.replace({name:'nHome'})">
            Abbrechen
        </v-btn>
    </v-stepper-content>
</template>

<script>
    export default {
        name: "StepOne",
        props: {
            next: Function,
            rules: Object,
            data: Object
        }
    }
</script>

<style scoped>

</style>