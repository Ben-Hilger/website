<template>
    <div class="flex h-100 flex-col items-center justify-between p-2">
        <h1 class="welcome-title welcome-animation">Welcome!</h1>
        <p class="welcome-animation">Thanks for taking the time to visit my website! To begin, take a look at my <a class="text-blue-600" href="/portfolio">portfolio</a>. If you're interested in learning about tihs website, go check out the <a class="text-blue-600" href="/about">about</a> page.</p>
    </div>
</template>

<script lang="ts" setup>

</script>


<style scoped>

.welcome-animation {
    animation: fadeIn 2s;    
}

.welcome-title {
    font-size: 64px;
    margin: 0;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

</style>
