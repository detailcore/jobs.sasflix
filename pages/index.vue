<script setup lang="ts">
const postStore = usePostStore()

await postStore.fetchPosts()
</script>

<template>
  <main class="wrapper page-home">
    <PostItem v-for="post in postStore.posts" :key="post.id" :post="post" />
  </main>
</template>

<style lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
