import { CandidatesListSortBySelectBoxPropertiesModel } from './models';
import { CandidatesSortByEnum } from '@personio/data-models';
import React from 'react';
import styles from './CandidatesListSortBySelectBox.module.scss';

const selectBoxLabels = {
  [CandidatesSortByEnum.None]: 'No sort',
  [CandidatesSortByEnum.YearOfExperience]: 'Years of experience',
  [CandidatesSortByEnum.ApplicationDate]: 'Application date',
  [CandidatesSortByEnum.PositionApplied]: 'Position applied',
};

const CandidatesListSortBySelectBox = ({
  onChangeCallback,
  disabled,
}: CandidatesListSortBySelectBoxPropertiesModel): React.ReactElement => {
  const options = Object.keys(selectBoxLabels).map((key) => (
    <option key={`sort-by-select-box-option-${key}`} value={key}>
      {selectBoxLabels[key]}
    </option>
  ));

  return (
    <>
      <label className={styles.selectBoxLabel}>Sort by</label>
      <select
        className={!disabled ? styles.selectBox : `${styles.selectBox} ${styles.disabled}`}
        onChange={onChangeCallback}
      >
        {options}
      </select>
    </>
  );
};

export default CandidatesListSortBySelectBox;
