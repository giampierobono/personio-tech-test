# @personio/ui-common-components

This package contains components that can be shared across different applications. They are intended to be `presentational` components so they don't include any particular business logic inside.

## Button

Simple button component, supporting two types: base, error, defined in `ButtonTypesEnum`. Different styles will be applied.

Inputs are defined by `ButtonPropertiesModel`.

## CandidatesTable

Tabled used to display candidates list.

Inputs are defined by `CandidatesTablePropertiesModel`.

## DebouncedInput

Input component with delayed onChange dispatch to improve filters input performances.

Inputs are defined by `CandidatesListSortBySelectBoxPropertiesModel`.

## CandidatesListSortBySelectBox

Select box getting options form a config defining allowed sort by types.

Inputs are defined by `CandidatesListSortBySelectBoxPropertiesModel`.

## Spinner

Spinner used while loading data from API.

No inputs.
