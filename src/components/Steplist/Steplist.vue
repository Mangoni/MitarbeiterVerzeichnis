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
                        <StepOne
                                :data="data"
                                :rules="rules"
                                :next="next"
                        />
                        <StepTwo
                                :data="data"
                                :rules="rules"
                                :next="next"
                                :previous="previous"
                        />
                        <StepThree
                                :data="data"
                                :submitOrder="submitOrder"
                                :previous="previous"
                        />
                    </v-stepper-items>
<!--                        <StepTwo
                                :data="data"
                                :rules="rules"
                                :next="next"
                                :previous="previous"
                        />
                        <StepThree
                                :data="data"
                                :submitOrder="submitOrder"
                                :previous="previous"
                        />
                    </v-stepper-items>-->
                </v-stepper>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import StepOne from "@/components/Steplist/StepOne";
    import StepTwo from "@/components/Steplist/StepTwo";
    import StepThree from "@/components/Steplist/StepThree";

    export default {
        name: "Steplist",
        data() {
            return {
                step: 1,
                data:{
                    email:'',
                    name:'',
                    phone:'',
                    street:'',
                    state:'',
                    zip:'',
                },
                rules:{
                    required: value => !!value || 'Required',
                    zip: value => value.length == 5 || 'Must be five charachters',
                    phone: value => {
                        const pattern = /\d{10}/
                        return pattern.test(value)|| 'Invalid phone number.'
                    }
                }
            }
        },
        components:{
            StepOne,
            StepTwo,
            StepThree
        },
        methods:{
            next(){
                this.step +=1
            },
            previous(){
                this.step -=1
            },
            submitOrder(){
                this.$router.push({name:'nDanke'})
            }
        }
    }
</script>

<style scoped>

</style>