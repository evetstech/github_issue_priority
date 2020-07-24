## Installation

Clone the repo, then npm install

## Usage

Before you begin, you need to generate a GitHub Private Access Key (https://github.com/settings/apps then Personal access tokens). For scopes, enable full repo access (I haven't tested making permissions less strict).

npm start in the root directory of the project.  On load, the first screen will ask for the key you just generated.  The second screen is the list of repositories that your key has access to.  Clicking on one repository will open up the issues page.  To reorder issues, you can use drag and drop.  Saving persists through reload via localSession using redux-persist.  Media query breakpoint is changing the two column layout in issues to a one column after a certain small width is hit.  Left column repos list can be used as a navigator to other repo issues.  I added a 'test-coverage' argument to the scripts to get code coverage information via: npm run test-covarage.

### Caveats
While the repo and issues states persist in cache, once the initial data has been loaded into the store, the app will not refresh the data; part to save calls/loading/processing, part because I did not implement a cache invalidation service.  From reading the API docs, implementation can be done with eTags headers.

Make note that the access key is stored in the store, which is a really bad thing, but without a proper backend to interface with, there's no real good way to save it on the front end.

If an issue has no assignee, the default icon will be the github logo.

Code coverage is around 63% branch, as I ran out of time, and the more I messed with styling and refactoring things, more time got eaten up, so it was time to stop, as there will always be things to find that you can refactor to improve.