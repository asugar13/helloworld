const sample = require('../samples/sample_repo_list');

const triggerLabels = (z, bundle) => {
  const responsePromise = z.request({
    url: 'https://{{bundle.authData.hostname}}/api/labels/get-entity?entityType=Users'
  });
  return responsePromise
    .then(response => {
      let array = JSON.parse(response.content)
      array = array.labelGroup
      for (let item of array) {
        item.id = item._id
      }
      return array
    }
    );
};

module.exports = {
  key: 'label',
  noun: 'Label',

  display: {
    label: 'Get Labels',
    hidden: true,
    description: 'The only purpose of this trigger is to populate the dropdown list of labels in the UI, thus, it\'s hidden.'
  },

  operation: {
    inputFields: [

    ],
    perform: triggerLabels,
    // sample: sample
  }
};
