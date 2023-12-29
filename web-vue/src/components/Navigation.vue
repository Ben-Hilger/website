<script setup lang="ts">
import { useRoute } from 'vue-router';
import Button from './Button.vue';
import ButtonType from '@/lib/ButtonType';

const navItems: {
  id: number,
  buttonType: ButtonType,
  target: string,
  href: string,
  label: string
}[] = [
  { id: 1, buttonType: ButtonType.Custom, target: "_self", href: "/", label: "Home" },
  { id: 2, buttonType: ButtonType.Custom, target: "_blank", href: "https://ben-hilger.github.io/about", label: "About"},
  { id: 5, buttonType: ButtonType.Custom, target: "_self", href: "/portfolio", label: "Portfolio"},
  { id: 3, buttonType: ButtonType.Custom, target: "_blank", href: "https://ben-hilger.github.io/", label: "Blog"},
  { id: 4, buttonType: ButtonType.Custom, target: "_blank", href: "https://github.com/Ben-Hilger/LeetCode", label: "LeetCode"}
];

function isActive(href: string) {
  return href === useRoute().path;
}

</script>

<template>
  <div class="d-flex justify-content-between align-items-center py-2 px-5 border border-black">
    <h2 class="ml-5">Ben Hilger</h2>
    <ul class="nav justify-content-center ">
      <li class="nav-item"
          v-bind:class="{'active': isActive(item.href)}"
          v-for="item in navItems"
          v-bind:key="item.id"
      >
        <Button 
          v-bind:linkType="item.buttonType"
          v-bind:href="item.href"
          v-bind:target="item.target"
        >
          {{ item.label }}
        </Button>
      </li>
    </ul>
    <ul class="nav justify-content-center gap-1">
      <li class="nav-item">
        <Button
          class="github-button text-white mr-3"
          v-bind:linkType="ButtonType.Custom"
          href="https://github.com/Ben-Hilger"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-1 w-1 m-1"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path v-bind:d="'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'" />
          </svg>
        </Button>
      </li>
      <li class="nav-item">
        <Button
          class="linkedin-button text-white ml-2"
          v-bind:linkType="ButtonType.Custom"
          target="_blank"
          href="https://www.linkedin.com/in/benjaminhilger/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-1 w-1 m-1"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path v-bind:d="'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'" />
          </svg>
        </Button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
}
</style>

<style scoped>

.active a {
  color: rgb(29 78 216);
}

a:hover {
  color: rgb(29 78 216);
}

a {
  color: rgb(17 24 39);
}
</style>