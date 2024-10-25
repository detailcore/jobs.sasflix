<script setup lang="ts">
defineProps<{ comment: IComment }>()

const { setRemoveCommentById } = usePostStore()
</script>

<template>
  <div class="post-comment">
    <div class="cover"></div>

    <div class="body">
      <div class="name">{{ comment?.user.username }}</div>

      <div class="text">{{ comment?.body }}</div>

      <div class="actions">
        <span class="date">Today</span>
        <span class="delete" @click="setRemoveCommentById(comment.id)">Удалить</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.post-comment {
  display: flex;
  column-gap: 0.5rem;

  .cover {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 3px solid var(--ui-text-primary);
  }

  //.body {
  //}

  .name {
    line-height: 0.875rem; // 14px
    font-size: 1.25rem;
    font-weight: 600;
  }

  .text {
    margin: 0.75rem 0 1rem 0;
    line-height: 0.875rem; // 14px
    @extend %text-body;
  }

  .actions {
    @extend %text-caption;

    .date {
      color: var(--ui-border);
    }
    .delete {
      color: red;
      cursor: pointer;
      margin-left: 0.75rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
