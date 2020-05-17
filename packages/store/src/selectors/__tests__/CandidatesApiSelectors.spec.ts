import {
  getCandidates,
  getCandidatesListError,
  getIsCandidatesListLoading,
} from '../CandidatesApiSelectors';
import { CommonStateModel } from '../../common-state.model';
import { mockState } from '../../tests-helper';

describe('CandidateApiSelectors', () => {
  describe('getIsCandidatesListLoading', () => {
    it('should return isLoading value FALSE', () => {
      const result = getIsCandidatesListLoading(mockState as CommonStateModel);
      expect(result).toBeFalsy();
    });

    it('should return isLoading value TRUE', () => {
      const result = getIsCandidatesListLoading({
        ...mockState,
        candidatesApi: { candidates: [], isLoading: true },
      } as CommonStateModel);
      expect(result).toBeTruthy();
    });
  });

  describe('getCandidates', () => {
    it('should return list of candidates from the state', () => {
      expect(getCandidates(mockState as CommonStateModel)).toEqual(
        mockState.candidatesApi.candidates,
      );
    });
  });

  describe('getCandidatesListError', () => {
    it('should return error from the state', () => {
      expect(getCandidatesListError(mockState as CommonStateModel)).toEqual(
        mockState.candidatesApi.error,
      );
    });
  });
});
