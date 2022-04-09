import axios from "axios";
import { ref } from "vue";


export default function useCustomers(){

  const customers=ref([]);
  const errors=ref('');

  const getCustomers =  async ( ) => {
      let response = await axios.get('api/customers');
      customers.value =response.data.data
  }

  const createCustomer =  async ( data ) => {
  try {
    await axios.post('api/customers',data);
    //await router.push({ name : 'customers.index'});
  }
  catch (error){
        const createCustomerErrors=error.response.data.errors;

        for( const key in createCustomerErrors){
            errors.value+=createCustomerErrors[key][0]+ ' ';
        }
  }
}

  return {
      customers,
      errors,
      getCustomers,
      createCustomer
  };
}
