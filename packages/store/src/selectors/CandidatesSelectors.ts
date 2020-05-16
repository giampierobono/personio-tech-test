import { CommonStateModel } from "../common-state.model";
import { Candidate, FatalError } from "@personio/api-sdk";

export const getIsCandidatesListLoading = (state: CommonStateModel): boolean =>
  state.candidates.isLoading;

export const getCandidatesList = (state: CommonStateModel): Array<Candidate> =>
  state.candidates.candidates;

export const getCandidatesListError = (
  state: CommonStateModel
): FatalError | undefined => state.candidates.error;
