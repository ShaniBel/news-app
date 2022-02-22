import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Form, InputGroup, FormControl } from "react-bootstrap"
import { Link, Route } from "react-router-dom"
import NewsItem from "../components/NewsItem"
import SearchBox from "../components/SearchBox"
import Message from "../components/Message"
import Loader from "../components/Loader"

import { listNews } from "../actions/newsActions"

const HomeScreen = ({ match }) => {
  const [category, setCategory] = useState("general")

  let keyword = match.params.keyword

  const dispatch = useDispatch()

  const news = useSelector((state) => state.newsList)

  const { loading, error, newsList } = news

  useEffect(() => {
    dispatch(listNews(category, keyword))
  }, [dispatch, keyword, category])

  return (
    <>
      <Container>
        <h2>Latest news</h2>
        <Route render={({ history }) => <SearchBox history={history} />} />
        <Row>
          <Form
            onChange={(e) => {
              setCategory(e.target.value)
              console.log(e.target.value)
            }}
          >
            <div key={`inline-radio`} className='mb-3'>
              <Form.Check
                inline
                label='general'
                value='general'
                name='category'
                type='radio'
                id={`inline-radio-1`}
              />
              <Form.Check
                inline
                label='sports'
                value='sports'
                name='category'
                type='radio'
                id={`inline-radio-2`}
              />
              <Form.Check
                inline
                label='business'
                value='business'
                name='category'
                type='radio'
                id={`inline-radio-3`}
              />
              <Form.Check
                inline
                label='entertainment'
                value='entertainment'
                name='category'
                type='radio'
                id={`inline-radio-3`}
              />
              <Form.Check
                inline
                label='health'
                value='health'
                name='category'
                type='radio'
                id={`inline-radio-3`}
              />
              <Form.Check
                inline
                label='science'
                value='science'
                name='category'
                type='radio'
                id={`inline-radio-3`}
              />
              <Form.Check
                inline
                label='technology'
                value='technology'
                name='category'
                type='radio'
                id={`inline-radio-3`}
              />
            </div>
          </Form>
        </Row>
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
