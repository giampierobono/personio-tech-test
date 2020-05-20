import './App.scss';
import {
  CommonStateModel,
  getIsCandidatesListLoading,
  startRetrieveCandidatesListAction,
} from '@personio/store';
import { ConnectedProps, connect } from 'react-redux';
import { ErrorBoundary, FilterCandidatesContainer, SortCandidatesContainer } from './components';
import React, { Suspense, useEffect } from 'react';
import { Spinner } from '@personio/ui-common-components';

const mapToState = (state: CommonStateModel) => ({
  isCandidatesListLoading: getIsCandidatesListLoading(state),
});

const mapToDispatch = {
  fetchCandidatesList: () => startRetrieveCandidatesListAction(),
};

const connector = connect(mapToState, mapToDispatch);

type AppContainerPropertiesType = ConnectedProps<typeof connector>;

const LazyCandidatesBoard = React.lazy(() =>
  import('./components/candidates-board-container/CandidatesBoardContainer'),
);

const AppContainer = (props: AppContainerPropertiesType) => {
  useEffect(() => {
    props.fetchCandidatesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorBoundary>
      <div className="app">
        <header className="app__header">
          <h1 title="Personio candidates list" className="app__title">
            List of candidates applying for positions at Personio
          </h1>
        </header>
        <main className="app__container">
          <div className="app__content">
            <div className="app__content--filters">
              <SortCandidatesContainer />
              <FilterCandidatesContainer />
            </div>
            <div className="app__content--candidates">
              {props.isCandidatesListLoading ? (
                <div className="spinner">
                  <Spinner />
                </div>
              ) : (
                <Suspense fallback={<Spinner />}>
                  <LazyCandidatesBoard />
                </Suspense>
              )}
            </div>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default connector(AppContainer);
