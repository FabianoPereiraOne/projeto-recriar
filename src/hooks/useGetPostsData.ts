import { queryEvents } from '@/graphql/queries/events.query'
import { fetchHygraphql } from '@/lib/fetchHygraphql'
import { responseProps } from '@/types/getPostsType'

export const useGetPostsData = async () => {
  const response: responseProps = await fetchHygraphql(queryEvents)
  return response
}
