import { timeRevalidate } from '@/config/general'

export const fetchHygraphql = async (query: string) => {
  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHCMS_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN!}`
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: timeRevalidate
    }
  })

  const { data } = await response.json()
  return data
}
