<template>
    <div class="flex gap-8 mb-8 lg:m-0">
        <router-link class="bg-white/10 py-2 px-4 text-white rounded-full text-lg" :to="{name:'all-characters'}">Characters</router-link>
        <router-link class="bg-white/10 py-2 px-4 text-white rounded-full text-lg" :to="{name:'all-locations'}">Locations</router-link> 
    </div>
</template>


<style scoped>
.router-link-active {
  background-color: rgba(255, 255, 255, .5);
  font-weight: bold;
}
</style>