import { Meteor } from 'meteor/meteor';
import ValidatedPublication from '/imports/lib/ValidatedPublication.js';
import './users.js';

export const currentUser = new ValidatedPublication({
 name: 'users.currentUser',
 validate: null,
 run() {
   return Meteor.users.find({
     _id: this.userId,
   }, {
     fields: Meteor.users.currentUserFields,
   });
 },
});
