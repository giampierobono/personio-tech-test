import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { FilterCandidatesConfigModel, SortCandidatesConfigModel } from '@personio/data-models';

export const SetNewSortCandidatesConfig =
  '[Candidates list filter/sort] Set new sort config for candidates list';

export const SetNEwFilterCandidateConfig =
  '[Candidates list filter/sort] Set new filter config for candidates list';

export const setNewSortCandidatesConfigAction: ActionCreatorWithPayload<SortCandidatesConfigModel> = createAction(
  SetNewSortCandidatesConfig,
  (sortByConfig: SortCandidatesConfigModel) => ({ payload: sortByConfig }),
);

export const setNewFilterCandidatesConfigAction: ActionCreatorWithPayload<Partial<
  FilterCandidatesConfigModel
>> = createAction(
  SetNEwFilterCandidateConfig,
  (filterConfig: Partial<FilterCandidatesConfigModel>) => ({
    payload: filterConfig,
  }),
);
