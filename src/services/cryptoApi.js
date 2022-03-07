import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'c25fa2b3b6msh34fa8a5a08bb99ap146277jsnd5d4017ab55c'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl 
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getGlobalStats: builder.query({
            query: () => createRequest('/stats')
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
        })
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetGlobalStatsQuery, useGetCryptoHistoryQuery
} = cryptoApi