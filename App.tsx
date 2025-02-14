import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigaion from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigaion/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
