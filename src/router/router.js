import Vue from 'vue'
import VueRouter from 'vue-router'
// import individual routes...

import Magazin from "@/components/Magazin";
import Users from "@/components/Users";
import Steplist from "@/components/Steplist/Steplist";
import Home from "@/components/Home";
import Danke from "@/components/Danke";
import EditResearcher from "@/components/EditResearcher";

Vue.use(VueRouter);

const routes = [
    {path: '/Magazin/:MagazinId', component: Magazin},
    {path: '/users', component: Users},
    {path: '/Steplist', component: Steplist, name:'nSteplist'},
    {path: '/', component: Home, name:'nHome'},
    {path: '/Danke', component: Danke, name:'nDanke'},
    {path: '/editresearcher/:id', component: EditResearcher, name:'nEditResearcher', params: true, props:true}
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;