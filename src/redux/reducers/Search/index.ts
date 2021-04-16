import {MAKE_SEARCH} from '../../actions/types';
const INITIALSTATE = {
  data: [],
};

export default (state = INITIALSTATE, action: any) => {
  switch (action.type) {
    case MAKE_SEARCH:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
