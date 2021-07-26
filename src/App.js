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
import FoodForm from './screens/foodForm';
import FoodList from './screens/foodList';
// import configureStore from './src/store';

// const store = configureStore();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FoodForm"
            component={FoodForm}
            options={{
              title: 'Gigs',
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
