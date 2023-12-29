<script setup lang="ts">
import { computed, type PropType } from 'vue';
import ButtonType from "@/lib/ButtonType";

const emits = defineEmits(["click"])

const props = defineProps({
  linkType: {
    type: String as PropType<ButtonType>,
    default: ButtonType.Primary
  },
  href: {
    type: String,
    required: true
  },
  target: {
    type: String,
    default: "_self"
  }
})

const buttonClass = computed(() => {
  if (props.linkType === ButtonType.Primary) {
    return "btn btn-primary";
  } else if (props.linkType === ButtonType.Outline) {
    return "btn btn-light";
  }
  return "btn";
});

</script>

<template>
  <a v-bind:href="href"
    v-bind:class="buttonClass"
    v-bind:target="target"
    class="d-flex justify-content-center align-items-center"
  >
    <slot></slot>
  </a>
</template>