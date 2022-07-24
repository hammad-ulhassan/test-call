import { createContext, useEffect, useReducer } from "react";
import { AuthAction, authReducer, initialState, ITokenState } from ".";
import tokenService from "../tokenService";

export interface IComponentProps {
  children?: React.ReactNode;
}

export interface IAuthContext {
  state: ITokenState;
  authDispatch: React.Dispatch<AuthAction>;
}

const AuthTokensContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IComponentProps){
  const [state, authDispatch] = useReducer(authReducer, initialState);


  return (
    <AuthTokensContext.Provider
      value={{
        state,
        authDispatch,
      }}
    >
      {children}
    </AuthTokensContext.Provider>
  );
}

export { AuthTokensContext };
