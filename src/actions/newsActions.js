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

      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=${keyword}&category=${category}&apiKey=f7d45a699d404ca89d725fdd2e729dc9`
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
