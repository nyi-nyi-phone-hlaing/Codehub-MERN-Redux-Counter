import { legacy_createStore as createStore } from "redux";
import ACTIONS from "../utils/actions";
const initialState = {
  counter: 0,
  isShow: true,
};
const counterReducer = (state = initialState, action) => {
  // Increase
  if (action.type === ACTIONS.INCREASE) {
    return { ...state, counter: state.counter + 1 };
  }

  // Decrease
  if (action.type === ACTIONS.DEFREASE) {
    return { ...state, counter: state.counter - 1 };
  }

  // Increase By 5
  if (action.type === ACTIONS.INCREASE_BY_5) {
    return { ...state, counter: state.counter + action.amount };
  }

  // Toggle
  if (action.type === ACTIONS.TOGGLE) {
    return { ...state, isShow: !state.isShow };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
