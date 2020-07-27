import * as ActionTypes from './ActionTypes';

export const Data = (state = { isLoading: true,
     errMess: null,
     statesdata:[] }, action)=>{
    switch(action.type){
        case ActionTypes.DATA_LOADING :
            return{ ...state, isLoading : true  } ;
        case ActionTypes.DATA_FAILED:
            return { ...state , isLoading: false , errMess:action.payload  } ;
        case ActionTypes.DATA_LOADED:
            return { ...state, isLoading: false , statesdata:action.payload  } ;
        default:
            return state ;
    }
}