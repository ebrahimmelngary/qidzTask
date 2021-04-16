import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from '../types';

export const addToWishlist = (item: any) => {
  return async (dispatch: (arg0: {type: any; payload: any}) => any) => {
    await dispatch({type: ADD_TO_WISHLIST, payload: item});
  };
};

export const removeFromWishlist = (id: any) => {
  return async (dispatch: (arg0: {type: string; payload: any}) => any) => {
    await dispatch({type: REMOVE_FROM_WISHLIST, payload: id});
  };
};
