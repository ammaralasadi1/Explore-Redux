import {FETCH_NEWS} from '../actions/news_action'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NEWS:
      // return state.concat([action.payload.data]);
      //concat does not chage the state but returns a new aray of state.
      //you should not mutate existing state with redux.
      // or use the ES6 which goes like:
      return [action.payload.data, ...state];
  }
  return state;

}
