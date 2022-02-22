import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const NewsItem = ({ newsItem }) => {
  let imageSrc =
    newsItem.urlToImage ||
    "https://maroc-diplomatique.net/wp-content/uploads/2022/02/Barid-Al-Bank-e1645548153430.jpg"
  return (
    <Card className='my-3 p-3 rounded product-card'>
      <Link to={`/newsItem/${newsItem.id}`}>
        <Card.Img src={imageSrc} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/newsItem/${newsItem.id}`}>
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
