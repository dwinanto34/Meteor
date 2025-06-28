import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

/**
 * Main App component - serves as the root component for the application
 * This component renders the main layout and includes all child components
 * It's rendered into the DOM by main.jsx when Meteor starts up
 */
export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
);
