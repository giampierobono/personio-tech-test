import { CandidatesSortByEnum, FilterCandidatesConfigModel } from '@personio/data-models';
import { SetNEwFilterCandidateConfig, SetNewSortCandidatesConfig } from '../actions';
import { createReducer } from '@reduxjs/toolkit';

export interface CandidatesFilterSortState {
  readonly sortBy: CandidatesSortByEnum;
  readonly filterConfig: FilterCandidatesConfigModel;
}

export const candidatesFilterSortInitialState: CandidatesFilterSortState = {
  sortBy: CandidatesSortByEnum.None,
  filterConfig: {
    name: '',
    positionApplied: '',
    status: '',
  },
};

export const candidatesFilterSortReducer = createReducer(candidatesFilterSortInitialState, {
  [SetNewSortCandidatesConfig]: (state: CandidatesFilterSortState, { payload }) => ({
    ...state,
    sortBy: payload,
  }),
  [SetNEwFilterCandidateConfig]: (state: CandidatesFilterSortState, { payload }) => ({
    ...state,
    filterConfig: { ...state.filterConfig, ...payload },
  }),
});
