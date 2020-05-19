import React, { ChangeEvent } from 'react';
import { CandidatesListSortBySelectBoxPropertiesModel } from './models';
import { SortBySelectBoxLabelsConfig } from '@personio/data-models';
import styles from './CandidatesListSortBySelectBox.module.scss';

const CandidatesListSortBySelectBox = ({
  onChangeCallback,
  disabled,
  preSelected,
}: CandidatesListSortBySelectBoxPropertiesModel): React.ReactElement => {
  const options = Object.keys(SortBySelectBoxLabelsConfig).map((key) => (
    <option key={`sort-by-select-box-option-${key}`} value={key}>
      {SortBySelectBoxLabelsConfig[key].label}
    </option>
  ));

  const onSelectOnChange = (event: ChangeEvent<HTMLSelectElement>): void =>
    onChangeCallback(event.target.value);

  return (
    <>
      <label className={styles.selectBoxLabel}>Sort by</label>
      <select
        defaultValue={preSelected}
        className={!disabled ? styles.selectBox : `${styles.selectBox} ${styles.disabled}`}
        onChange={onSelectOnChange}
      >
        {options}
      </select>
    </>
  );
};

export default CandidatesListSortBySelectBox;
