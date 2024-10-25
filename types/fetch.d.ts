declare global {
  interface IFetch {
    total: number
    skip: number
    limit: number
  }

  interface IFetchPosts extends IFetch {
    posts: IPost[]
  }

  interface IFetchComments extends IFetch {
    comments: IComment[]
  }
}

export {}
