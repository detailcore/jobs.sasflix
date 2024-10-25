declare global {
  interface IComment {
    id: number
    body: string
    postId: number
    likes: number
    user: IUser
  }
}

export {}
