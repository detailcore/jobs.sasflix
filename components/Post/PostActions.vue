<script setup lang="ts">
import IconLike from '@/assets/icons/like.svg'
import IconDislike from '@/assets/icons/trash.svg'

defineProps<{
  id: number
  reactions: IReactions
}>()

const { setReaction } = usePostStore()
</script>

<template>
  <div class="post-actions">
    <div :class="['item', { active: reactions.state === 1 }]" @click="setReaction(id, 'likes')">
      <IconLike />
      Like
      <div class="amount">{{ reactions.likes }}</div>
    </div>

    <div :class="['item', { active: reactions.state === -1 }]" @click="setReaction(id, 'dislikes')">
      <IconDislike />
      Trash
      <div class="amount">{{ reactions.dislikes }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.post-actions {
  height: 100%;
  display: flex;
  column-gap: 2px;
  @extend %text-caption;

  .item {
    cursor: pointer;
    min-width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--ui-mask-light);

    &:hover {
      color: rgba(255, 255, 255, 0.95);
    }

    // like
    &:first-child {
      border-radius: 1.875rem 0 0 1.875rem; // 30px 0 0 30px
      &:hover {
        background-color: var(--ui-accent-primary-dark);
        .amount {
          opacity: 1;
          color: rgba(255, 255, 255, 0.95);
        }
      }
    }

    // trash
    &:last-child {
      border-radius: 0 1.875rem 1.875rem 0; // 0 30px 30px 0
      &:hover {
        background-color: var(--ui-text-primary-dark);
        .amount {
          opacity: 1;
          color: rgba(255, 255, 255, 0.95);
        }
      }
    }
  }

  .item.active {
    color: rgba(255, 255, 255, 0.95);
    background-color: var(--ui-accent-primary-dark);
    .amount {
      opacity: 1;
      color: rgba(255, 255, 255, 0.95);
    }
  }
  .item:first-child {
    &.active {
      background-color: var(--ui-accent-primary-dark);
    }
  }
  .item:last-child {
    &.active {
      background-color: var(--ui-text-primary-dark);
    }
  }

  .amount {
    opacity: 30%;
    margin-left: 6px;
    color: var(--ui-text);
    @extend %text-number-tab;
  }

  svg {
    width: 0.8125rem;
    font-size: 1rem;
    margin-right: 4px;
  }
}
</style>
