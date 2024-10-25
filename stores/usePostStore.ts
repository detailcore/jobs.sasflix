export const usePostStore = defineStore('postStore', () => {
  /**
   * State
   */
  const posts = ref<IPost[]>([])
  const comments = ref<IComment[]>([])

  /**
   * Getters
   */

  /**
   * Setters
   */
  const setReaction = (id: number, type: 'likes' | 'dislikes') => {
    posts.value.find((item) => {
      if (item.id === id) {
        if (item.reactions.state === 0 || item.reactions?.state === undefined)
          item.reactions[type]++

        if (item.reactions.state === 1 && type === 'likes') {
          item.reactions.likes--
          item.reactions.state = 0
          return
        }

        if (item.reactions.state === 1 && type === 'dislikes') {
          item.reactions.likes--
          item.reactions.dislikes++
          item.reactions.state = -1
          return
        }

        if (item.reactions.state === -1 && type === 'dislikes') {
          item.reactions.dislikes--
          item.reactions.state = 0
          return
        }

        if (item.reactions.state === -1 && type === 'likes') {
          item.reactions.likes++
          item.reactions.dislikes--
          item.reactions.state = 1
          return
        }

        item.reactions.state = type === 'likes' ? 1 : -1
      }
    })
  }
  // удаление комментария по идентификатору
  const setRemoveCommentById = (id: number) => {
    comments.value = comments.value.filter((item) => item.id !== id)
  }

  /**
   * Actions
   */
  const fetchPosts = async (limit = 5) => {
    if (posts.value.length === limit) return

    const { data, error } = await useFetch<IFetchPosts>(
      `https://dummyjson.com/posts?limit=${limit}`,
      {
        pick: ['posts'],
      },
    )

    if (error.value) {
      console.warn(error.value)
    } else {
      posts.value = data.value!.posts ?? []
    }
  }

  const fetchPostById = async (postId: number) => {
    const { data, error } = await useFetch<IPost>(`https://dummyjson.com/posts/${postId}`)

    if (error.value) {
      console.warn(error.value)
    } else {
      posts.value[0] = data.value as IPost
    }
  }

  const fetchCommentsById = async (postId: number) => {
    const { data, error } = await useFetch<IFetchComments>(
      `https://dummyjson.com/posts/${postId}/comments`,
      {
        pick: ['comments'],
      },
    )

    if (error.value) {
      console.warn(error.value)
    } else {
      comments.value = data.value!.comments ?? []
    }
  }

  return {
    posts,
    comments,

    setReaction,
    setRemoveCommentById,

    fetchPosts,
    fetchPostById,
    fetchCommentsById,
  }
})
