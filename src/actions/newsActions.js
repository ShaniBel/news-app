import axios from "axios"
import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
} from "../constants/newsConstants"

export const listNews =
  (category = "general", keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: NEWS_LIST_REQUEST })
      console.log(keyword)
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=${keyword}&category=${category}&apiKey=f47e9e5d9b5a4f7ea0876cf22cd9120b`
      )
      console.log(
        `https://newsapi.org/v2/top-headlines?q=ukraine&category=${category}&apiKey=f47e9e5d9b5a4f7ea0876cf22cd9120b`
      )
      dispatch({ type: NEWS_LIST_SUCCESS, payload: data.articles })
    } catch (error) {
      dispatch({
        type: NEWS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
