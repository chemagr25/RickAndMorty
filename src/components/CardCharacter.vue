<template>
    <div class="details bg-white/20  animate-fade animate-duration-1000 min-w-[15rem] max-w-[20rem] hover:bg-white/40  hover:cursor-pointer shadow-xl text-white text-lg pt-4 px-4">
        <div class="flex gap-5 flex-col h-full justify-center items-start pb-1">
            <img v-if="props.img" class="w-4/5 rounded-md self-center shadow-lg" :src="props.img" alt="">
      
            <div class="flex flex-col  h-full  ">
                <p class="font-semibold text-2xl">{{ props.name }}</p>
                <p class="font-thin">Specie: <span class="font-medium">{{ props.specie }}</span></p>
                <p class="font-thin">Location: <span class="font-medium">{{ props.location }}</span></p>    
                <p class="font-thin">Origin: <span class="font-medium">{{ props.origin }}</span></p>    
            </div>
       
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['name', 'img', 'specie', 'location', 'origin'])

</script>

<style  scoped>
.details {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>