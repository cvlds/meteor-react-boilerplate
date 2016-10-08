import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Home from '../pages/Home.jsx';

export default createContainer((props) => {
 return {
   user: Meteor.user(),
 };
}, Home);
