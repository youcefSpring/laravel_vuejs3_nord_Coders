import { createRouter, createWebHistory } from "vue-router";
import CustomerIndex from '../components/Customer/CustomerIndex.vue';
import CustomerCreate from '../components/Customer/CustomerCreate.vue';


const routes=[
    {
        path:'/dashboard',
        name : 'customers.index',
        component :CustomerIndex,
    },
    {
        path:'/create',
        name : 'customers.create',
        component :CustomerCreate,
    }
];


export default createRouter({
    history : createWebHistory(),
    routes
});
