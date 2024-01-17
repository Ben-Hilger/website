<template>
    <div className="flex flex-row items-center justify-center gap-5 overflow-scroll">
        <img 
            class="h-56"
            v-for="(image, index) in images"
            v-bind:key="index"
            v-bind:src="image.src"
            v-bind:alt="image.alt"
        />
    </div>
</template>

<script setup lang="ts">

    export type ImageDetails = {
        src: string,
        alt: string
    }

    interface Props {
       images: ImageDetails[] 
    }

    defineProps<Props>()

</script>
