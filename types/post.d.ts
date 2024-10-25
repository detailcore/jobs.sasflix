declare global {
  interface IPost {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: IReactions
    views: number
    userId: number
  }

  interface IReactions {
    likes: number
    dislikes: number
    state?: number
  }
}

export {}
