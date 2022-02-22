import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import { Link, Route } from "react-router-dom"
import NewsItem from "../components/NewsItem"
import SearchBox from "../components/SearchBox"
import Message from "../components/Message"
import Loader from "../components/Loader"

import { listNews } from "../actions/newsActions"

const HomeScreen = ({ match }) => {
  const [category, setCategory] = useState("general")

  let keyword = match.params.keyword
  console.log(keyword)
  const dispatch = useDispatch()

  const news = useSelector((state) => state.newsList)

  console.log(news)
  const { loading, error, newsList } = news
  console.log(newsList)

  useEffect(() => {
    console.log("here")
    dispatch(listNews(category, keyword))
  }, [dispatch, keyword, category])

  return (
    <>
      <Container>
        <h2>Latest news</h2>
        <Route render={({ history }) => <SearchBox history={history} />} />
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
