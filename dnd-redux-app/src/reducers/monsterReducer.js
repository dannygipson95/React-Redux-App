import {GET_DATA, UPDATE_MONSTERS, SET_ERROR, GET_MONSTER} from '../actions'

const initialState = {
    monsters: [],
    selectedUrl: '',
    selectedMonster: {},
    isFetchingData: false
};

const monsterReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true
              };
        case UPDATE_MONSTERS:
            return {
                ...state,
                monsters: action.payload,
                isFetchingData: false
            }
        case GET_MONSTER:
            return {
                ...state,
                selectedMonster: action.payload
            }
        
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default monsterReducer;