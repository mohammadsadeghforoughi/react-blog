import { GeneralActionTypes } from "../actions";

const initialState: IInitiateState = {
  themeMode: "dark",
};

interface IArgs {
  type: string;
  payload?: any;
}

interface IInitiateState {
  themeMode: "dark" | "light";
}

const reducer = (state = initialState, { type, payload }: IArgs) => {
  switch (type) {
    case GeneralActionTypes.THEME_MODE: {
      return {
        ...state,
        themeMode: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as generalsReducer };


