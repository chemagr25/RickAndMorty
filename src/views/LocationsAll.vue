<script setup>
import { onMounted, ref } from 'vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import CardCharacter from '@/components/CardCharacter.vue';
import CardLocation from '@/components/CardLocation.vue';

import PaginationComponent from '@/components/PaginationComponent.vue'


import { useLocation } from '@/composables/useLocation'


const { getAllLocations, locations } = useLocation()

onMounted(async () => {
  await getAllLocations(1)
})


const prevPage = async (n) => {
  await getAllLocations(n)

}

const nextPage = async (n) => {
  await getAllLocations(n)

}

</script>

<template>
  <div class="loader  w-full flex justify-center items-center flex-col text-primary">
    <!-- <LoaderComponent class="mt-32" /> -->
  </div>
  <div>

    <div class="characters grid-cols-4 text-white justify-items-center gap-8 w-full grid p-12">


     
        <CardLocation class="col-span-4 md:col-span-2 lg:col-span-1" v-for="location in locations" :key="location.id"   :name="location.name" :type="location.type"   :dimension="location.dimension" />

    </div>
    <div class="w-full p-4  flex justify-center">
    </div>
  </div>
  <div class="my-8 w-full flex justify-center">

    <PaginationComponent :total-pages="7" @prevPage="prevPage" @nextPage="nextPage" />

  </div>
</template>


