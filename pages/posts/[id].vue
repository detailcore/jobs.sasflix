<script setup lang="ts">
const postStore = usePostStore()

const route = useRoute()

// получить пост из хранилища
const currentPost = computed(() => {
  return postStore.posts.find(({ id }) => id === +route.params.id) as IPost
})

// если поста нет в хранилище, получить по id из API
if (!currentPost.value) {
  await postStore.fetchPostById(+route.params.id)
}
</script>

<template>
  <div class="wrapper page-post">
    <PostItem :post="currentPost" />
  </div>
</template>

<style lang="scss">
.page-post {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
