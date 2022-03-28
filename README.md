# Survey App

## Run the app

### To run the react app

`cd survey`

`npm install`

`npm start`

View the app at [http://localhost:3000](http://localhost:3000) in your browser.

### Run the app from build

Either run `npx serve -s build` or you can open the `index.html` from the `webPage` directory file in your browser

In order to run the react app in another app or webpage I ran `npm run build` to generate the files needed to run this application inside of another app or static site. Where I have used the build files in an simple static page as an example of how you could use it. The `webPage` is independent from the React application so this is why the build files are duplicated inside of that directory rather than referencing the files in the build directory in the application.

## What I did

- Reviewed assignment as if it were a product brief
- Outlined the screens/pages that would be needed
- Spun up a fresh create-react-app
- Added in `react-hook-form` and `react-bootstrap`
- Created the form components and made sure the data was coming through in a way that would support displaying it in the summary
- Added form components into larger components that would make up each screen of the survey and got the survey working without being in a modal
- Put the survey into a modal first working with a show/hide button
- Removed the show/hide button in favor of setTimeout in a useEffect
- Built the app and confirmed that it was able to be used with in an independent application or web page.

## With more time

- Figure out more about how to package the build more neatly/do it better (this is the first time I've tried this)
- create more reusable components to simplify the individual screens, ex. reusable `react-hook-form` components rather than the more verbose way that they're used here
- Better styling, minimal styling of individual components unless absolutely necessary
- Add in a few tests for functional logic

## What did I learn from this

- how to use build files to inject a react application into a basic webpage
- more about `react-hook-form` specifically data collection across screens rather than for a form within a single page/component

Credit: bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
