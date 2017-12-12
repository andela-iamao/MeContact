import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Application from './App';

import store from './src/store';

AppRegistry.registerComponent('MeContact', () =>  Application);
