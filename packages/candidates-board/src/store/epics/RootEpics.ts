import { combineEpics } from 'redux-observable';
import { loadCandidatesList$ } from '@personio/store';

export const RootEpics = combineEpics(loadCandidatesList$);
