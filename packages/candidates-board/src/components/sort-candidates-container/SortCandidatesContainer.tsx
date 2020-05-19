import * as QueryString from 'query-string';
import {
  CommonStateModel,
  getCandidatesListError,
  getIsCandidatesListLoading,
  setNewSortCandidatesConfigAction,
} from '@personio/store';
import { ConnectedProps, connect } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { CandidatesListSortBySelectBox } from '@personio/ui-common-components';
import { SortBySelectBoxLabelsConfig } from '@personio/data-models';
import styles from './SortCandidatesContainer.module.scss';

const mapToDispatch = {
  sortCandidatesBy: (sortByConfigKey: string) =>
    setNewSortCandidatesConfigAction(SortBySelectBoxLabelsConfig[sortByConfigKey].config),
};

const mapToState = (state: CommonStateModel) => ({
  isCandidatesListLoading: getIsCandidatesListLoading(state),
  retrieveCandidatesListError: getCandidatesListError(state),
});

const connector = connect(mapToState, mapToDispatch);

type SortCandidatesContainerPropsType = ConnectedProps<typeof connector>;

const SortCandidatesContainer = (props: SortCandidatesContainerPropsType) => {
  const location = useLocation();
  const history = useHistory();
  const queryString = QueryString.parse(location.search);
  const sortByKeyFromQueryString = queryString.sortBy as string;

  useEffect(() => {
    if (sortByKeyFromQueryString && SortBySelectBoxLabelsConfig[sortByKeyFromQueryString]) {
      props.sortCandidatesBy(sortByKeyFromQueryString);
    }
  });

  const handleSortByChanges = (sortByConfigKey: string) => {
    queryString.sortBy = sortByConfigKey;
    history.replace({ ...history.location, search: QueryString.stringify(queryString) });
    props.sortCandidatesBy(sortByConfigKey);
  };

  return (
    <div className={styles.select}>
      <CandidatesListSortBySelectBox
        preSelected={sortByKeyFromQueryString}
        onChangeCallback={handleSortByChanges}
        disabled={props.isCandidatesListLoading || !!props.retrieveCandidatesListError}
      />
    </div>
  );
};

export default connector(SortCandidatesContainer);
