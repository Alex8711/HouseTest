import {Reducer} from 'redux';
import {ACTION_TYPES}from '../actions/homeAction'



export interface Home{
    id: string;
    communityId: string;
    price: number;
    area: number;
    type: string;
}

export interface HomesState {
    readonly data: Home[];
    readonly loading: boolean;
    readonly errors: string;
  }

const initialState : HomesState={
    data:[],
    loading:false,
    errors:""
}



const homesReducer: Reducer<HomesState> = (state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_REQUEST:
            return{
                ...state,
                loading:true
            }
        case ACTION_TYPES.FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                data:action.payload
            }
        case ACTION_TYPES.FETCH_FAIL:
            return{
                ...state,
                loading:false,
                errors:action.payload
            }
        default: {
                return state;
               }
    }
}



export default homesReducer;