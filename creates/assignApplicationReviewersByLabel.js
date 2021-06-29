const sample = require('../samples/sample_issue');

const createIssue = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://{{bundle.authData.hostname}}/zapier/integration/add-label-reviewers`,
    body:
    {
      label: bundle.inputData.label,
      applicationId: bundle.inputData.createdChallengeApplication,
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'reviewer',
  noun: 'Reviewer',

  display: {
    label: 'Assign new reviewers.',
    description: 'Assign new reviewers based on label'
  },

  operation: {
    inputFields: [
      { key: 'label', label: 'Label', required: true, dynamic: 'label.title.title', helpText: "Users with the selected label will be assigned as reviewers." },
      { key: 'createdChallengeApplication', label: 'Last Edited Application', required: true, helpText: "Pass the id of the application to add reviewers for it." },
    ],
    perform: createIssue,
    sample: sample
  }
};
