export const usePostStore = defineStore('postStore', () => {
  /**
   * State
   */
  const posts = ref<IPost[]>([])

  /**
   * Getters
   */

  /**
   * Setters
   */
  const setReaction = (id: number, type: 'likes' | 'dislikes') => {
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

  return {
    posts,

    setReaction,
    fetchPosts,
    fetchPostById,
  }
})
