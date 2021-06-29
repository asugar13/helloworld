const sample = require('../samples/sample_issue');

const createIssue = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://{{bundle.authData.hostname}}/zapier/integration/edit-application-fields`,
    body:
    {
      field: bundle.inputData.field,
      newValue: bundle.inputData.newValue,
      applicationId: bundle.inputData.applicationId,
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'editField',
  noun: 'Field',

  display: {
    label: 'Edit challenge application field.',
    description: 'Edit existing challenge application fields.'
  },

  operation: {
    inputFields: [
      { key: 'field', label: 'Field name', required: true, helpText: "Choose which field you want to modify the entry for" },
      { key: 'newValue', label: 'New value', required: true, helpText: "Chose the new value for the field" },

      { key: 'applicationId', label: 'Last Edited Application', required: true, helpText: "Pass the id of the application you are modifying an entry for." },
    ],
    perform: createIssue,
    sample: sample
  }
};
