import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from '../../actions/types';

const INITIAL_STATE = {
  myWishlist: [],
};

export default (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        myWishlist: [...state.myWishlist, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        myWishlist: state.myWishlist.filter((i) => i.id !== action.payload),
      };
    default:
      return state;
  }
};
