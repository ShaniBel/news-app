import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
} from "../constants/newsConstants"

export const newsReducer = (state = { newsList: [] }, action) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return { loading: true, newsList: [] }
    case NEWS_LIST_SUCCESS:
      return {
        loading: false,
        newsList: action.payload,
      }
    case NEWS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
