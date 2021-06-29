const sample = require('../samples/sample_issue');

const triggerIssue = (z, bundle) => {
  const responsePromise = z.request({
    method: 'GET',
    url: "https://{{bundle.authData.hostname}}/zapier/integration/created-challenge-application?authUser=" + bundle.authData.username,
  })

  return responsePromise
    .then(response => JSON.parse(response.content))
};



module.exports = {
  key: 'createdChallengeApplication',
  noun: 'Submitted Challenge Application',

  display: {
    label: 'Get New Submitted Challenge Applications',
    description: 'Triggers when a challenge application is submitted to the platform.'
  },

  operation: {
    inputFields: [

    ],
    perform: triggerIssue,

    sample: sample
  }
};
