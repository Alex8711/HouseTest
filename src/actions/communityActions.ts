import { Dispatch } from 'redux';
import axios from 'axios';

export const ACTION_TYPES = {
    FETCH_REQUEST: "communities/FETCH_REQUEST",
    FETCH_SUCCESS: "communities/FETCH_SUCCESS",
    FETCH_FAIL: "communities/FETCH_FAIL"
}

export const fetchCommunities = () =>
{
    return async (dispatch: Dispatch) =>
    {
        try
        {
            dispatch({ type: ACTION_TYPES.FETCH_REQUEST })
            const { data } = await axios.get("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities");
            dispatch({
                type: ACTION_TYPES.FETCH_SUCCESS,
                payload: data,
            });
        } catch (error)
        {
            dispatch({
                type: ACTION_TYPES.FETCH_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.response,
            });
            console.log(error);
        }
    }
}