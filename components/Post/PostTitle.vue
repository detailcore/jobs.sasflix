<script setup lang="ts">
defineProps<{
  id: number
  title: string
  isLink?: boolean
}>()
</script>

<template>
  <NuxtLink v-if="isLink" :to="`/posts/${id}`" class="title">
    <h2>{{ title }}</h2>
  </NuxtLink>

  <h1 v-else class="title">{{ title }}</h1>
</template>

<style lang="scss">
.title {
  color: #000;
  display: inline-block;
  text-decoration: none;
  transition: color 0.2s;
  h2 {
    @extend %text-h1;
  }
}

a.title:hover {
  color: var(--ui-accent-primary);
}
</style>
