import { Candidate, FatalError } from "@personio/api-sdk";
import { createReducer } from "@reduxjs/toolkit";
import {
  CandidatesListError,
  CandidatesListRetrieved,
  StartRetrieveCandidatesList,
} from "../actions";

export interface CandidatesApiState {
  readonly candidates: Array<Candidate>;
  readonly error?: FatalError;
  readonly isLoading: boolean;
}

export const candidatesApiInitialState: CandidatesApiState = {
  candidates: [],
  isLoading: false,
};

export const candidatesApiReducer = createReducer(candidatesApiInitialState, {
  [StartRetrieveCandidatesList]: (state: CandidatesApiState) => ({
    ...state,
    isLoading: true,
  }),
  [CandidatesListRetrieved]: (state: CandidatesApiState, { payload }) => ({
    ...state,
    candidates: [...payload],
    isLoading: false,
  }),
  [CandidatesListError]: (state: CandidatesApiState, { payload }) => ({
    ...state,
    error: { ...payload },
    isLoading: false,
  }),
});
