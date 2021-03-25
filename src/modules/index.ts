import { combineReducers } from 'redux';
import list from './list';
import dialog from './dialog'

const rootReducer = combineReducers({
  list,
  dialog
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;