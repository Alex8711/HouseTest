import { Reducer } from 'redux';
import { ACTION_TYPES } from '../actions/communityActions'


export interface Community
{
    id: string;
    name: string;
    imgUrl: string;
    group: String;
}

export interface CommunitiesState
{
    readonly data: Community[];
    readonly loading: boolean;
    readonly errors: string;
}

const initialState: CommunitiesState = {
    data: [],
    loading: false,
    errors: ""
}



const communitiesReducer: Reducer<CommunitiesState> = (state = initialState, action) =>
{
    switch (action.type)
    {
        case ACTION_TYPES.FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case ACTION_TYPES.FETCH_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        default: {
            return state;
        }
    }
}




export default communitiesReducer;