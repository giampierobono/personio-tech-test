import { CandidatesSortByEnum, SortCandidatesConfigModel } from '@personio/data-models';
import React, { ChangeEvent } from 'react';
import { CandidatesListSortBySelectBoxPropertiesModel } from './models';
import styles from './CandidatesListSortBySelectBox.module.scss';

const selectBoxLabels: { [key: string]: { config: SortCandidatesConfigModel; label: string } } = {
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

const CandidatesListSortBySelectBox = ({
  onChangeCallback,
  disabled,
}: CandidatesListSortBySelectBoxPropertiesModel): React.ReactElement => {
  const options = Object.keys(selectBoxLabels).map((key) => (
    <option key={`sort-by-select-box-option-${key}`} value={key}>
      {selectBoxLabels[key].label}
    </option>
  ));

  const onSelectOnChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onChangeCallback(selectBoxLabels[event.target.value].config);

  return (
    <>
      <label className={styles.selectBoxLabel}>Sort by</label>
      <select
        className={!disabled ? styles.selectBox : `${styles.selectBox} ${styles.disabled}`}
        onChange={onSelectOnChange}
      >
        {options}
      </select>
    </>
  );
};

export default CandidatesListSortBySelectBox;
