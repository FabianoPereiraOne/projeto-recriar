import { queryEvents } from '@/graphql/queries/events.query'
import { fetchHygraphql } from '@/lib/fetchHygraphql'
import { getPostsType } from '@/types/getPostsType'

type responseProps = {
  posts: getPostsType[]
}

export const useGetPostsData = async () => {
  const response: responseProps = await fetchHygraphql(queryEvents)
  return response
}
