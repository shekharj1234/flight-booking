import { combineReducers } from 'redux';
import flightReducers  from './Home/reducer';

const CombineReducers = combineReducers({
    flightReducers,
});

export default CombineReducers;