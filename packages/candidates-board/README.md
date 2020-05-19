# @personio/canidates-board

Web-app used to display the retrieved properties list and sort by different criteria.

What it does is setup of the state using what's exported by `@personio/store` and create wrapper components
(aka higher order components) for the one exported by `@personio/ui-common-components` module.

Container components are made as react functional components, using new functional hooks instead of class extending `React.Component`.

They are in charge of retrieving data from the store and pass the as inputs to presentational components.

Doing this, the web-app stays pretty simple and, in case of changes in some dependencies, most of time only an increase of
version would be necessary instead of code changes (unless there are breaking changes, of course).

To avoid loading everything at once, it will lazy load the CandidatesBoard to speed up first pixel paint.
