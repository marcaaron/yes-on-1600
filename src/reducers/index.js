import { combineReducers } from 'redux';
import UserTypeReducer from './reducer_user_type';
import IndexReducer from './reducer_index';
import VarsReducer from './reducer_vars';
import ErrorReducer from './reducer_error';
import ModalReducer from './reducer_modal';
import RangeReducer from './reducer_range';
import ResultsReducer from './reducer_results';

const rootReducer = combineReducers({
  userType: UserTypeReducer,
  index: IndexReducer,
  vars: VarsReducer,
  error: ErrorReducer,
  modalIsOpen: ModalReducer,
  range: RangeReducer,
  results: ResultsReducer
});

export default rootReducer;
