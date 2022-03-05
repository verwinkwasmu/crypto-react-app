import moment from 'moment'
import React, {useState} from 'react'
import { Card, Col, Nav, Row } from 'react-bootstrap'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 50})
  const { data } = useGetCryptosQuery(100)
  console.log(cryptoNews)
  if(!cryptoNews?.value) return 'Loading...'; 
  
  return (
    <Row>
      {cryptoNews.value.map((news, i) => (
        <Col key={i}>
          <Card style={{ width: '20rem' }} className="mb-5">
            <Card.Img variant="top" src={news?.image?.thumbnail?.contentUrl || demoImage } alt="news" />
            <Card.Body>
              <Nav.Link href={news.url} target="_blank" rel="noreferrer" style={{color: "black"}}>
                <Card.Title>{news.name}</Card.Title>
              </Nav.Link>
              <Card.Text>
                <p>
                  {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}
                </p>
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                <img style={{maxHeight: "15px"}}src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=""/> {news.provider[0]?.name}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{moment(news.datePublished).startOf('ss').fromNow()}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News