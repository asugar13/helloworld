const sample = require('../samples/sample_issue');

const searchUser = (z, bundle) => {
  const responsePromise = z.request({
    method: 'GET',
    url: "https://{{bundle.authData.hostname}}/zapier/integration/search-application-fields?field=" + bundle.inputData.field + "&applicationId=" + bundle.inputData.createdChallengeApplication,
  })

  return responsePromise
    .then(response => JSON.parse(response.content))
};



module.exports = {
  key: 'field',
  noun: 'field',

  display: {
    label: 'Search Field (exactly matching)',
    description: 'Search Field (exactly matching)'
  },

  operation: {
    inputFields: [
      {
        key: 'field', required: true, label: 'Field', helpText: "Type the field name followed by a \':\' and the value you are looking for. For example, if you want to look for data.textField1 with value \'London\' search for: data.Textfield1:London"
        // choices: {assigned:'assigned',created:'created',mentioned:'mentioned',subscribed:'subscribed',all:'all'},
        // helpText: 'Default is "assigned"'
      },
      { key: 'createdChallengeApplication', label: 'Last Edited Application', required: true, dynamic: 'createdChallengeApplication.id.id', helpText: "Pass the id of the application you want to search on." },

      //   {key: 'repo', label:'Repo', required: true, dynamic: 'repo.full_name.full_name'},
      //   {key:'filter', required: false, label: 'Filter', choices: {assigned:'assigned',created:'created',mentioned:'mentioned',subscribed:'subscribed',all:'all'}, helpText:'Default is "assigned"'},
      //   {key:'state', required: false, label: 'State', choices: {open:'open',closed:'closed',all:'all'}, helpText:'Default is "open"'}
    ],
    perform: searchUser,

    sample: sample
  }
};
