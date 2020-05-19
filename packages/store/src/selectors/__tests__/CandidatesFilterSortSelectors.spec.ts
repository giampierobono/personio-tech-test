import {
  getFilterConfig,
  getFilteredSortedCandidatesList,
  getSortedCandidatesList,
} from '../CandidatesFilterSortSelectors';
import { CommonStateModel } from '../../common-state.model';
import { mockState } from '../../tests-helper';

describe('CandidatesFilterSortSelectors', () => {
  describe('getFilterConfig', () => {
    it('should retrieve filter config from the store', () => {
      const result = getFilterConfig(mockState as CommonStateModel);
      expect(result).toEqual(mockState.candidatesFilterSort.filterConfig);
    });
  });

  describe('getSortedCandidatesList', () => {
    it('should return sorted by application date list of candidates', () => {
      const result = getSortedCandidatesList(mockState as CommonStateModel);
      expect(result).toMatchSnapshot();
    });
  });

  describe('getFilteredSortedCandidatesList', () => {
    it('should return correct filtered sorted list', () => {
      const result = getFilteredSortedCandidatesList(mockState as CommonStateModel);
      expect(result).toMatchSnapshot();
    });
  });
});
