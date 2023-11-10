<script setup>
import { onMounted} from 'vue';
import CardLocation from '@/components/CardLocation.vue';
import PaginationComponent from '@/components/PaginationComponent.vue'
import { useLocation } from '@/composables/useLocation'
import LoaderComponent from '@/components/LoaderComponent.vue';
import NavigationButtons from '@/components/NavigationButtons.vue'
import searchComponent from '@/components/searchComponent.vue';

const { getAllLocations, locations, isLoading } = useLocation()

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
  <div v-if="isLoading" class="loader  w-full flex justify-center items-center flex-col text-primary">
    <LoaderComponent class="mt-32" />
  </div>
  <div v-else>
    <div class=" flex-col  flex lg:flex-row justify-between items-center  px-12">
    <NavigationButtons />
    <div  class="w-full md:w-1/4 flex flex-col max-h-12">
        <searchComponent/>
    </div>



  </div>

    <div class="characters grid-cols-3 text-white place-content-center justify-items-center gap-8 w-full grid p-12">

      <CardLocation class="col-span-3 md:col-span-3 lg:col-span-1" v-for="location in locations" :key="location.id"
        :name="location.name" :type="location.type" :dimension="location.dimension" />

    </div>
    <div class="w-full p-4  flex justify-center">
    </div>
  </div>
  <div class="my-8 w-full flex justify-center">

    <PaginationComponent v-show="!isLoading" :total-pages="7" @prevPage="prevPage" @nextPage="nextPage" />

  </div>
</template>


