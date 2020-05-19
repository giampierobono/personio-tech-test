import * as QueryString from 'query-string';
import {
  CommonStateModel,
  getCandidatesListError,
  getFilterConfig,
  getIsCandidatesListLoading,
  setNewFilterCandidatesConfigAction,
} from '@personio/store';
import { ConnectedProps, connect } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { DebouncedInput } from '@personio/ui-common-components';
import { FilterCandidatesConfigModel } from '@personio/data-models';
import styles from './FilterCandidatesContainer.module.scss';

const mapToState = (state: CommonStateModel) => ({
  filterConfig: getFilterConfig(state),
  isCandidatesListLoading: getIsCandidatesListLoading(state),
  retrieveCandidatesListError: getCandidatesListError(state),
});

const mapToDispatch = {
  setNewFilterConfig: (filterConfig: Partial<FilterCandidatesConfigModel>) =>
    setNewFilterCandidatesConfigAction(filterConfig),
};

const connector = connect(mapToState, mapToDispatch);

type FilterCandidatesContainerPropsType = ConnectedProps<typeof connector>;

const FilterCandidatesContainer = (props: FilterCandidatesContainerPropsType) => {
  const location = useLocation();
  const history = useHistory();
  const queryString = QueryString.parse(location.search);

  useEffect(() => {
    if (
      (queryString.name as string) ||
      (queryString.position as string) ||
      (queryString.status as string)
    ) {
      props.setNewFilterConfig({
        name: (queryString.name as string) || '',
        positionApplied: (queryString.position as string) || '',
        status: (queryString.status as string) || '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const replaceHistory = (propToUpdate: string, newValue: string) => {
    queryString[propToUpdate] = newValue;
    history.replace({ ...history.location, search: QueryString.stringify(queryString) });
  };

  const onNameFilterChange = (newNameFilterValue: string) => {
    props.setNewFilterConfig({ name: newNameFilterValue });
    replaceHistory('name', newNameFilterValue);
  };

  const onPositionFilterChange = (newPositionFilterValue: string) => {
    props.setNewFilterConfig({ positionApplied: newPositionFilterValue });
    replaceHistory('position', newPositionFilterValue);
  };

  const onStatusFilterChange = (newStatusFilterValue: string) => {
    props.setNewFilterConfig({ status: newStatusFilterValue });
    replaceHistory('status', newStatusFilterValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <DebouncedInput
          defaultValue={queryString.name as string}
          name={'name'}
          disabled={props.isCandidatesListLoading || !!props.retrieveCandidatesListError}
          label={'Filter by name'}
          placeHolder={'Insert your filter'}
          onChangeCallback={onNameFilterChange}
        />
      </div>
      <div className={styles.input}>
        <DebouncedInput
          defaultValue={queryString.position as string}
          name={'position'}
          disabled={props.isCandidatesListLoading || !!props.retrieveCandidatesListError}
          label={'Filter by position applied'}
          placeHolder={'Insert your filter'}
          onChangeCallback={onPositionFilterChange}
        />
      </div>
      <div className={styles.input}>
        <DebouncedInput
          defaultValue={queryString.status as string}
          name={'status'}
          disabled={props.isCandidatesListLoading || !!props.retrieveCandidatesListError}
          label={'Filter by application status'}
          placeHolder={'Insert your filter'}
          onChangeCallback={onStatusFilterChange}
        />
      </div>
    </div>
  );
};

export default connector(FilterCandidatesContainer);
