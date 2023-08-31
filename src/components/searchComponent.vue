<script setup>
import { useCharacter } from '@/composables/useCharacter';
import { ref, watch } from 'vue'

const name = ref('')

const { searchCharacters } = useCharacter()

watch(name,  async(value)=> {
    await searchCharacters(value)
})



</script>


<template>
    <input v-model="name"
        class="bg-white/20 p-2  rounded-lg border border-white/20 w-full  focus-visible:outline-none placeholder:text-white/50 text-white"
        placeholder="Search characters..." type="text">
</template>



<style scoped></style>