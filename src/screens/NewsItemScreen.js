import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap"
import Loader from "../components/Loader"
import Message from "../components/Message"

const NewsItemScreen = ({ match }) => {
  let id = Number(match.params.id)

  const news = useSelector((state) => state.newsList)

  const { loading, error, newsList } = news

  const newsItem = newsList.find((item, i) => i === id)

  let imageSrc =
    newsItem.urlToImage ||
    "https://maroc-diplomatique.net/wp-content/uploads/2022/02/Barid-Al-Bank-e1645548153430.jpg"

  return (
    <>
      <Container>
        <Link to='/' className='btn btn-light my-3'>
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              <Col md={5}>
                <Image src={imageSrc} alt={newsItem.title} fluid />
              </Col>
              <Col md={7}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{newsItem.title}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>{newsItem.publishedAt.substring(0, 10)}</ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      description:
                    </span>{" "}
                    {newsItem.description}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      content:
                    </span>{" "}
                    {newsItem.content}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  )
}

export default NewsItemScreen
