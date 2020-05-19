import {
  CommonStateModel,
  candidatesApiReducer,
  candidatesFilterSortReducer,
} from '@personio/store';
import { combineReducers } from 'redux';

export const RootReducers = combineReducers<CommonStateModel>({
  candidatesApi: candidatesApiReducer,
  candidatesFilterSort: candidatesFilterSortReducer,
});
