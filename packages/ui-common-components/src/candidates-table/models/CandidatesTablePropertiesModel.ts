import { Candidate } from '@personio/api-sdk';

export interface CandidatesTablePropertiesModel {
  candidates: Array<Candidate>;
  hasError: boolean;
  isCandidatesListLoading: boolean;
  retryCallback: () => void;
}
