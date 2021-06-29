const sample = require('../samples/sample_issue');

const searchOrganisation = (z, bundle) => {
  const responsePromise = z.request({
    method: 'GET',
    url: 'https://{{bundle.authData.hostname}}/zapier/integration/search-org?organisationName=' + bundle.inputData.userName,
  })

  return responsePromise
    .then(response => JSON.parse(response.content))
};



module.exports = {
  key: 'searchByOrganisation',
  noun: 'searchByOrganisation',

  display: {
    label: 'Search Organisation (exactly matching)',
    description: 'Triggers on a new request to /api/zapier/search-org'
  },

  operation: {
    inputFields: [
        {key:'organisationName', required: true, label: 'Organisation Name', 
        // choices: {assigned:'assigned',created:'created',mentioned:'mentioned',subscribed:'subscribed',all:'all'},
         helpText:'Default is "assigned"'},

    //   {key: 'repo', label:'Repo', required: true, dynamic: 'repo.full_name.full_name'},
    //   {key:'filter', required: false, label: 'Filter', choices: {assigned:'assigned',created:'created',mentioned:'mentioned',subscribed:'subscribed',all:'all'}, helpText:'Default is "assigned"'},
    //   {key:'state', required: false, label: 'State', choices: {open:'open',closed:'closed',all:'all'}, helpText:'Default is "open"'}
    ],
    perform: searchOrganisation,

    sample: sample
  }
};
