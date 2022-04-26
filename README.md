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

<video width="320" height="240" controls>
  <source src="./readme/e2e_tests.mp4" type="video/mp4">
</video>

## Unit tests

The unit tests are located in `__tests__` folder.
To run the unit tests using **Jest** execute:

```console
yarn test
```

## Lint

To run **Eslint** run the following command:

```console
yarn lint
```