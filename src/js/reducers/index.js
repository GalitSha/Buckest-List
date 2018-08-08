import {FETCH_ITEMS} from "../constants/action-types";

const initialState = {
  items: [],
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      let flatten = [];
      action.data.forEach(bucket => {
        bucket.Items.forEach(item => flatten.push(item))
      });
      return {...state, items: flatten};
    default:
      return state;
  }
};

export default rootReducers;