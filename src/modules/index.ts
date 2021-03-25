import { combineReducers } from 'redux';
import list from './list';

const rootReducer = combineReducers({
  list
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;