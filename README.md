# A Simple Pokemon App

This application was developed using React Native framework and it aims to apply important concepts regarding architeture, componentization, clean code, e2e tests, unit tests, state management and the use of widely used libraries in the React Native world.  

It consists in two simple pages: A page that contains a Pokemon list and other page that shows details about each Pokemon.

## Main used tecnologies, tools and concepts:

* Redux Toolkit to state management.
* Axios to make http requests.
* Styled Components to style the components.
* Atomic Design to componentization.
* Architeture isolated in layers.
* Typescript.
* Detox to execute e2e tests.
* Jest to execute unit tests.
* Storybook to document the components.
* Eslint to establish patterns of code.
* Husky to execute lint-stage and unit tests in git pre commit hook.
* git-commit-msg-linter to guarantee the use of convencional commits. 

## Executing the application

To execute you need to install the dependencies firts:

```console
yarn install
```
and then with a device or an emulator connected, run:

```console
yarn android
```

## Storybook

To execute the **Storybook** you must change STORYBOOK_UI to TRUE in the .env file and execute the above command again.

### Running Storybook...

https://user-images.githubusercontent.com/26507635/165368431-f8db1e76-893c-4b40-b0a5-aee37e08fa72.mp4


## E2E tests

The E2E tests are located in `e2e` folder.

To execute the e2e tests with **Detox** you must make the followings steps.

Primarily, you need to check if the correct device name is configured in the <i>.detoxrc.json</i> located in the project root folder. To android platform, if you are using an emulator, you must set up the `avdName` and in phisical device case, you must set up `adbName`.

Then, you need to build the app to the target platform.

To Android:

```console
e2e:build:android
```

And finally, execute the tests:
To android emulador:

```console
e2e:test:android:emulator
```

To phisical android device:

```console
e2e:test:android
```
### Running e2e Tests...

https://user-images.githubusercontent.com/26507635/165365402-8e1b714d-7691-4eda-bb71-d2580c346ac8.mp4

## Unit tests

The unit tests are located in `__tests__` folder.
To run the unit tests using **Jest** execute:

```console
yarn test
```

### Running unit Tests...
![unit_tests](https://user-images.githubusercontent.com/26507635/165366105-5551f576-9e2b-4a06-b069-acc5e7097c45.gif)

## Lint

To run **Eslint** run the following command:

```console
yarn lint
```
