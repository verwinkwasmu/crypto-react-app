import millify from 'millify'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies, News } from '../components'

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loading...'
  return (
    <>
      <Container className="fluid">
        <Row>
          <Col><h4>Total Cryptocurrency {globalStats.total}</h4></Col>
          <Col><h4>Total Exchanges {millify(globalStats.totalExchanges)}</h4></Col>
          <Col><h4>Total Market Cap {millify(globalStats.totalMarketCap)}</h4></Col>
          <Col><h4>Total 24h Volume {millify(globalStats.total24hVolume)}</h4></Col>
          <Col><h4>Total Markets {millify(globalStats.totalMarkets)}</h4></Col>
        </Row>  
      </Container>
      <Container>
        <div className="fs-2 d-flex justify-content-between">
          <span>Top 10 Cryptocurrencies in the world</span>
          <span>        
            <Link to="/cryptocurrencies">
              Show More
            </Link>
            </span>
        </div>
        <Cryptocurrencies simplified />
      </Container>

      <Container>
        <h2>Latest Crypto News</h2>
        <span>
          <Link to="/news">
            Show More
          </Link>
        </span>
        <News simplified />
      </Container>

    </>
  )
}

export default Homepage