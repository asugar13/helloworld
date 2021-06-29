'use strict';

const authentication = {
  // type: 'basic',
  // test: {
  //   url: 'https://api.github.com/user'
  // },
  // connectionLabel: '{{bundle.authData.username}}'
  type: 'basic',
  test: {
    url: 'https://{{bundle.authData.hostname}}/zapier/integration/login'
  },
  fields: [
    {
      key: 'hostname',
      type: 'string',
      required: true,
      helpText: 'Enter the hostname for your platform instance.',
    },
    {
      key: 'username',
      type: 'string',
      required: true,
      helpText: 'Enter the e-mail linked to your account (must have admin privileges)',
    },
    // {
    //   key: 'password',
    //   type: 'string',
    //   required: true,
    //   hidden: true,
    //   helpText: 'Enter the password for your account',
    // },
  ],
  connectionLabel: '{{bundle.authData.username}}'
};

module.exports = authentication;
