import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import Body from '/imports/ui/layouts/Body.jsx';
import MainContainer from '/imports/ui/containers/MainContainer.jsx';
import HomeContainer from '/imports/ui/containers/HomeContainer.jsx';


export default () => (
 <Router history={browserHistory}>
   <Route component={Body}>
     <Route component={MainContainer}>
       <Route path="/" component={HomeContainer} />
     </Route>
   </Route>
 </Router>
);
