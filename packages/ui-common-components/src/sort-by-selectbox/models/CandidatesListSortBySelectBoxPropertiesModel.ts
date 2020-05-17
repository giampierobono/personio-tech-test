import { ChangeEvent } from 'react';

export interface CandidatesListSortBySelectBoxPropertiesModel {
  onChangeCallback: (changeEvent: ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
}
