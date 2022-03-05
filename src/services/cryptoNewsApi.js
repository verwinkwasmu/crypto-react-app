import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

  const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'c25fa2b3b6msh34fa8a5a08bb99ap146277jsnd5d4017ab55c'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

  const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders})

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl 
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery} = cryptoNewsApi;