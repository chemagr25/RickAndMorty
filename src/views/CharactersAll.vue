<script setup>
import { onMounted, ref } from 'vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import CardCharacter from '@/components/CardCharacter.vue';
import PaginationComponent from '@/components/PaginationComponent.vue'

import { useCharacter } from '@/composables/useCharacter'
const { getCharacters, characters, isLoading, totalPages } = useCharacter()


onMounted(async () => {
  await getCharacters(1)
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


    <div class="characters grid-cols-4  justify-items-center gap-8 w-full grid p-12">
      <CardCharacter class="col-span-4 md:col-span-2 lg:col-span-1" v-for="character in characters" :key="character.id"
        :img="character.image" :name="character.name" :specie="character.species" :id="character.id" :location="character.location.name"
        :origin="character.origin.name"
        />
    </div>
    <div class="w-full p-4  flex justify-center">
    </div>
  </div>
  <div class="my-8 w-full flex justify-center">

    <PaginationComponent v-show="!isLoading" :total-pages="totalPages" @prevPage="prevPage" @nextPage="nextPage" />

  </div>
</template>




<style scoped>

</style>