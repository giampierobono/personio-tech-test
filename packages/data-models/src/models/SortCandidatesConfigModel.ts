import { CandidatesSortByEnum } from '../enums';

export interface SortCandidatesConfigModel {
  sortBy: CandidatesSortByEnum;
  isAsc: boolean;
}
