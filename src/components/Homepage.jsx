import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Cryptocurrencies, News } from '../components'

const Homepage = () => {
  return (
    <>
      <div>
        <div className="fs-1 mb-5 text-center">
          <span><b>Top 10 Cryptocurrencies in the World</b></span>
        </div>
        <Cryptocurrencies simplified />
        <Button style={{backgroundColor: "#faebd7"}} as={Link} to="/cryptocurrencies" variant="dark" className="mb-5 text-dark">Show More Cryptos</Button>
      </div>

      <div>

        <News simplified />
        <Button style={{backgroundColor: "#faebd7"}} as={Link} to="/news" variant="dark" className="mb-5 text-dark">Show More News</Button>
      </div>

    </>
  )
}

export default Homepage