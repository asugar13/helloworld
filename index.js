const repoTrigger = require('./triggers/repo');
const issueCreate = require('./creates/issue');
const issueTrigger = require('./triggers/issue');
const labelTrigger = require('./triggers/labels');
const authentication = require('./authentication');

const createdChallengeApplication = require('./triggers/created-challenge-application')
const clickedApplicationTrigger = require('./triggers/clicked-application-trigger')
const assignApplicationReviewersByLabel = require('./creates/assignApplicationReviewersByLabel')
const editApplicationFields = require('./creates/editApplicationFields')


const userSearch = require("./searches/userSearch")
const fieldSearch = require("./searches/fieldSearch")
const organisationSearch = require("./searches/organisationSearch")

const handleHTTPError = (response, z) => {
  if (response.status >= 400) {
    throw new Error(`Unexpected status code ${response.status}`);
  }
  return response;
};

const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [
  ],

  afterResponse: [
    handleHTTPError
  ],

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
    // [repoTrigger.key]: repoTrigger, //demo app
    // [issueTrigger.key]: issueTrigger, //demo app
    [labelTrigger.key]: labelTrigger,
    [clickedApplicationTrigger.key]: clickedApplicationTrigger,
    // [cityosregister.key]: cityosregister,
    // [cityosupdate.key]: cityosupdate,
    // [cityoscreateorg.key]: cityoscreateorg,
    // [cityosupdateorg.key]: cityosupdateorg,
    [createdChallengeApplication.key]: createdChallengeApplication
  },

  // If you want your searches to show up, you better include it here!
  searches: {
    // [userSearch.key]: userSearch,
    // [organisationSearch.key]: organisationSearch
    [fieldSearch.key]: fieldSearch,

  },

  // If you want your creates to show up, you better include it here!
  creates: {
    // [issueCreate.key]: issueCreate, //demo app
    [assignApplicationReviewersByLabel.key]: assignApplicationReviewersByLabel,
    [editApplicationFields.key]: editApplicationFields
  }
};

// Finally, export the app.
module.exports = App;
