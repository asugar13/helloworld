const sample = require('../samples/sample_issue');

const searchUser = (z, bundle) => {
  const responsePromise = z.request({
    method: 'GET',
    url: "https://{{bundle.authData.hostname}}/zapier/integration/search-user?userName=" + bundle.inputData.userName,
  })

  return responsePromise
    .then(response => JSON.parse(response.content))
};



module.exports = {
  key: 'searchByUser',
  noun: 'searchByUser',

  display: {
    label: 'Search User (exactly matching)',
    description: 'Triggers on a new request to /api/zapier/search-user.'
  },

  operation: {
    inputFields: [
        {key:'userName', required: true, label: 'User Name', 
        // choices: {assigned:'assigned',created:'created',mentioned:'mentioned',subscribed:'subscribed',all:'all'},
         helpText:'Default is "assigned"'},
    //   {key: 'repo', label:'Repo', required: true, dynamic: 'repo.full_name.full_name'},
    //   {key:'filter', required: false, label: 'Filter', choices: {assigned:'assigned',created:'created',mentioned:'mentioned',subscribed:'subscribed',all:'all'}, helpText:'Default is "assigned"'},
    //   {key:'state', required: false, label: 'State', choices: {open:'open',closed:'closed',all:'all'}, helpText:'Default is "open"'}
    ],
    perform: searchUser,

    sample: sample
  }
};
