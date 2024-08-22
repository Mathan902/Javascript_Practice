import { createContext, useReducer } from "react";

const initialValue = false;

const reducer = (state, action) => {
  switch (action.type) {
    case "action":
      return !state;
    default:
      return state;
  }
};

export const Store = createContext();
const StateManager = ({ children }) => {
  const [sidebar, dispatch] = useReducer(reducer, initialValue);
  return <Store.Provider value={{ sidebar, dispatch }}>{children}</Store.Provider>;
};

export default StateManager;
