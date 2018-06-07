import {combineReducers} from 'redux';

import fetchExampleReducer from '~/reducers/reducer-fetch-example';
import normalExampleReducer from '~/reducers/reducer-normal-example';

const allReducers = combineReducers({
   fetchExample: fetchExampleReducer,
   normalExample: normalExampleReducer
});

export default allReducers;
