import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';

// Wait for Meteor to fully load before rendering the React app
Meteor.startup(() => {
  // Render the App component into the DOM element with id 'react-target'
  render(<App/>, document.getElementById('react-target'));
});
