import React from "react";
import { AuthAction, ITokenState } from ".";
import fetchRefreshTokenAPI from "../api/fetchRefreshTokenAPI";
import tokenService from "../tokenService";

const fetchRefreshToken = (state: ITokenState) => (dispatch: React.Dispatch<AuthAction>) => {
    fetchRefreshTokenAPI(tokenService.getAuths()).then(userData => {
        dispatch({
            type: 'SET_AUTHS',
            payload: userData
        })
    })
}

export default fetchRefreshToken;