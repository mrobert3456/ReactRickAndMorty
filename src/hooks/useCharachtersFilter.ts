import { Reducer, useReducer } from "react";

export interface CharacterListFilterProps {
  name: string;
}
interface CharactersFilterReducerAction {
  type: "SET_NAME";
  payload: string;
}
export const useCharactersFilter = () => {
  const initializer = () => {
    return initialState;
  };
  const initialState: CharacterListFilterProps = {
    name: "",
  };

  const reducer: Reducer<
    CharacterListFilterProps,
    CharactersFilterReducerAction
  > = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };

      default:
        throw new Error("Cannot set this attribute");
    }
  };

  return useReducer(reducer, initialState, initializer);
};
