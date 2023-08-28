

<template>
  <div class="w-full justify-center flex">
    <img src="./img/logo.png"  class="w-1/2 lg:w-1/3 logo" alt="">
  </div>
  <router-view ></router-view>
</template>


<style scoped> 
.logo {
  filter: drop-shadow(5px 5px 5px #000);
}
</style>



