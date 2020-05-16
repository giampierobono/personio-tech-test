import {
  CandidatesSortByEnum,
  FilterCandidatesConfigModel,
} from "@personio/data-models";
import { createReducer } from "@reduxjs/toolkit";
import {
  SetNEwFilterCandidateConfig,
  SetNewSortCandidatesConfig,
} from "../actions";

export interface CandidatesFilterSortState {
  readonly sortBy: CandidatesSortByEnum;
  readonly filterConfig: FilterCandidatesConfigModel;
}

export const candidatesListInitialState: CandidatesFilterSortState = {
  sortBy: CandidatesSortByEnum.None,
  filterConfig: {
    name: "",
    positionApplied: "",
    status: "",
  },
};

export const candidatesFilterSortReducer = createReducer(
  candidatesListInitialState,
  {
    [SetNewSortCandidatesConfig]: (
      state: CandidatesFilterSortState,
      { payload }
    ) => ({
      ...state,
      sortBy: payload,
    }),
    [SetNEwFilterCandidateConfig]: (
      state: CandidatesFilterSortState,
      { payload }
    ) => ({
      ...state,
      filterConfig: { ...state.filterConfig, ...payload },
    }),
  }
);
