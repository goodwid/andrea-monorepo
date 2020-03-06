# Welcome

Congratulations on your recent graduation from Alchemy Code Lab, and welcome to the $PROJECT project! This Readme will help you get oriented to the project. If you have any questions, don't hesitate to reach out to your team mates. If you find anything missing from this Readme, feel free to add it!

## The App

The $PROJECT project is a suite of new applications developed for the client to facilitate connecting independent contract caregivers with clients that need tasks completed.

### Client app

this is used by people seeking care to create and manage their requested tasks.

### Provider app

This will be used by the caregivers to search for jobs, connect with clients, and communicate with the client

### Admin app

This is used by the client to manage clients and providers

## Resources

There are several resources that you'll need in order to contribute to this project. Hit up David or Jacob and ask them for access to the following:

* We have a Slack channel that we use to coordinate with one another.
* [We use Google Drive](https://drive.google.com/drive/u/0/folders/12BQHiQiV6_SY3ovfwMDJp_HkQwdoyyt1) for various documents, including our [timesheet](https://docs.google.com/spreadsheets/d/14Bu6W41lN52Twp5SIsb9pKk84RZLytHP1XhFmpdLmR4).
* [We use Google Calendar](https://calendar.google.com/calendar?cid=aGQ4NGR2Z2NyZ2RvcHBvbnNwMzYxZGRtNXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ) to mark days that we'll be out of the office, or non-standard (Friday, Saturday, Sunday) days that we'll be in the office. If you won't be in the office for a day or you'll be in early or late, let the team know in Slack and then mark it down on the calendar.

## Setting Up Your Workspace

### Prerequisites

You will need [Node.js](http://nodejs.org/)+ and [Yarn](https://yarnpkg.com) **(version >= 1.13)** installed to run this app. This app is a monorepo built with [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/), so be advised that *using NPM will not work*.  We recommend installing nvm and using the latest V11 for node.

### Installing

Clone this repository to your local machine.

Navigate to the root directory and install the dependencies by running  `yarn`. (This is Yarn's equivalent to `npm i`).

### Setup

~~Copy the `.env.example` file to `.env` and replace values with those appropriate for your deployment target. You'll need to get these values from one of your team mates.~~  No .env exists as yet.

### Running

To launch the server and host the app on your local machine, navigate to the root directory and run `yarn start:app`. (This is Yarn's version of `npm start`). You can also launch the server by navigating to `packages/app` and running `yarn start`.

## Contributing and Workflow

As of this writing, we meet every Monday morning at 9:30a for a Sprint Meeting, during which we quickly go over what we accomplished in the past week, and coordinating on what we'll be doing for the next week.

We conclude most days after a "Daily Retro" at 4pm, during which we quickly review any happenings of the day, their possible causes and implications, and any action steps they suggest.

## $PROJECT Discussion

The project is currently in the beginning stage, we are developing HTML/CSS mockups to present to the client for review.

## $PROJECT Development

Components are used as the presentation layer, not logic.  ~~All business logic will go into actions and all app state will be stored in the Redux store~~.  Obvious local component state needs, like form data and click handlers, are fine in local state but the primary focus should be to have application state in ~~Redux~~.

We do our best to consistently follow shared conventions and idioms, outlined on a board in the shared space, and maintained here: [App Lab Conventions and Idioms](conventions-and-idioms.md)

## Git

The `dev` branch is our primary working branch; when you begin working on a task, fork from this branch. When you're finished with a task, use GitHub to make a pull request into `dev` and *have someone else review your work*. If something stands out as needing to be fixed, Jacob or David will comment on the pull request or hit you up by some other means so that you can fix it. *Never push to `dev` without having your work reviewed*.

The code in the `dev` branch should always include the most recent *working* version of the app. It's OK to push known bugs to `dev` as long as A) they're not app-breaking and B) they're marked down on the board as needing to be addressed.

### Accessing live versions of the app

We use Firebase hosting to preview a live version of the apps. The site previews are as follows:
- Client app: [https://caregiver-client.firebaseapp.com](https://caregiver-client.firebaseapp.com)
- Provider app: [https://caregiver-provider.firebaseapp.com](https://caregiver-provider.firebaseapp.com)
- Admin app: [https://caregiver-go.firebaseapp.com](https://caregiver-go.firebaseapp.com)

## Culture

Having gone through Alchemy's program, you will already have a solid grasp on the culture of the space in general. There are minor but very important differences between being a student here and working in the App Lab.

1. Maintain a growth mindset. Be patient with everyone, including yourself. Expect mistakes and miscommunications, and welcome them as opportunities to learn/grow. We're all here to learn and practice :)

2. We are role models for current students. Our professionalism sets an example for them. We very well may be the first professionals that they encounter, and our actions will show them what it means to be a developer. Professionalism in this case means showing up on time and getting your work done, but it also means using work-appropriate language in public settings and openly respecting everyone in the space. This isn't to say that you aren't allowed to swear, but just remember that this is a public space, and just because you have established a friendly relationship with your peers does not necessarily mean that those around you will understand the context of conversations that they may (i.e. 'will almost certainly') overhear.

3. It is expected that you will arrive on time to begin work at 9a, and that you will stick around until 5p, Monday through Thursday. There is wiggle room, as you are looking for work and arranging meetings - and also life just happens! - but you should treat this like any other job with regards to punctuality and accountability.

4. This should go without saying, but just in case it doesn't: no drinking while 'on the clock,' don't come into work high or otherwise mentally compromised, don't spend your time on Facebook, and don't share anything on work communication tools that you wouldn't want your grandmother to see.

5. If you foresee yourself having trouble with adhering to the above, reach out to your team mates for support! If you need someone else to hold you accountable, set yourself up for success.

## Built With

* [ReactJS](http://reactjs.org/) - Platform for View Layer
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy) - Routing Library for ReactJS
* [Node.js](http://nodejs.org/) -  JavaScript Runtime Environment
* [Yarn](https://yarnpkg.com) - Dependency Management
* [Webpack](https://webpack.js.org/) - Module Bundler
* [Cordova](https://cordova.apache.org) - Wrapper Library for iOS & Android
* [TravisCI](https://travis-ci.org/) - Continuous Integration Testing
* [Babel](https://babeljs.io/) - JavaScript Compiler
* [ESLint](https://eslint.org/) - JavaScript & JSX Linter

## Contributors

* **[Marty Nelson](https://github.com/martypdx)**
* **[Ryan Mehta](https://github.com/mehtaphysical)**
* **[David Goodwin](https://github.com/goodwid)**

### Past Contributors
