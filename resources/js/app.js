require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import { createApp } from 'vue';
import CustomerIndex from './components/Customer/CustomerIndex.vue';
import router from './router';
import CustomerCreate from './components/Customer/CustomerCreate.vue';

createApp({
    components : {
        CustomerIndex,
        CustomerCreate
    }
})
.use(router)
.mount("#app");
