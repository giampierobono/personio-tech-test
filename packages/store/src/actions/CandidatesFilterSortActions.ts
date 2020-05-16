import {
  CandidatesSortByEnum,
  FilterCandidatesConfigModel,
} from "@personio/data-models";
import { createAction, ActionCreatorWithPayload } from "@reduxjs/toolkit";

export const SetNewSortCandidatesConfig =
  "[Candidates list filter/sort] Set new sort config for candidates list";

export const SetNEwFilterCandidateConfig =
  "[Candidates list filter/sort] Set new filter config for candidates list";

export const setNewSortCandidatesConfigAction: ActionCreatorWithPayload<CandidatesSortByEnum> = createAction(
  SetNewSortCandidatesConfig,
  (sortBy: CandidatesSortByEnum) => ({ payload: sortBy })
);

export const setNewFilterCandidatesConfigAction: ActionCreatorWithPayload<FilterCandidatesConfigModel> = createAction(
  SetNEwFilterCandidateConfig,
  (filterConfig: FilterCandidatesConfigModel) => ({ payload: filterConfig })
);
