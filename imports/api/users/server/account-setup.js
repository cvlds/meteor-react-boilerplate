import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  Accounts.onCreateUser((options, user) => {
    const newUser = user;
    if (options.email) {
      newUser.emails.address = options.email;
    }
    return newUser;
  });
});
