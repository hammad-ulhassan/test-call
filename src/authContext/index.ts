import tokenService from "../tokenService";

export interface ITokenState {
  user: any;
  access_token: any;
}

export const initialState: ITokenState = {
  user: null,
  access_token: "",
};

export type AuthAction =
  | {
      type: "SET_AUTHS";
      payload: ITokenState;
    }
  | {
      type: "REMOVE_AUTHS";
    }
  | {
      type: "GET_AUTHS";
    };

export const authReducer = (state: ITokenState, action: AuthAction) => {
  switch (action.type) {
    case "SET_AUTHS":
      tokenService.setAuths(action.payload);
      return {
        //alter state
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
      };
    case "REMOVE_AUTHS":
      tokenService.removeAuths();
      return initialState;
    case "GET_AUTHS":
      return {
        ...state,
      };
    default:
      return state;
  }
};
