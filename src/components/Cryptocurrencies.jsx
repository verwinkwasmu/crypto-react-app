import millify from 'millify'
import React, { useState, useEffect } from 'react'
import { Card, Col, Row, InputGroup, FormControl, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())) 
    setCryptos(filteredData)
  }, [cryptosList, searchTerm])
  if(isFetching) return 'Loading...'

  return (
    <>
      {!simplified && (

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2" onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      )}

      <Row>
        {cryptos?.map((currency) => (
          <Col key={currency.uuid}>
            <Nav.Link as={Link} key={currency.uuid} to={`/crypto/${currency.uuid}`} style={{color: "black"}}>
              <Card style={{ width: '18rem' }} className="mb-5">
                <Card.Body>
                  <Card.Title className="text-center">{`${currency.rank}. ${currency.name}`} <img className="ms-2" style= {{maxHeight: "40px"}} src={currency.iconUrl} alt="icon"></img></Card.Title>
                  <hr/>
                  <Card.Text>
                    <p>Price(USD): ${millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>
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