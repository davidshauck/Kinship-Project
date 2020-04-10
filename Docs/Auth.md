## Working wieth austh 0 in the Authentication side of things
Auth-0 is the provider being used to make sure that we are not storing passwords on our side of things, is the user needs password reset, Auth-0 handles it.

Implementing a new auth 0 project or implementing the Auth-0 finctitonality to an app is aas simple as switching the `auth_config.json` within the `src/`. THis configuration file is what helps Auth-0  find out which service it is getting tied to. The document is used within the Aut-0 Provider which is implemented within the `react-aut0-spa.js` page.

