
<script setup>
import { ref } from 'vue';
const props = defineProps(['totalPages', 'currentPage'])
const emit = defineEmits(['prevPage', 'nextPage'])
const currentPage = ref(1)
const prevPage = () => {
  if (currentPage.value == 1) return
  currentPage.value--
  emit('prevPage', currentPage.value)
}

const nextPage = () => {
  if (currentPage.value == props.totalPages) return
  currentPage.value++
  emit('nextPage', currentPage.value)
}
</script>

<template>
  <div class="w-full flex  items-center flex-col justify-center">
    <p class="text-white mb-2 font-semibold text-lg">{{ currentPage }} of {{ props.totalPages }}</p>

    <nav aria-label="Page navigation example">
      <ul class="flex items-center  h-10 text-base">
        <li @click="prevPage">
          <button :disabled="currentPage === 1"
            class="flex items-center justify-center hover:bg-white/50 px-4 h-10 ml-0  border border-white/10 leading-tight text-white bg-white/20 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 1 1 5l4 4" />
            </svg>
          </button>
        </li>
        <li v-if="currentPage == props.totalPages" class="cursor-pointer hover:bg-white/60 ">
          <button
            class="flex items-center  border-y border-white/10 justify-center px-4 h-10 leading-tight text-white bg-white/20  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{
              '...' }}</button>
        </li>
        <li class="cursor-pointer " @click="prevPage" v-if="currentPage - 1 != 0">
          <button
            class="flex  items-center hover:bg-white/50  border-y border-white/10 justify-center px-4 h-10 leading-tight text-white bg-white/20  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{
              currentPage - 1 }}</button>
        </li>

        <li>
          <button
            class="flex items-center active font-bold  border-y border-white/10 justify-center px-4 h-10 leading-tight text-white bg-white/20  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{
              currentPage }}</button>
        </li>
        <li v-if="currentPage < props.totalPages" class="cursor-pointer " @click="nextPage">
          <button
            class="flex items-center  border-y border-white/10 hover:bg-white/50  justify-center px-4 h-10 leading-tight text-white bg-white/20  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{
              currentPage + 1 }}</button>
        </li>
        <li v-if="currentPage == 1" class="cursor-pointer">
          <button
            class="flex items-center   border-y border-white/10 justify-center px-4 h-10 leading-tight text-white bg-white/20  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{
              '...' }}</button>
        </li>
        <li @click="nextPage">
          <button :disabled="currentPage === props.totalPages"
            class="hover:bg-white/50  flex items-center border border-white/10 justify-center px-4 h-10 leading-tight text-white bg-white/20  rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>



  </div>
</template>


<style scoped>
.active {
  background-color: transparent;


}
</style>