<template>

       <form class="space-y-6" @submit.prevent="storeCustomer">
          <div>
              <label
              for="name"
              class="block">Nom du client</label>
              <input
              type="text"
              id="name"
              v-model="form.name">
              </div>
          <div>
              <label for="phone" class="block">Télélphone</label>
              <input
              type="text"
              id="phone"
              v-model="form.phone">
        </div>
          <div>
              <label for="is_favourite" class="block">Favoris ?</label>
              <input
              type="checkbox"
              id="is_favourite"
              v-model="form.is_favourite">
        </div>
        <button type="submit" class="bg-blue-500 px-1 py-2 text-black rounded"  >Save</button>
       </form>
</template>

<script>
import { reactive } from '@vue/runtime-core'
import useCustomers from '../../services/customerServices';



    export default {
        setup(){
            const form = reactive({
                 name:'',
                 phone:'',
                 is_favourite:''
            });

            const  {createCustomer, errors } = useCustomers();

            const storeCustomer = async() => {
                        await createCustomer(...form);
                        this.$router.push({name : 'customers.index'});
            };

            return {
                form,
                errors,
                storeCustomer
            };
        }

    }

</script>
