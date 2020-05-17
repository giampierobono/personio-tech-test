import { ActionsObservable, ofType } from 'redux-observable';
import { CandidatesApi, InlineResponse200 } from '@personio/api-sdk';
import {
  StartRetrieveCandidatesList,
  candidatesListErrorAction,
  candidatesListRetrievedAction,
} from '../actions';
import { Action } from 'redux';
import { fromPromise } from 'rxjs/internal-compatibility';
import { switchMap } from 'rxjs/operators';

export const loadCandidatesList$ = (actions$: ActionsObservable<Action>) =>
  actions$.pipe(
    ofType(StartRetrieveCandidatesList),
    switchMap(() =>
      fromPromise(new CandidatesApi().candidatesGet()).pipe(
        switchMap((response: InlineResponse200) =>
          response.error
            ? [candidatesListErrorAction(response.error)]
            : [candidatesListRetrievedAction(response.data || [])],
        ),
      ),
    ),
  );
