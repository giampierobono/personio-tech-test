import { filterCandidates, sortCandidatesBy } from '../Utils';
import { Candidate } from '@personio/api-sdk';
import { CandidatesSortByEnum } from '@personio/data-models';
import { mockCandidates } from '../../tests-helper';

describe('Utils', () => {
  describe('sortCandidatesBy', () => {
    it('should return same list if NONE is sent as param', () => {
      const result = sortCandidatesBy(mockCandidates as Array<Candidate>, {
        sortBy: CandidatesSortByEnum.None,
        isAsc: true,
      });
      expect(result).toEqual(mockCandidates);
    });

    it('should sort asc list of candidates by application date', () => {
      const result = sortCandidatesBy(mockCandidates as Array<Candidate>, {
        sortBy: CandidatesSortByEnum.ApplicationDate,
        isAsc: true,
      });
      expect(result).toMatchSnapshot();
    });

    it('should sort desc list of candidates by application date', () => {
      const result = sortCandidatesBy(mockCandidates as Array<Candidate>, {
        sortBy: CandidatesSortByEnum.ApplicationDate,
        isAsc: false,
      });
      expect(result).toMatchSnapshot();
    });

    it('should sort asc list of candidates by position applied', () => {
      const result = sortCandidatesBy(mockCandidates as Array<Candidate>, {
        sortBy: CandidatesSortByEnum.PositionApplied,
        isAsc: true,
      });
      expect(result).toMatchSnapshot();
    });

    it('should sort desc list of candidates by position applied', () => {
      const result = sortCandidatesBy(mockCandidates as Array<Candidate>, {
        sortBy: CandidatesSortByEnum.PositionApplied,
        isAsc: false,
      });
      expect(result).toMatchSnapshot();
    });

    it('should sort asc list of candidates by years of experience', () => {
      const result = sortCandidatesBy(mockCandidates as Array<Candidate>, {
        sortBy: CandidatesSortByEnum.YearOfExperience,
        isAsc: true,
      });
      expect(result).toMatchSnapshot();
    });

    it('should sort desc list of candidates by years of experience', () => {
      const result = sortCandidatesBy(mockCandidates as Array<Candidate>, {
        sortBy: CandidatesSortByEnum.YearOfExperience,
        isAsc: false,
      });
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
