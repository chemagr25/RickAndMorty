<script setup>
const props = defineProps(['name', 'episode', 'date'])

</script>
<template>
    <div class="text-white hover:bg-white/40  cursor-default bg-white/10 rounded-lg shadow-xl m-1 p-2">
        <p class="font-thin"> Name: <span class="font-bold">{{ props.name }}</span> </p>
        <p class="font-thin"> Episode: <span class="font-bold">{{ props.episode }}</span> </p>
        <p class="font-thin"> Air Date: <span class="font-bold">{{ props.date}}</span> </p>
    </div>
</template>


