import { Candidate, FatalError } from "@personio/api-sdk";
import {
  createAction,
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";

export const StartRetrieveCandidatesList =
  "[Candidates API] Start retrieving candidates list";

export const CandidatesListRetrieved =
  "[Candidates API] Candidates list retrieved";

export const CandidatesListError =
  "[Candidates API] Error retrieving candidates list";

export interface StartRetrieveCandidatesListAction {
  type: typeof StartRetrieveCandidatesList;
}

export interface CandidatesListRetrievedAction {
  type: typeof CandidatesListRetrieved;
  payload: Array<Candidate>;
}

export interface CandidatesListErrorAction {
  type: typeof CandidatesListError;
  payload: FatalError;
}

export type CandidatesActionsType =
  | StartRetrieveCandidatesListAction
  | CandidatesListRetrievedAction
  | CandidatesListErrorAction;

export const startRetrieveCandidatesListAction: ActionCreatorWithoutPayload = createAction(
  StartRetrieveCandidatesList
);

export const candidatesListRetrievedAction: ActionCreatorWithPayload<Array<
  Candidate
>> = createAction(CandidatesListRetrieved, (candidates: Array<Candidate>) => ({
  payload: candidates,
}));

export const candidatesListErrorAction: ActionCreatorWithPayload<FatalError> = createAction(
  CandidatesListError,
  (error: FatalError) => ({ payload: error })
);
