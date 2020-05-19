import {
  CommonStateModel,
  getCandidatesListError,
  getFilteredSortedCandidatesList,
  startRetrieveCandidatesListAction,
} from '@personio/store';
import { ConnectedProps, connect } from 'react-redux';
import { CandidatesTable } from '@personio/ui-common-components';
import React from 'react';

const mapToState = (state: CommonStateModel) => ({
  candidates: getFilteredSortedCandidatesList(state),
  error: getCandidatesListError(state),
});

const mapToDispatch = {
  retryCallback: () => startRetrieveCandidatesListAction(),
};

const connector = connect(mapToState, mapToDispatch);

type CandidatesBoardContainerPropsType = ConnectedProps<typeof connector>;

const CandidatesBoardContainer = (props: CandidatesBoardContainerPropsType) => (
  <CandidatesTable
    candidates={props.candidates}
    hasError={!!props.error}
    retryCallback={props.retryCallback}
  />
);

export default connector(CandidatesBoardContainer);
