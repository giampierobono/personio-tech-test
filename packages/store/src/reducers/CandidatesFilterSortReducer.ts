import {
  CandidatesSortByEnum,
  FilterCandidatesConfigModel,
  SortCandidatesConfigModel,
} from '@personio/data-models';
import { SetNEwFilterCandidateConfig, SetNewSortCandidatesConfig } from '../actions';
import { createReducer } from '@reduxjs/toolkit';

export interface CandidatesFilterSortState {
  readonly sortByConfig: SortCandidatesConfigModel;
  readonly filterConfig: FilterCandidatesConfigModel;
}

export const candidatesFilterSortInitialState: CandidatesFilterSortState = {
  sortByConfig: {
    sortBy: CandidatesSortByEnum.None,
    isAsc: true,
  },
  filterConfig: {
    name: '',
    positionApplied: '',
    status: '',
  },
};

export const candidatesFilterSortReducer = createReducer(candidatesFilterSortInitialState, {
  [SetNewSortCandidatesConfig]: (state: CandidatesFilterSortState, { payload }) => ({
    ...state,
    sortByConfig: { ...payload },
  }),
  [SetNEwFilterCandidateConfig]: (state: CandidatesFilterSortState, { payload }) => ({
    ...state,
    filterConfig: { ...state.filterConfig, ...payload },
  }),
});
