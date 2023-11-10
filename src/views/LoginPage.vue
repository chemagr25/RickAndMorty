<script lang="ts" setup>

import { supabase } from '../lib/supabaseClient';
import { ref } from 'vue'

const email = ref()
const password = ref()
const isActive = ref(true)


const logIn = async () => {

    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
    })

    console.log(data)

}

</script>

<template>
    <div class="w-full  flex justify-center gap-2 flex-col items-center p-4">


        <div class="w-3/4 md:w-1/3 rounded-lg p-5 shadow-2xl flex justify-center items-center flex-col   ">

            <p @click=" isActive = !isActive" class="text-center font text-white text-xl mb-5">Registrarse</p>
            <input 
                class="bg-white/20 p-2 mt-5 itext rounded-lg border border-white/20 w-full  focus-visible:outline-none placeholder:text-white/50 text-white"
                placeholder="Email" type="text">
            <input v-model="email"
                class="bg-white/20 p-2 mt-5 itext rounded-lg border border-white/20 w-full  focus-visible:outline-none placeholder:text-white/50 text-white"
                placeholder="Email" type="text">

            <input v-model="password"
            :class="[isActive ? ' itexte' : 'itext']"
                class="bg-white/20 mt-5 p-2 rounded-lg border border-white/20 w-full  focus-visible:outline-none placeholder:text-white/50 text-white"
                placeholder="Password" type="text">
                <p v-if="isActive" class="error text-white/50 p-2 rounded-md">La contraseña debe contener al menos 12 caracteres, una mayúscula y un simbolo</p>

            <button  class="btn text-center mt-5 py-2 text-white   w-1/3 rounded-lg bg-white/20 ">Registrarse</button>
        </div>



    </div>
</template>



<style scoped>

.error {
    
    
    margin-top: 1em;
    background-color: rgba(255, 0, 0, .2);
    font: bold;
}

.itext {
    border: 1px #28d34d solid;
}


.itexte {
    border: 1px #e6606b solid;
}

</style>