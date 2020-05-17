import {
  candidatesListErrorAction,
  candidatesListRetrievedAction,
  startRetrieveCandidatesListAction,
} from '../CandidatesApiActions';
import { mockError, mockState } from '../../tests-helper';
import { Candidate } from '@personio/api-sdk';

describe('CandidatesApiActions', () => {
  describe('startRetrieveCandidatesListAction', () => {
    it('should have correct structure', () => {
      expect(startRetrieveCandidatesListAction()).toMatchSnapshot();
    });
  });

  describe('candidatesListRetrievedAction', () => {
    it('should have correct structure', () => {
      expect(
        candidatesListRetrievedAction(mockState.candidatesApi.candidates as Array<Candidate>),
      ).toMatchSnapshot();
    });
  });

  describe('candidatesListErrorAction', () => {
    it('should have correct structure', () => {
      expect(candidatesListErrorAction(mockError)).toMatchSnapshot();
    });
  });
});
