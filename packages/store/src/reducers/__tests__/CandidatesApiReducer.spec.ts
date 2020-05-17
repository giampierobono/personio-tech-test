import { candidatesApiInitialState, candidatesApiReducer } from '../CandidatesApiReducer';
import {
  candidatesListErrorAction,
  candidatesListRetrievedAction,
  startRetrieveCandidatesListAction,
} from '../../actions';
import { mockCandidates, mockError, mockState } from '../../tests-helper';
import { Candidate } from '@personio/api-sdk';

describe('CandidatesApiReducer', () => {
  it('should return state for UNKNOWN action', () => {
    const result = candidatesApiReducer(candidatesApiInitialState, { type: 'UNKNOWN' });
    expect(result).toEqual(candidatesApiInitialState);
  });

  it('should set isLoading to TRUE on StartRetrieveCandidatesList action', () => {
    const result = candidatesApiReducer(
      candidatesApiInitialState,
      startRetrieveCandidatesListAction(),
    );
    expect(result.isLoading).toBeTruthy();
  });

  it('should set candidates array on CandidatesListRetrieved action', () => {
    const result = candidatesApiReducer(
      candidatesApiInitialState,
      candidatesListRetrievedAction(mockState.candidatesApi.candidates as Array<Candidate>),
    );
    expect(result.candidates).toEqual(mockCandidates);
    expect(result.isLoading).toBeFalsy();
  });

  it('should set error on CandidatesListError', () => {
    const result = candidatesApiReducer(
      candidatesApiInitialState,
      candidatesListErrorAction(mockError),
    );
    expect(result.error).toEqual(mockError);
    expect(result.isLoading).toBeFalsy();
  });
});
