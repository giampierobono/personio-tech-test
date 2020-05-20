# @personio/store

This package contains all actions, reducers, memoized selectors and epics. It depends on 3 external libraries:
`react-redux`, `rxjs`, `reselect`.

## Global state (interface)

This interface defines the structure of the state that will be modified by dispatching actions.

It is defined like:

```javascript
interface CommonStateModel {
  candidatesApi: CandidatesApiState;
  candidatesFilterSort: CandidatesFilterSortState;
}
```

and for each part of it there is a specific reducer in charge of modifying it.

## Actions

Actions can be dispatched to update `state` or control `epics` flows.

### Candidates API actions

Used to handle loading state for "backend" calls.

Exported actions:

| Name                                | Return type                                  | Description                                                                                |
| ----------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `startRetrieveCandidatesListAction` | `ActionCreatorWithoutPayload`                | Dispatched to start retrieving candidates list and set `loading = true`.                   |
| `candidatesListRetrievedAction`     | `ActionCreatorWithPayload<Array<Candidate>>` | Dispatched when candidates list has been retrieved with success and set `loading = false`. |
| `candidatesListErrorAction`         | `ActionCreatorWithPayload<FatalError>`       | Dispatched when candidates list has been retrieved errors and set `loading = false`.       |

### Candidates sort filter

Those actions are used to control filter and sort state on user interactions

Exported actions:

| Name                                 | Return type                                                      | Description                                                                  |
| ------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `setNewSortCandidatesConfigAction`   | `ActionCreatorWithPayload<SortCandidatesConfigModel>`            | Dispacted to set a new `SortCandidatesConfigModel` object.                   |
| `setNewFilterCandidatesConfigAction` | `ActionCreatorWithPayload<Partial<FilterCandidatesConfigModel>>` | Dispacted to set a new `FilterCandidatesConfigModel` object (or part of it). |

## Reducers

Reducers are in charge of returning a new modified version of the state depending on the action dispatched.

There is one reducer for each "group" of actions described above, changing the state according to action payload.

In every reducer file is define an interface describing shape of the state section.

## Epics

Epics are used to subscribe to specific actions and, eventually, emit others. They are executed right after reducers.

### Candidates API epic

| Name                  | Subscribe to                  | Description                                                                                                                              |
| --------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `loadCandidatesList$` | `StartRetrieveCandidatesList` | Dispatch either `candidatesListRetrievedAction` in case of OK response from API or `candidatesListErrorAction` in case of error response |

## Selectors

Selectors are used to get specific part of the state or to return a result coming from a computation done based on other observables results. The biggest pro is that they are memoized
so computation won't be repeated if selector already have a result for it.

### Candidates API selectors

| Name                         | Return type         | Description                                               |
| ---------------------------- | ------------------- | --------------------------------------------------------- |
| `getIsCandidatesListLoading` | `boolean`           | Returns an observable with `isLoading` from the store.    |
| `getCandidates`              | `Array<Candidates>` | Returns an observable with `candidates` array from store. |
| `getCandidatesListError`     | `FatalError`        | Returns an observable with `erros` from store.            |

### Candidate filter and sort selectors

| Name                              | Return type                   | Description                         |
| --------------------------------- | ----------------------------- | ----------------------------------- |
| `getFilterConfig`                 | `FilterCandidatesConfigModel` | Return filter config from the store |
| `getSortedCandidatesList`         | `Array<Candidates>`           | Return sorted list of candidates    |
| `getFilteredSortedCandidatesList` | `Array<Candidates>`           | Return filtered list of candidates  |

## Utils

| Name               | Inputs                                                                               | Return               | Description                            |
| ------------------ | ------------------------------------------------------------------------------------ | -------------------- | -------------------------------------- |
| `sortCandidatesBy` | `candidates: Array<Candidates>, sortByPropConfig: SortCandidatesConfigModel`         | `Array<Candidates>`  | Returns a sorted array of Candidates   |
| `filterCandidates` | `candidates: Array<Candidates>, filterCandidatesConfig: FilterCandidatesConfigModel` | `(Array<Canddiates>` | Returns a filtered array of Candidates |
