# Personio Senior frontend test

## @personio/root

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

![Node.js CI](https://github.com/giampierobono/personio-tech-test/workflows/Node.js%20CI/badge.svg?branch=master)

The project is organised as a monorepo and includes 6 different projects:

- **@personio/data-models**
- **@personio/api-sdk**
- **@personio/store**
- **@personio/ui-common-components**
- **@personio/styling**
- **@personio/candidates-board** (the webapp)

Monorepo's root is: `packages/*`.

Monorepo has been set to have an independent version for each of them to allow independent code evolution
and less risky changes.

Projects are all written using Typescript and "built" using `webpack`.

To create the client to contact Personio APIs, I created an OpenAPI file to autogenerate both typescript fetch client and 
documentation. 

More details about can be found in each project specific README file.

## Yeah cool but...how can I run it?

Let's start with some things you need to have installed before start the fun part:

- **node / npm**: would be better to have latest version of `node` and `npm`, but minimum required is `node` >= v13.

**Can I use `yarn` to install dependencies?**

No. To prevent using `yarn` there is a `preinstall` script that will check
if npm is used or this error will be logged in console:

`You must use npm to install dependencies: $ npm install or $ npm i`

- **terminal**: needed to run commands.
- **browser**: well..it's a webapp so...

That's pretty much everything needed to run this project on your machine, now open a terminal and run:

`npm i`

This command will install dependencies and after the `postinstall` script will take care of building all the local
dependencies and link them in `node_modules` folders of projects requiring them as dependencies (a dev build will be
done at this step).

Lerna will run the `bootstrap` task with the `--hoisting` option. This means deps will be installed in the root
of the node module. If, for any reason, a specific package in the monorepo needs a specific version, this will be installed
inside the specific `node_module` folder directly. This has been done to speed up the bootstrap phase avoid having the same folder repeated in every
node_modules folder. This can have some side effect, for example forgetting declaring a dependency in one module, it may
work in local and you can only realize later on trying to use that module outside of the monorepo. 

From the root `package.json` you can run commands for every module in the monorepo.

_One package.json to lead them all_

Also browsing inside a specific module `package.json` file, will allow running scripts from there.

Once everything's finished, there are 2 options:

- run `start:candidates-board`: this will run a dev build with `react-sript`, build won't be optmized and sourcemaps created.
- run `build:candiates-board:prod`: this will run a prod mode build for local dependencies and react application. There is a specific task on
  the `@personio/candidates-board` package.json file to run a local webserver and try the prod version.

## Why a monorepo?

The decision of organizing this project as a monorepo comes from the multiple benefits it can have.

### Tools

Lerna is a very complete tool to manage monorepo projects. It takes care of semantic versioning, changelog creation,
internal dependencies link, etc.

### Code / configs sharing

Keeping code in separated projects allows sharing it easily across different applications. Also configurations for
`webpack`, `eslint`, `tsconfig` , `stylelint`,
can be easily extended, if needed, avoid replicating them for each project.

### Easier migrations

Imagine having two applications inside the monorepo: one for desktop and another one for mobile, and suppose those apps
share the same common code from other packages (react components, store, etc.) and all depend on `react`.

If a new version of `react` comes out with breaking changes, it'd possible to smoothly migrate all packages step by step 
without doing everything in one shot, leading to huge PRs with many possible side effects.

Ok, it's true that this could be also achieved having projects split in multi repos but it won't be that easy to modify 
and build code from different projects having them in different git folders.

## Git hooks

Some git hooks are set by using `husky` package. In particular this projects has 2 hooks:

- **pre-commit-msg**: staged file are formatted and linted
- **pre-push**: run tests, eslint and stylelint

A GitHub pipeline was building, linting and testing the code at each push / merge to master.

## Code / commits style

`Prettier` and `eslint` are setup to ensure code following same formatting rules and avoid common bad practices 
(thanks to `eslint`). Those two are also run automatically on git staged files at `pre-commit` hook.

Also `sass` files are checked by `stylelint`.

Recommended configurations (format / linter rules) are used, but they can be easily customized to fit companies requirements.

This repo is `commitizen` friendly and commit messages are created following its recommendations.

## Tests

Tests are run using `Jest`.

Not all projects contain tests. Only `@personio/store` and `@personio/ui-common-components`. Others were not contaning 
core business logic inside and components in main application are mainly used to display data. 

## Possible improvements

- Webpack config may be improved to reduce bundle sizes even though different optmizations have been done to stay far 
from the badge max size.
- Components styles could be improved
- Components tests in the main application to be added
- A storybook for ui-common-components.
- Table showing the list of candidates is not optmized. Possible solution could be paginations or using libraries like 
`react-virtualized` (suggested by Dan Abramov: https://twitter.com/dan_abramov/status/716369503291105283?s=20).
For huge list of data current implementation could be problematic. 
