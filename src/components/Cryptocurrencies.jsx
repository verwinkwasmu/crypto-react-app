import millify from 'millify'
import React, { useState, useEffect } from 'react'
import { Card, Col, Row, InputGroup, FormControl, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { BsCoin, BsFillBarChartFill, BsCalendar3 } from 'react-icons/bs';
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)
  }, [cryptosList, searchTerm])
  if (isFetching) return 'Loading...'
  console.log(cryptosList)
  return (
    <>
      {!simplified && (
        <div>
          <div className="fs-1 mb-5 text-center">
            <span><b>Top 100 Cryptocurrencies in the World</b></span>
          </div>
          <InputGroup className="mb-5 mt-2 w-25 mx-auto">
            <FormControl
              placeholder="Search for Cryptocurrencies"
              aria-label="Search for Cryptocurrencies"
              aria-describedby="basic-addon2" onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>


      )}

      <Row className="justify-content-center">
        {cryptos?.map((currency) => (
          <Col key={currency.uuid} className="col-md-auto mx-3">
            <Nav.Link as={Link} key={currency.uuid} to={`/crypto/${currency.uuid}`} style={{ color: "black" }}>
              <Card style={{ width: '18rem' }} className="mb-5">
                <Card.Body>
                  <Card.Title className="text-center">

                    {`${currency.rank}. ${currency.name}`}
                    <img className="ms-2" style={{ maxHeight: "40px" }} src={currency.iconUrl} alt="icon"></img>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-center">{currency.symbol}</Card.Subtitle>

                  <hr />
                  <Card.Text>
                    <p><BsCoin /> <b>Price (USD):</b> ${millify(currency.price)}</p>
                    <p><BsFillBarChartFill /> <b>Market Cap:</b> {millify(currency.marketCap)}</p>
                    <p><BsCalendar3 /> <b>Daily Change:</b> {millify(currency.change)}%</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Nav.Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies