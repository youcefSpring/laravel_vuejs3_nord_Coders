<template>
   <div class="flex flex-col">
       <div class="flex mb-3">
           <router-link
               :to="{ url :'/create'}"
               class="bg-green-500 px-1 py-2 text-black rounded"
            >
               creer un client
           </router-link>
       </div>
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Nom
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Telephone
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Satus
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="customer in customers" :key="customer.id" >
              <tr class="bg-gray-100 border-b" >
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" v-text="customer.id"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" v-text="customer.name">

              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"  v-text="customer.tel">

              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"

               v-bind:class="{ 'bg-green-100 text-green-800':customer.is_favourite==true }"
              v-text="customer.is_favourite">

              </td>
            </tr>
            </template>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import useCustomers from "../../services/customerServices.js";

    export default {
        setup(){
            const  { customers , getCustomers} = useCustomers();

            onMounted(getCustomers());

            return {
                customers
            };
        }
    }

</script>
