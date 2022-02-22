import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import NewsItem from "../components/NewsItem"
import SearchBox from "../components/SearchBox"
import Message from "../components/Message"
import Loader from "../components/Loader"

import { listNews } from "../actions/newsActions"

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const news = useSelector((state) => state.newsList)

  const { loading, error, newsList } = news
  console.log(newsList)

  useEffect(() => {
    dispatch(listNews(keyword))
  }, [dispatch, keyword])

  return (
    <>
      <Container>
        <h2>Latest news</h2>
        <SearchBox />
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              {newsList.map((newsItem) => (
                <Col key={newsItem.id} sm={12} md={6} lg={4} xl={4}>
                  <NewsItem newsItem={newsItem} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </>
  )
}

export default HomeScreen
