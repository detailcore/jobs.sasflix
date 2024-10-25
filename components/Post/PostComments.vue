<script setup lang="ts">
const postStore = usePostStore()

const route = useRoute()

if (route.name === 'posts-id') {
  await postStore.fetchCommentsById(+route.params.id)
}
</script>

<template>
  <aside class="post-comments" id="comments">
    <div class="count">{{ postStore.comments.length }} комментариев</div>

    <PostComment v-for="comment in postStore.comments" :key="comment.id" :comment="comment" />
  </aside>
</template>

<style lang="scss">
.post-comments {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  .count {
    @extend %text-h1;
  }
}
</style>
