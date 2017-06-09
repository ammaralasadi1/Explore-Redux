import {FETCH_WEATHER} from '../actions/weather_action'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      //concat does not chage the state but returns a new aray of state.
      //you should not mutate existing state with redux.
      // or use the ES6 which goes like:
      return [action.payload.data];

  }
  return state;

}

// - always return a new object that take the place of a new state.
// -
