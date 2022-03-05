import React, {useState} from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const CryptoDetails = () => {
  const { coinId } = useParams()
  const { timePeriod, setTimePeriod} = useState('7d')
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const cryptoDetails = data?.data?.coin

  return (
    <div>CryptoDetails{coinId}</div>
  )
}

export default CryptoDetails