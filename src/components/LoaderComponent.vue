<template>
    <div>
        <img class="rotate" src="../img/portal.png" alt="">
    </div>
</template>



<style scoped>
.rotate {
    animation: rotation 1s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}
</style>