<template>
    <div class="details bg-white/20  animate-fade animate-duration-1000 min-w-[15rem] max-w-[16rem] hover:bg-white/40  hover:cursor-pointer shadow-xl text-white text-lg pt-4 px-4">
        <div class="flex gap-3 flex-col justify-center items-center ">
            <img v-if="props.img" class="w-4/5 rounded-md shadow-lg" :src="props.img" alt="">
      
            <div class="flex flex-col self-start">
                <p class="font-semibold">{{ props.name }}</p>
                <p class="font-thin">Specie: <span class="font-medium">{{ props.specie }}</span></p>
                <p class="font-thin">Location: <span class="font-medium">{{ props.location }}</span></p>    
            </div>
            <div class="alive">

            </div>

        </div>
    </div>
</template>

<script setup>

const props = defineProps(['name', 'img', 'specie', 'location'])

</script>

<style  scoped>
.details {
    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>