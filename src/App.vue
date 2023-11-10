
<script setup>
import NavigationButtons from '@/components/NavigationButtons.vue'
import searchComponent from '@/components/searchComponent.vue';

</script>


<template>
  <div class="w-full justify-center flex">
    <img src="./img/logo.png" class="w-1/2 lg:w-1/3 logo" alt="">
  </div>
  <!-- <div class=" flex-col  flex lg:flex-row justify-between items-center  px-12">
    <NavigationButtons />
    <div  class="w-full md:w-1/4 flex flex-col max-h-12">
        <searchComponent/>
    </div>



  </div> -->
  <router-view></router-view>
</template>


<style scoped> .logo {
   filter: drop-shadow(5px 5px 5px #000);
 }
</style>



