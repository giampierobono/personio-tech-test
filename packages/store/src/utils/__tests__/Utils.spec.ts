import { filterCandidates, sortCandidatesBy } from '../Utils';
import { Candidate } from '@personio/api-sdk';
import { CandidatesSortByEnum } from '@personio/data-models';
import { mockCandidates } from '../../tests-helper';

describe('Utils', () => {
  describe('sortCandidatesBy', () => {
    it('should return same list if NONE is sent as param', () => {
      const result = sortCandidatesBy(
        mockCandidates as Array<Candidate>,
        CandidatesSortByEnum.None,
      );
      expect(result).toEqual(mockCandidates);
    });

    it('should sort list of candidates by application date', () => {
      const result = sortCandidatesBy(
        mockCandidates as Array<Candidate>,
        CandidatesSortByEnum.ApplicationDate,
      );
      expect(result).toMatchSnapshot();
    });

    it('should sort list of candidates by position applied', () => {
      const result = sortCandidatesBy(
        mockCandidates as Array<Candidate>,
        CandidatesSortByEnum.PositionApplied,
      );
      expect(result).toMatchSnapshot();
    });

    it('should sort list of candidates by years of experience', () => {
      const result = sortCandidatesBy(
        mockCandidates as Array<Candidate>,
        CandidatesSortByEnum.YearOfExperience,
      );
      expect(result).toMatchSnapshot();
    });
  });

  describe('filterCandidates', () => {
    it('should return same list for empty filter', () => {
      const result = filterCandidates(mockCandidates as Array<Candidate>, {
        status: '',
        positionApplied: '',
        name: '',
      });
      expect(result).toEqual(mockCandidates);
    });

    it('should filter in a normal situation', () => {
      const result = filterCandidates(mockCandidates as Array<Candidate>, {
        positionApplied: 'asso',
        name: '',
        status: '',
      });
      expect(result).toMatchSnapshot();
    });

    it('should be case insensitive', () => {
      const lowerCase = filterCandidates(mockCandidates as Array<Candidate>, {
        positionApplied: 'asso',
        name: '',
        status: '',
      });
      const upperCase = filterCandidates(mockCandidates as Array<Candidate>, {
        positionApplied: 'ASSO',
        name: '',
        status: '',
      });
      expect(lowerCase).toEqual(upperCase);
    });
  });
});
