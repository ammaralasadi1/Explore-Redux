import {FETCH_WEATHER} from '../actions/index'

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      //concat does not chage the state but returns a new aray of state.
      //you should not mutate existing state with redux.
      return [action.payload.data, ...state];      // or use the ES6 which goes like:


  }
  return state;

}
