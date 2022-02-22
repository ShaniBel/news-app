import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const NewsItem = ({ newsItem }) => {
  return (
    <Card className='my-3 p-3 rounded product-card'>
      <Link to={`/product/${newsItem.id}`}>
        <Card.Img src={newsItem.urlToImage} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${newsItem.id}`}>
          <Card.Title as='div'>
            <strong>{newsItem.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='p'>{newsItem.publishedAt}</Card.Text>
        <Card.Text as='p'>{newsItem.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default NewsItem
