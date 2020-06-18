import axios from 'axios'

export const GET_DATA = 'GET_DATA';
export const UPDATE_MONSTERS = 'UPDATE_MONSTERS';
export const SET_ERROR = 'SET_ERROR';
export const GET_MONSTER = 'GET_MONSTER'

export const getData= () => dispatch=> {
    dispatch({
        type: GET_DATA
    });
    axios.get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters')
    .then(res => {
        console.log(res.data.results);
        dispatch({ type: UPDATE_MONSTERS, payload: res.data.results})
    })
    .catch(err =>{
        console.error('error fetching data from api. err:', err);
        dispatch({type: SET_ERROR, payload:'error fetching data from api'})
    })
}

export const getMonster = url => dispatch=> {
    dispatch({
        type: GET_DATA
    });
    axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co${url}`)
    .then(res=>{
        dispatch({type: GET_MONSTER, payload: res.data})
    })
}