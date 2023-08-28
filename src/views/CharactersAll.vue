<script setup>
import { onMounted, ref } from 'vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import CardCharacter from '../components/CardCharacter.vue';
import PaginationComponent from '@/components/PaginationComponent.vue'

import { useCharacter } from '../composables/useCharacter'
const { getCharacters, characters, isLoading } = useCharacter()
const currentPage = ref(1)


onMounted(async () => {
  await getCharacters(currentPage.value)
})


const prevPage = (n) => {
  getCharacters(n)
}


const nextPage = (n) => {
  getCharacters(n)
}

</script>

<template>
  <div v-if="isLoading" class="loader  w-full flex justify-center items-center flex-col text-primary">
    <LoaderComponent class="mt-32" />
  </div>
  <div v-else>
    <div class=" flex-col  flex lg:flex-row justify-between items-center  px-12">
    <div class="flex gap-8 mb-8 lg:m-0">
        <router-link class="bg-white/10 py-2 px-4 text-white rounded-full text-lg" :to="{name:'all-characters'}">Characters</router-link>
        <router-link class="bg-white/10 py-2 px-4 text-white rounded-full text-lg" :to="{name:'all-locations'}">Locations</router-link> 
    </div>
      <input
        class="bg-white/20 p-2 max-h-12 rounded-lg border border-white/20 w-full lg:w-1/4 focus-visible:outline-none placeholder:text-white/50 text-white"
        placeholder="Search..." type="text">
    </div>

    <div class="characters grid-cols-4  justify-items-center gap-8 w-full grid p-12">
      <CardCharacter class="col-span-4 md:col-span-2 lg:col-span-1" v-for="character in characters" :key="character.id"
        :img="character.image" :name="character.name" :specie="character.species" :location="character.location.name" />
    </div>



    <div class="w-full p-4  flex justify-center">

    </div>
  </div>
  <div class="my-8 w-full flex justify-center">

    <PaginationComponent v-show="!isLoading" :total-pages="42" @prevPage="prevPage" @nextPage="nextPage" />

  </div>
</template>




<style scoped>
.router-link-active {
  background-color: rgba(255, 255, 255, .5);
  font-weight: bold;
}


</style>