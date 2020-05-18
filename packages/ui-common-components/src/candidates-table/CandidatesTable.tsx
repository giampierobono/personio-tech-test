import { Button, ButtonTypesEnum } from '../button';
import { CandidatesTablePropertiesModel } from './models';
import React from 'react';
import { Spinner } from '../spinner';
import styles from './CandidatesTable.module.scss';

const CandidatesTable = (props: CandidatesTablePropertiesModel): React.ReactElement => {
  const computeAgeForDob = (dob: string): number => {
    const diffInMs = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(diffInMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className={styles.wrapper}>
      {props.isCandidatesListLoading ? (
        <Spinner />
      ) : props.hasError ? (
        <div role="alert" className={styles.alertWrapper}>
          <span>Error retrieving candidates list. Please retry</span>
          <Button
            buttonType={ButtonTypesEnum.Error}
            textContent={'Retry'}
            isDisabled={false}
            onClickCallback={props.retryCallback}
          />
        </div>
      ) : (
        <table className={styles.table}>
          <caption>List of candidates applying for Personio positions</caption>
          <thead className={styles.tableHeader}>
            <tr className={styles.tableHeaderRow}>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Years of experience</th>
              <th>Position applied</th>
              <th>Applied</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.candidates.map((candidate) => (
              <tr key={candidate.id} className={styles.tableRow}>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>{computeAgeForDob(candidate.birthDate)}</td>
                <td>{candidate.yearOfExperience}</td>
                <td>{candidate.positionApplied}</td>
                <td>{candidate.applicationDate}</td>
                <td>{candidate.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CandidatesTable;
