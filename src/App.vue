<template>
    <v-app dark>
        <div>
            <CTopNavi></CTopNavi>
        </div>
        <v-container fluid="true">
            <v-row>
                <v-col cols="12" md="3" offset-lg="1">
                    <CSidebar></CSidebar>
                </v-col>
                <v-col md="9" lg="7">
                    <CResearchers></CResearchers>
                </v-col>
            </v-row>
        </v-container>

        <v-snackbar
                v-model="$store.state.snackbar.show"
                :timeout="6000"
                :top="true">
            {{$store.state.snackbar.message}}
        </v-snackbar>
        <hr>
        <router-link to="/">Homey</router-link>
        <router-link to="/Users">Nutzer</router-link>
        <router-link to="/Magazin/2">Magazin</router-link>
        <router-link to="/Steplist">Schrittliste</router-link>
        <hr>
        <router-view></router-view>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import CResearchers from "@/components/Researchers";
    import CSidebar from "@/components/Sidebar";
    import CTopNavi from "@/components/TopNavi"

    export default {
        name: 'App',
        components: {
            CResearchers,
            CSidebar,
            CTopNavi
        },
        mounted() {
            axios
                .get('http://localhost:3000/researchers')
                .then(response => this.$store.state.daten = response.data)
                .catch(error => console.log(error))
        }
    };
</script>