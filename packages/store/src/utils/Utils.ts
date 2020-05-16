import { ApplicationStatus, Candidate } from "@personio/api-sdk";
import {
  CandidatesSortByEnum,
  FilterCandidatesConfigModel,
} from "@personio/data-models";
import {
  identity,
  ifElse,
  prop,
  propSatisfies,
  sortBy,
  allPass,
  filter,
} from "ramda";

const candidateNameSatisfies = (filterName: string) =>
  propSatisfies((name: string) => name.includes(filterName), "name");

const candidateApplicationStatusSatisfies = (filterStatus: string) =>
  propSatisfies(
    (status: ApplicationStatus) => (status as string) === filterStatus,
    "status"
  );

const candidatePositionAppliedSatisfies = (position: string) =>
  propSatisfies(
    (positionApplied: string) => positionApplied.includes(position),
    "positionApplied"
  );

const getFilterPredicates = (
  filterCandidatesConfig: FilterCandidatesConfigModel
) =>
  allPass([
    candidateNameSatisfies(filterCandidatesConfig.name),
    candidateApplicationStatusSatisfies(filterCandidatesConfig.status),
    candidatePositionAppliedSatisfies(filterCandidatesConfig.positionApplied),
  ]);

export const sortCandidatesBy = (
  candidates: Array<Candidate>,
  sortByProp: CandidatesSortByEnum
): Array<Candidate> =>
  ifElse(
    () => sortByProp !== CandidatesSortByEnum.None,
    sortBy(prop(sortByProp)),
    identity
  )(candidates);

export const filterCandidates = (
  candidates: Array<Candidate>,
  filterCandidatesConfig: FilterCandidatesConfigModel
) => filter(getFilterPredicates(filterCandidatesConfig))(candidates);
