<template>
    <v-app dark>
        <div>
            <CTopNavi></CTopNavi>
        </div>
        <v-container fluid>
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
        <router-view></router-view>
        <hr>
        <div class="ma-4 mb-14" >
            <b>Links:</b>
            <router-link to="/" class="mx-4 ml-8">Home</router-link>
            <router-link to="/Users" class="mx-4">Nutzer</router-link>
            <router-link to="/Magazin/2" class="mx-4">Magazin</router-link>
        </div>
        <!--<hr class="mb-14">-->
        <CFooter></CFooter>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import CResearchers from "@/components/Researchers";
    import CSidebar from "@/components/Sidebar";
    import CTopNavi from "@/components/TopNavi";
    import CFooter from "@/components/Footer";

    export default {
        name: 'App',
        components: {
            CResearchers,
            CSidebar,
            CTopNavi,
            CFooter
        },
        mounted() {
            axios
                .get('http://localhost:3000/researchers')
                .then(response => this.$store.state.researchersData = response.data)
                .catch(error => console.log(error))
        }
    };
</script>