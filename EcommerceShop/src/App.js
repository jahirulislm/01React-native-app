// import { View, Text } from 'react-native'
// import React from 'react'
// import AppNavigator from './AppNavigator'
// import { Provider } from 'react-redux'
// import { store } from './redux/Store'

// const App = () => {
//   return 
// (
//   <Provider store={store}>
//     <AppNavigator />
//   </Provider>
  
//   )
  
// }

// export default App

import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './AppNavigator';
import {Provider} from 'react-redux';
import { store } from './redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;