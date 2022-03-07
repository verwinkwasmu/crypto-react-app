import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import { Row, Col, Table, Form } from 'react-bootstrap'
import { BsCurrencyDollar, BsHash, BsFillLightningFill, BsCashCoin, BsFillTrophyFill } from 'react-icons/bs';
import { LineChart } from '../components'

const CryptoDetails = () => {
  const { coinId } = useParams()
  const [ timePeriod, setTimePeriod ] = useState('7d')
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod })
  const cryptoDetails = data?.data?.coin
  console.log(coinHistory)
  if (isFetching) return "Loading...";

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <BsCurrencyDollar /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <BsHash /> },
    { title: '24h Volume', value: `${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <BsFillLightningFill /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <BsCashCoin /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <BsFillTrophyFill /> },
  ];

  return (

    <>
      <Row className="text-center">
        <h3>{data?.data?.coin.name} ({data?.data?.coin.symbol})</h3>
        <p>View value Statistics, Market Cap and Supply.</p>
      </Row>
      <hr />
      <Form.Group className="mb-3 w-25">
        <Form.Select defaultValue="7d" onChange={(e) => setTimePeriod(e.target.value)}>
        {time.map((date) => <option key={date} value={date}>{date}</option>)}
        </Form.Select>
      </Form.Group>

      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name}/>
      <Row className="my-5">
        <Col sm={6}>
          <h3>{cryptoDetails.name} Value Statistics</h3>
          <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
          <Table bordered striped hover size="sm" variant="dark">
            <tbody>
              {stats.map(({ icon, title, value }) => (

                <tr>
                  <td>
                    {icon} {title}
                  </td>
                  <td>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col sm={6}>
          <h3>{cryptoDetails.name} Links</h3>
          <Table bordered striped hover variant="dark">
            <tbody>
              {cryptoDetails.links?.map((link) => (
                <tr>
                  <td>
                    <span className=''>{link.type} </span>
                  </td>
                  <td>
                    <a href={link.url} target="_blank" rel="noreferrer" className="linkText">{link.name}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>What is {cryptoDetails.name}</h3>
          {HTMLReactParser(cryptoDetails.description)}
        </Col>
      </Row>

    </>
  )
}

export default CryptoDetails