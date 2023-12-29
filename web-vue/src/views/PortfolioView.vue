<script setup lang="ts">
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import ButtonType from '@/lib/ButtonType';
</script>

<template>
  <div class="mx-3">
    <h3 class="my-3">Portfolio</h3>
    <div class="d-flex">
      <Card 
        class="w-25"
        v-bind:href="'https://dev.ben-hilger.com'"
        v-bind:title="'Website built with NextJS and React'"
        v-bind:description="'Want to view this website built with another set of tools? '"
      >
        <template v-slot:title>
          Website built with NextJS and React
        </template>
        <template v-slot:description>
          Want to view this website built with another set of tools? Visit a sister website that's built with NextJS, React, and Tailwind CSS
        </template>
        <template v-slot:action>
          <Button
            v-bind:link-type="ButtonType.Primary"
            v-bind:href="'https://dev.ben-hilger.com'"
            v-bind:target="'_blank'"
          >
            Visit Website
          </Button>
        </template>
      </Card>
    </div>
  </div>

</template>