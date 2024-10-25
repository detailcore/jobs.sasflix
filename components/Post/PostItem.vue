<script setup lang="ts">
import IconTail from '@/assets/icons/tail.svg'

defineProps<{ post: IPost }>()
</script>

<template>
  <article class="post-item">
    <PostTitle :id="post.id" :title="post.title" :isLink="$route.name !== 'posts-id'" />

    <div class="body">{{ post.body }}</div>

    <div class="footer">
      <PostActions :id="post.id" :reactions="post.reactions" />

      <NuxtLink v-if="$route.name !== 'posts-id'" :to="`/posts/${post.id}#comments`" class="link">
        Open comments
      </NuxtLink>

      <div class="date">Today</div>

      <div class="tags">
        <span v-for="(tag, i) in post.tags">
          <IconTail v-if="i === 0" />
          {{ tag }}
        </span>
      </div>
    </div>
  </article>

  <PostComments v-if="$route.name === 'posts-id'" />
</template>

<style lang="scss">
.post-item {
  .body {
    @extend %text-body;
    margin: 1rem 0 1.5rem 0;
  }

  .link {
    color: var(--ui-accent-primary);
    text-decoration: none;
    @extend %text-caption;
    &:hover {
      text-decoration: underline;
    }
  }

  .footer {
    gap: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 1.6875rem; // 27px
  }

  .date {
    color: var(--ui-border);
    @extend %text-caption;
  }

  .tags {
    gap: 4px;
    display: flex;
    @extend %text-caption;

    span {
      height: 18px;
      padding: 4px;
      color: var(--ui-text-primary-dark);
      background-color: var(--ui-mask-light);
      border-radius: 3px;
      font-size: 0.875rem;
      display: flex;
      align-items: center;

      &:first-child {
        position: relative;
        padding: 4px 4px 4px 0px;
        border-radius: 0 3px 3px 0;
        margin-left: 10px;
      }

      svg {
        color: var(--ui-mask-light);
        width: 10px;
        height: 17px;
        margin-left: -10px;
      }
    }
  }
}
</style>
