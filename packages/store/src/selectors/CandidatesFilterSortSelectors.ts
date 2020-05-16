import { createSelector } from "reselect";
import { CommonStateModel } from "../common-state.model";
import { getCandidates } from "./CandidatesApiSelectors";
import { Candidate } from "@personio/api-sdk";
import {
  CandidatesSortByEnum,
  FilterCandidatesConfigModel,
} from "@personio/data-models";
import { filterCandidates, sortCandidatesBy } from "../utils";

const getFilterConfig = (state: CommonStateModel) =>
  state.candidatesFilterSort.filterConfig;

const getSortByConfig = (state: CommonStateModel) =>
  state.candidatesFilterSort.sortBy;

const getSortedCandidatesList = createSelector(
  getCandidates,
  getSortByConfig,
  (
    candidates: Array<Candidate>,
    sortByEnum: CandidatesSortByEnum
  ): Array<Candidate> => sortCandidatesBy(candidates, sortByEnum)
);

export const getFilteredSortedCandidatesList = createSelector(
  getSortedCandidatesList,
  getFilterConfig,
  (
    sortedCandidates: Array<Candidate>,
    filterConfig: FilterCandidatesConfigModel
  ): Array<Candidate> => filterCandidates(sortedCandidates, filterConfig)
);
