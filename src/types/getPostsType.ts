export type getPostsType = {
  id: string
  title: string
  content: {
    text: string
  }
  coverImage: {
    url: string
  }
  date: Date
  address: string
}
