import { Store, applyMiddleware, createStore } from 'redux';
import { RootEpics } from './epics';
import { RootReducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

const configureStore = (): Store => {
  const result = createStore(RootReducers, composeWithDevTools(applyMiddleware(epicMiddleware)));
  epicMiddleware.run(RootEpics);

  return result;
};

export const store: Store = configureStore();
