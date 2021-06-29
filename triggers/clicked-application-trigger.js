const sample = require('../samples/sample_issue');

const triggerIssue = (z, bundle) => {
  const responsePromise = z.request({
    method: 'GET',
    url: "https://{{bundle.authData.hostname}}/zapier/integration/clicked-application-trigger?authUser=" + bundle.authData.username,
  })

  return responsePromise
    .then(response => JSON.parse(response.content))
};



module.exports = {
  key: 'newFormTriggerButtonClicked',
  noun: 'New Form Trigger Button Clicked',

  display: {
    label: 'New Form Trigger Button Clicked',
    description: 'Triggers when a challenge application form has the Zapier integration button clicked'
  },

  operation: {
    inputFields: [

    ],
    perform: triggerIssue,

    sample: sample
  }
};
