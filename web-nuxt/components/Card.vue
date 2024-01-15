<template>
    <div v-bind:class="{'cursor-pointer': link}" 
        class="border rounded border-black p-2 m-2"
        v-on:click="navigateTo">
        <b class="text-lg">{{ title }}</b>
        <div v-if="description">{{ description }}</div>
    </div>
</template>

<script setup lang="ts">

    interface Props {
        title: string,
        description?: string,
        link?: string, 
        target?: string
    }

    const props = defineProps<Props>()

    function navigateTo() {
        if (!props.link) {
            return;
        }
        window.open(props.link, props.target ?? "_self");
    }
</script>
