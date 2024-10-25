<script setup lang="ts">
defineProps<{ text: String }>()
</script>

<template>
  <header class="header">{{ text }}</header>
</template>

<style lang="scss">
.header {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 100%;
  margin-bottom: 3.625rem; //58px
  color: var(--ui-accent-primary);
}
</style>
