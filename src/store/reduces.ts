import { combineReducers } from "redux";

// Store initial state
const initialState = { count: 1};

// reducer
const counter = (state = initialState, action:any) => {
  switch (action.type) {
    case "PLUS_ONE":
      return { count: state.count + 1 };
    case "MINUS_ONE":
      return { count: state.count - 1 };
    case "CUSTOM_COUNT":
      return { count: state.count + action.payload.count };
    default:
      break;
  }
  return state;
};

const reduces = combineReducers({
    counter
});
export default reduces;
