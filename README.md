This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install package

First of all You will need to install the necessary packages to run the project. Run the following commands at _root_ of your React Native project:

```bash
# using npm
npm install
# OR using Yarn
yarn
```

Then cd into ios directory and run

```bash
pod install
```

## Step 2: Start the Metro Server

Start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
To start Metro, run the following command from the _root_ of your React Native project:
PS: Metro bundler usually should start automatically with step 3 command

```bash
# using npm
npm start
# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android
# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios
# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly. You can type in any username and password to login
