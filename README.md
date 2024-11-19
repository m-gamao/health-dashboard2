Thanks for following along on my Health App Journey! 

About the App: 

The goal of this web app is to help users manage their health in a more organized way, and help people achieve their health goals. 

Intro: 

I designed the UI mockups in Figma. I'm approaching this systematically and the technical requirements are listed below. 

Current Goals:

1. Create a Landing Page - register new user, sign in, forgot password.
3. Create a Homepage/dashboard. It will remind the user of their medications, current appointments, and health metrics/readings that are important to them and their goals.

Future Scope:
1. Develop the other pages (goal setting journal page, appointments manager, medication manager, lab results manager, health insurance, smart health setup)
2. Connection to smart health devices like Apple Watch, and fitbit.
3. Chat assistant to help with goal setting and reminders.

*MVP - Technical Requirements:*

*Epic 1:* Build layout for the app.
1. Build sidebar navigation. - DONE
2. Add App Name (header) and Logo. - DONE
3. Add the page backdrop (which will appear on every page of the app). - DONE

*Epic 2:* Build landing page, user registration, login, logout, forgot password protocols.
1. Build landing page
2. User registration, accounts setup
3. Login, logout.
4. Forgot password.
5. SSO.

*Epic 3:* The User can navigate the dashboard/homepage and see reminders for their current medications, healthcare appointments, and health metrics from smart devices such as Apple Watch. There are 6 stories below and each contains a series of tasks for Frontend development.

*******Frontend Tasks:*******

*Greeting:*
The User sees a personalized greeting at the top of the page with their firstname.
1. Add container for the header/greeting section. - DONE
2. Add background photo. This will be hardcoded for the MVP.- DONE
3. Add the user name. -DONE

*Medication Reminders:*
The User can see their current medications to take and edit the medication or change the status to completed, missed, or cancelled. This then gets logged in the database.
1. Add container for the Medication Reminder section.- DONE
2. Add header and logo in a separate container. - DONE
3. Add edit button and functionality to #2.
4. Add the display field for the medication name and time (separate container).
5. Build API call to database for the medication/time.
6. Connect the Edit button to the Medication Reminder Settings page.

*Appointments Reminders*:
The User can see their current health appointments and edit the appointment or change the status to completed, missed, or cancelled. This then gets logged in the database.
1. Add container for the Appointments Reminder section.
2. Add header and logo in a separate container.
3. Add edit button and functionality to #2.
4. Add the display field for the appointment name, date and time (separate container).
5. Build API call to database for the appointment name, date, and time.
6. Connect the Edit button to the Appointments Settings page.

*Appointments Calendar*:
The User can see which days of the calendar have appointments scheduled and edit the appointment or change the status to completed, missed, or cancelled. This then gets logged in the database.
1. Add container for the Appointments Calendar section.
2. Add header and logo in a separate container.
3. Add edit button and functionality to #2.
4. Add the display field for the calendar (separate container).
5. Build API call to database for the appointment dates.
6. Connect the Edit button to the Appointments Settings page.

*Smart Health*:
The User can see their current health metrics from smart health devices and be able to edit the setup. This then gets logged in the database.
1. Add container for the Smart Health section.
2. Add header and logo in a separate container.
3. Add edit button and functionality to #2.
4. Add the display field for the appointment name, date and time (separate container).
5. Build API call to database for the appointment name, date, and time.
6. Connect the Edit button to the Appointments Settings page.

*Inspirational Quotes*:
The User can see a new inspirational quote at the start of each week. This is pulled from an API database of quotes.
1. Add container for the quotes section.
2. Add header and logo in a separate container.
3. Add a display field for the quote.
5. Build API call to database for the quotes, and have it call a new quote once a week (Sundays).

******Backend Dashboard Tasks:*******





********************











*************************************************************************

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
