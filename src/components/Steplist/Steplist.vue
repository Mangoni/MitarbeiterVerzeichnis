<template>
    <v-container>
        <v-row>
            <v-col>
                <v-stepper v-model="step">
                    <v-stepper-header>
                        <v-stepper-step step="1" :complete="step >1"></v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="2" :complete="step >2"></v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="3"></v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                       <!-- <StepOne></StepOne>
                        <StepTwo></StepTwo>
                        <StepThree></StepThree>-->
                    </v-stepper-items>
                </v-stepper>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
 /*   import StepOne from "StepOne";
    import StepTwo from "StepTwo";
    import StepThree from "StepThree";*/

    export default {
        name: "Steplist",
        data() {
            return {
                step: 1
            }
        },
        components:{
 /*           StepOne,
            StepTwo,
            StepThree*/
        }
    }
</script>

<style scoped>

</style>