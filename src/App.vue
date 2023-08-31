
<script setup>
import NavigationButtons from '@/components/NavigationButtons.vue'


</script>


<template>
  <div class="w-full justify-center flex">
    <img src="./img/logo.png"  class="w-1/2 lg:w-1/3 logo" alt="">
  </div>
  <div class=" flex-col  flex lg:flex-row justify-between items-center  px-12">
      <NavigationButtons />
      <input
        class="bg-white/20 p-2 max-h-12 rounded-lg border border-white/20 w-full lg:w-1/4 focus-visible:outline-none placeholder:text-white/50 text-white"
        placeholder="Search..." type="text">
    </div>
  <router-view ></router-view>
</template>


<style scoped> 
.logo {
  filter: drop-shadow(5px 5px 5px #000);
}
</style>



