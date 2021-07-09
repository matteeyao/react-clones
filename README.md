# Getting Started

```zsh
npx create-react-app tinder-clone
```

<br/>

## Add Firebase to your web app

<br/>

### Register App

<br/>

### Add Firebase SDK

Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase services:

```js
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_E7FKoIxQ6MzInIbGp_hS8IT9vMIUoBE",
  authDomain: "tinder-clone-448cd.firebaseapp.com",
  projectId: "tinder-clone-448cd",
  storageBucket: "tinder-clone-448cd.appspot.com",
  messagingSenderId: "945003098978",
  appId: "1:945003098978:web:0dcc601dffe654dc9ff23b",
  measurementId: "G-DGKM2QE83S"
};
```

<br/>

### Deploy to Firebase Hosting

You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

**Sign in to Google**

```zsh
$ firebase login
```

**Initiate your project**

Run this command in your app's root directory

```zsh
$ firebase init
```

**When you're ready, deploy your web app**

Put your static files (e.g. HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory.

```zsh
$ firebase deploy
```

After deploying, view your app at https://tinder-clone-448cd.web.app/

<br/>

## React app setup

<br/>

```zsh
npm start
```

Remove `App.test.js`, `logo.svg`, `setupTest.js`

```zsh
$ npm install @material-ui/core
```

```zsh
$ npm install @material-ui/icons
```

```zsh
$ npm install react-router-dom
```

```zsh
$ npm install firebase
```

React functional component shortcut

```
r + a + f + c + e
```

... or ...

```
r + f + c + e
```

## Deploy through Firebase

```zsh
$ firebase init
```

→ Hosting: Configure and deploy Firebase Hosting sites

→ Use an existing project

→ tinder-clone-448cd

→ build

→ Y

```zsh
$ npm run build
```

```zsh
$ firebase deploy
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
