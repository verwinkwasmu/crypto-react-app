import moment from 'moment'
import React from 'react'
import { Card, Col, Nav, Row } from 'react-bootstrap'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const News = ({ simplified }) => {
  const newsCategory = 'Cryptocurrency'
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 20 })

  if (!cryptoNews?.value) return 'Loading...';

  return (
    <>
      <div className="fs-1 mb-5 text-center">
        <span><b>Latest Crypto News</b></span>
      </div>
      <Row className="justify-content-center">
        {cryptoNews.value.map((news, i) => (
          <Col key={i} className="col-md-auto mx-4">
            <Card style={{ width: '30rem' }} className="mb-5">
              <Card.Body>
                <Nav.Link href={news.url} target="_blank" rel="noreferrer" style={{ color: "black" }}>
                  <Card.Title>{news.name}
                  </Card.Title>
                </Nav.Link>
                <Card.Text>
                  <p className="text-dark">
                    {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                  </p>
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  <img style={{ maxHeight: "15px" }} src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" /> {news.provider[0]?.name}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{moment(news.datePublished).startOf('ss').fromNow()}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News