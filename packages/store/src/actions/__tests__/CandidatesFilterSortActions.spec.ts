import {
  setNewFilterCandidatesConfigAction,
  setNewSortCandidatesConfigAction,
} from '../CandidatesFilterSortActions';
import { ApplicationStatus } from '@personio/api-sdk';
import { CandidatesSortByEnum } from '@personio/data-models';

describe('CandidatesFilterSortActions', () => {
  describe('setNewSortCandidatesConfigAction', () => {
    it('should have correct structure', () => {
      expect(
        setNewSortCandidatesConfigAction({
          sortBy: CandidatesSortByEnum.ApplicationDate,
          isAsc: true,
        }),
      ).toMatchSnapshot();
    });
  });

  describe('setNewFilterCandidatesConfigAction', () => {
    it('should have correct structure', () => {
      expect(
        setNewFilterCandidatesConfigAction({
          name: 'Giampiero',
          positionApplied: 'senior frontend',
          status: ApplicationStatus.Waiting,
        }),
      ).toMatchSnapshot();
    });
  });
});
