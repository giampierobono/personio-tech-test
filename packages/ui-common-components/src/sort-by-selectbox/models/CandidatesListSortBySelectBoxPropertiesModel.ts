import { SortCandidatesConfigModel } from '@personio/data-models';

export interface CandidatesListSortBySelectBoxPropertiesModel {
  onChangeCallback: (sortCandidatesConfig: SortCandidatesConfigModel) => void;
  disabled: boolean;
}
