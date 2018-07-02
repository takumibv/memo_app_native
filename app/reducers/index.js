import { combineReducers } from 'redux';
import memos from './memo_list';
import visibilityFilter from './visibility_filter';

/**
 * Reducerコンパイル
 */
const memoApp = combineReducers({
  memos,
  visibilityFilter
});

export default memoApp;
