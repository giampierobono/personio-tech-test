import { ActionsObservable, ofType } from "redux-observable";
import { Action } from "redux";
import {
  candidatesListErrorAction,
  candidatesListRetrievedAction,
  StartRetrieveCandidatesList
} from "../actions";
import { switchMap } from "rxjs/operators";
import { fromPromise } from "rxjs/internal-compatibility";
import { CandidatesApi, InlineResponse200 } from "@personio/api-sdk";

export const loadCandidatesList$ = (actions$: ActionsObservable<Action>) =>
  actions$.pipe(
    ofType(StartRetrieveCandidatesList),
    switchMap(() =>
      fromPromise(new CandidatesApi().candidatesGet()).pipe(
        switchMap((response: InlineResponse200) =>
          response.error
            ? [candidatesListErrorAction(response.error)]
            : [candidatesListRetrievedAction(response.data || [])]
        )
      )
    )
  );
