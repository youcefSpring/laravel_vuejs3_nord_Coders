require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import { createApp } from 'vue';
import CustomerIndex from './components/Customer/CustomerIndex.vue';
import router from './router';

createApp({
    components : {
        CustomerIndex
    }
})
.use(router)
.mount("#app");
