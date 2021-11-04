import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {Home, ScreenA} from '../screens';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'ScreenA'} component={ScreenA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
