import { Candidate, FatalError } from "@personio/api-sdk";
import { createReducer } from "@reduxjs/toolkit";

export interface CandidatesState {
  readonly candidates: Array<Candidate>;
  readonly error?: FatalError;
  readonly isLoading: boolean;
}

export const candidatesInitialState: CandidatesState = {
  candidates: [],
  isLoading: false,
};

export const candidatesListReducer = createReducer(candidatesInitialState, {
  StartRetrieveCandidatesList: (state: CandidatesState) => ({
    ...state,
    isLoading: true,
  }),
  CandidatesListRetrieved: (state: CandidatesState, { payload }) => ({
    ...state,
    candidates: [...payload.candidates],
    isLoading: false,
  }),
  CandidatesListError: (state: CandidatesState, { payload }) => ({
    ...state,
    error: { ...payload.error },
    isLoading: false,
  }),
});
