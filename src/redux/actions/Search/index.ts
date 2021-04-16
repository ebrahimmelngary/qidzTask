import {makeGetRequest} from '../../../services';
import {
  MAKE_SEARCH,
  SET_USER_WISH_LIST,
  START_LOADING,
  STOP_LOADING,
} from '../types';

export const fetchSearchData = () => async (
  dispatch: (arg0: {type: any; payload: {data: any}}) => any,
) => {
  try {
    dispatch({type: START_LOADING});
    await makeGetRequest({
      url: 's=car',
    }).then((response) => {
      if (response.status === 200) {
        dispatch({type: STOP_LOADING});
        dispatch({type: MAKE_SEARCH, payload: {data: response.data.Search}});
      }
    });
  } catch (err) {
    dispatch({type: STOP_LOADING});
  }
};

export const fetchUserWishList = () => async (
  dispatch: (arg0: {type: any; payload: {list: any}}) => any,
) => {
  try {
    dispatch({type: SET_USER_WISH_LIST, payload: {list: response.data}});
  } catch (err) {}
};
