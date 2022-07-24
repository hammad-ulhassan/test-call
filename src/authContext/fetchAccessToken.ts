import React from "react";
import { AuthAction, ITokenState } from ".";
import fetchAccessTokenAPI from "../api/fetchAccessTokenAPI";

const fetchAccessToken = (state: ITokenState) => (dispatch: React.Dispatch<AuthAction>) => {
    fetchAccessTokenAPI().then(userData => {
        dispatch({
            type: 'SET_AUTHS',
            payload: userData
        })
    })
}

export default fetchAccessToken;