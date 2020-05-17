import {
  candidatesListErrorAction,
  candidatesListRetrievedAction,
  startRetrieveCandidatesListAction,
} from '../../actions';
import { mockCandidates, mockError } from '../../tests-helper';
import { Action } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { Candidate } from '@personio/api-sdk';
import { loadCandidatesList$ } from '../CandidatesApiEpics';

describe('CandidatesApiEpics', () => {
  describe('loadCandidatesList$', () => {
    let actions$: ActionsObservable<Action>;

    beforeEach(() => {
      actions$ = ActionsObservable.of(startRetrieveCandidatesListAction());
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('Test dispatch candidatesListRetrievedAction', () => {
      beforeEach(() => {
        import('@personio/api-sdk').then((module) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (module as any).__setMockResponse({
            data: mockCandidates.slice(0, 3) as Array<Candidate>,
          }),
        );
      });

      it('should dispatch candidatesListRetrievedAction', async (done) => {
        loadCandidatesList$(actions$)
          .toPromise()
          .then((action) => {
            expect(action).toEqual(
              candidatesListRetrievedAction(mockCandidates.slice(0, 3) as Array<Candidate>),
            );
            done();
          });
      });
    });

    describe('Test dispatch candidatesListErrorAction', () => {
      beforeEach(() => {
        import('@personio/api-sdk').then((module) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (module as any).__setMockResponse({ error: mockError }),
        );
      });

      it('should dispatch candidatesListErrorAction', async (done) => {
        loadCandidatesList$(actions$)
          .toPromise()
          .then((action) => {
            expect(action).toEqual(candidatesListErrorAction(mockError));
            done();
          });
      });
    });
  });
});
