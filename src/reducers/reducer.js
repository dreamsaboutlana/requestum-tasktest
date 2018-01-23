import * as constant from '../actions/constants';

export default function reducer(state = {
  fetchedData: [],
  incomeData: [],
  isLoading: false
}, action) {
  switch (action.type) {
    case constant.LOAD_PAGE_DATA: {
      return Object.assign({}, state, {
        fetchedData: [...state.fetchedData],
        incomeData: 0,
        isLoading: true
      });
    }
    case constant.LOAD_PAGE_DATA_SUCCESS: {
      return Object.assign({}, state,
        {
          fetchedData: [
            ...state.fetchedData,
            ...action.payload
          ],
          incomeData: action.payload.length,
          isLoading: false
        }
      );
    }
    case constant.LOAD_PAGE_DATA_FAILURE: {
      return Object.assign({}, state, { fetchedData: [action.payload], isLoading: false });
    }
    default:
      return state;
  }
}
