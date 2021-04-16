import {combineReducers} from 'redux';
import SearchReducer from './Search';
import WishListReducer from './WishList';

const rootReducer = combineReducers({
  searchData: SearchReducer,
  wishList: WishListReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
