<script setup lang="ts">

defineProps({
  imageSrc: {
    type: String,
    required: false,
    default: null
  },
  imageAlt: {
    type: String,
    required: false,
    default: null
  },
})

</script>

<template>
  <div class="card">
    <img v-if="imageSrc && imageAlt" class="card-img-top" v-bind:src="imageSrc" v-bind:alt="imageAlt">
    <div class="card-body">
      <h5 class="card-title">
        <slot name="title"></slot>
      </h5>
      <p class="card-text">
        <slot name="description"></slot>
      </p>
      <slot name="action">

      </slot>
    </div>
  </div>
</template>