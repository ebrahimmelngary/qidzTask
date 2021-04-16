import {
  makeGetRequest,
} from '../../../services';
import {
  MAKE_SEARCH,
  SET_USER_WISH_LIST,
  START_LOADING,
  STOP_LOADING,
} from '../types';

export const fetchSearchData = (searchText: string) => async (
  dispatch: (arg0: { type: any; payload: { data: any } }) => any,
) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await makeGetRequest({
      url: `/search/movie?api_key=9018c0016456ae9118794dd5bffa958a&language=en-US&page=1&include_adult=false&query=${searchText.toLowerCase()}`,
    });
    if (response.status === 200) {
      dispatch({ type: STOP_LOADING });
      dispatch({ type: MAKE_SEARCH, payload: { data: response.data.results } });
    }
  } catch (err) {
    dispatch({ type: STOP_LOADING });
  }
};

export const fetchUserWishList = () => async (
  dispatch: (arg0: { type: any; payload: { list: any } }) => any,
) => {
  try {
    dispatch({ type: SET_USER_WISH_LIST, payload: { list: response.data } });
  } catch (err) { }
};
