import { CandidatesApiState, CandidatesFilterSortState } from './reducers';

export interface CommonStateModel {
  candidatesApi: CandidatesApiState;
  candidatesFilterSort: CandidatesFilterSortState;
}
