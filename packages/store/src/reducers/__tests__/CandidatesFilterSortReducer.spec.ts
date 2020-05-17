import { CandidatesSortByEnum, FilterCandidatesConfigModel } from '@personio/data-models';
import {
  candidatesFilterSortInitialState,
  candidatesFilterSortReducer,
} from '../CandidatesFilterSortReducer';
import {
  setNewFilterCandidatesConfigAction,
  setNewSortCandidatesConfigAction,
} from '../../actions';

describe('CandidatesFilterSortReducer', () => {
  it('should return state on UNKNOWN action', () => {
    const result = candidatesFilterSortReducer(candidatesFilterSortInitialState, {
      type: 'UNKNOWN',
    });
    expect(result).toEqual(candidatesFilterSortInitialState);
  });

  it('should set sortBy correctly on SetNewSortCandidatesConfig action', () => {
    const result = candidatesFilterSortReducer(
      candidatesFilterSortInitialState,
      setNewSortCandidatesConfigAction(CandidatesSortByEnum.ApplicationDate),
    );
    expect(result.sortBy).toBe(CandidatesSortByEnum.ApplicationDate);
  });

  it('should set filterConfig correctly on SetNEwFilterCandidateConfig action', () => {
    const mockFilterConfig: FilterCandidatesConfigModel = {
      positionApplied: 'dev',
      name: 'Giampiero',
      status: 'approved',
    };
    const result = candidatesFilterSortReducer(
      candidatesFilterSortInitialState,
      setNewFilterCandidatesConfigAction(mockFilterConfig),
    );
    expect(result.filterConfig).toEqual(mockFilterConfig);
  });
});
