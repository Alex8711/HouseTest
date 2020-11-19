import { Dispatch } from 'redux';
import axios from 'axios';

export const ACTION_TYPES={
    FETCH_REQUEST : "homes/FETCH_REQUEST",
    FETCH_SUCCESS : "homes/FETCH_SUCCESS",
    FETCH_FAIL : "homes/FETCH_FAIL"
}

export const fetchHomes=()=>{
    return async (dispatch:Dispatch)=>{
        try {
        dispatch({type:ACTION_TYPES.FETCH_REQUEST})
        const {data}=await axios.get("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes");
        dispatch({
            type: ACTION_TYPES.FETCH_SUCCESS,
            payload: data,
          });
        } catch (error) {
            dispatch({
                type: ACTION_TYPES.FETCH_FAIL,
                payload:
                  error.response && error.response.data.message
                    ? error.response.data.message
                    : error.response,
              });
        }
    }
}
