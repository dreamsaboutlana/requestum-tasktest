import axios from 'axios';
import * as constant from './constants';

export function loadPage(offset = 1, limit = 4) {

  return (dispatch) => {
    dispatch({
      type: constant.LOAD_PAGE_DATA
    });
    axios.get(`http://localhost:4444/list?page=${offset}&per_page=${limit}`)
      .then(({ data }) => {
        dispatch({ type: constant.LOAD_PAGE_DATA_SUCCESS, payload: data });
      })
      .catch((e) => {
        dispatch({ type: constant.LOAD_PAGE_DATA_FAILURE, payload: e.message });
      });
  };
}

export function loadMore(offset, limit) {
  return (dispatch) => {
    dispatch({
      type: constant.LOAD_PAGE_DATA
    });

    axios.get(`http://localhost:4444/list?page=${offset}&per_page=${limit}`)
      .then(({ data }) => {
        dispatch({ type: constant.LOAD_PAGE_DATA_SUCCESS, payload: data })
      })
      .catch((e) => {
        dispatch({ type: constant.LOAD_PAGE_DATA_FAILURE, payload: e.message })
      })
  }
}

