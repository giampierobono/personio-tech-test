import { CommonStateModel } from "../common-state.model";
import { Candidate, FatalError } from "@personio/api-sdk";

export const getIsCandidatesListLoading = (state: CommonStateModel): boolean =>
  state.candidatesApi.isLoading;

export const getCandidates = (state: CommonStateModel): Array<Candidate> =>
  state.candidatesApi.candidates;

export const getCandidatesListError = (
  state: CommonStateModel
): FatalError | undefined => state.candidatesApi.error;
