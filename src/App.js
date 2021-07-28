/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './stores/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home/HomeScreen';
import GigList from './screens/gigList';
import FoodList from './screens/foodList';
import LoginScreen from './screens/login/LoginScreen'
// import configureStore from './src/store';

// const store = configureStore();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      {/* <LoginScreen/> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="GigList"
            component={GigList}
            options={{
              title: 'Gigs Indonesia',
              headerTintColor: 'orange',
              headerStyle: {
                backgroundColor: 'black'
              }
            }}
          />
          <Stack.Screen
            name="FoodList"
            component={FoodList}
            options={{
              headerTintColor: 'orange',
              headerStyle: {
                backgroundColor: 'black'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
        {/* <HomeScreen></HomeScreen> */}
    </Provider>
  );
};


export default App;
