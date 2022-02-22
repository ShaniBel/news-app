import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("")

  console.log(keyword)
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push(`/`)
    }
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => {
          setKeyword(e.target.value)
        }}
        placeholder='Search Products...'
        className='mr-sm-2'
      ></Form.Control>
      <Button type='submit' variant='outline-warning' className='p-2 search-btn'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
