<script setup >

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCharacter } from '@/composables/useCharacter';
import LoaderComponent from '@/components/LoaderComponent.vue';
import NavigationButtons from '@/components/NavigationButtons.vue'
import searchComponent from '@/components/searchComponent.vue';
import CardEpisode from '@/components/CardEpisode.vue';

const { getCharacterById, characterById, characterEpisodes, isLoading } = useCharacter()

const id = ref()
id.value = useRoute().params.id

onMounted(async () => {
    await getCharacterById(id.value)
})

</script>


<template>
    <div v-if="isLoading" class="loader  w-full flex justify-center items-center flex-col text-primary">
        <LoaderComponent class="mt-32" />
    </div>

    <div v-else class="main-content w-full justify-center p-4 flex mt-24 ">


 
        <div
            class="details flex  flex-col flex-wrap bg-white/20  animate-fade p-4 animate-duration-1000 w-full md:w-3/4 rounded-xl border-white/30 border hover:cursor-pointer shadow-xl text-white text-lg ">
            <div class="charcter-info   flex-col flex lg:flex-row gap-5 ">
                <img class="rounded-lg max-h-64 max-w-[20rem]" :src="characterById?.image" alt="">
                <div class="details flex flex-col">
                    <p class="font-semibold text-2xl mb-3">{{ characterById?.name }}</p>
                    <p class="font-thin text-xl">Specie: <span class="font-medium">{{ characterById?.species }}</span></p>
                    <p class="font-thin text-xl">Location: <span class="font-medium">{{ characterById?.location.name}}</span></p>
                    <p class="font-thin text-xl">Origin: <span class="font-medium">{{ characterById?.origin.name }}</span></p>
                    <p class="font-thin text-xl">Status: <span class="font-medium">{{ characterById?.status }}</span></p>
                    <p class="font-thin text-xl">Gender: <span class="font-medium">{{ characterById?.gender }}</span></p>
                </div>
            </div>

            <p class="mt-6 font-bold text-2xl">Episodes</p>
            <div class="episodes grid mt-6 grid-cols-4">
                <CardEpisode class="col-span-4 md:col-span-2 lg:col-span-1" v-for="episode in characterEpisodes"
                    :name="episode?.name" :episode="episode?.episode" :date="episode?.air_date" />
            </div>

        </div>


    </div>
</template>