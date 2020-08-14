<template>
    <div>
        <h1>Hier ist das Magazin.</h1>
        <p>Magazin ID ist {{$route.params.MagazinId}}</p>
        <v-btn @click="goHome">
            Go Home
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "Magazin",
/*        created(){
            alert('Diese Magazin ID wurde gewählt: ' + this.$route.params.MagazinId);
        },*/
        methods:{
            goHome(){
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>