import { CandidatesSortByEnum } from '../enums';
import { SortCandidatesConfigModel } from '../models';

export const SortBySelectBoxLabelsConfig: {
  [key: string]: { config: SortCandidatesConfigModel; label: string };
} = {
  None: { config: { sortBy: CandidatesSortByEnum.None, isAsc: false }, label: 'No sort' },
  YearOfExperienceAsc: {
    config: { sortBy: CandidatesSortByEnum.YearOfExperience, isAsc: true },
    label: 'Years of experience (asc)',
  },
  YearOfExperienceDesc: {
    config: { sortBy: CandidatesSortByEnum.YearOfExperience, isAsc: false },
    label: 'Years of experience (desc)',
  },
  ApplicationDateAsc: {
    config: { sortBy: CandidatesSortByEnum.ApplicationDate, isAsc: true },
    label: 'Application date (asc)',
  },
  ApplicationDateDesc: {
    config: { sortBy: CandidatesSortByEnum.ApplicationDate, isAsc: false },
    label: 'Application date (desc)',
  },
  PositionAppliedAsc: {
    config: { sortBy: CandidatesSortByEnum.PositionApplied, isAsc: true },
    label: 'Position applied (asc)',
  },
  PositionAppliedDesc: {
    config: { sortBy: CandidatesSortByEnum.PositionApplied, isAsc: false },
    label: 'Position applied (desc)',
  },
};
