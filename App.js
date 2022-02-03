import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Home';
import Image from './src/Image';

const authStack = createStackNavigator();
const mainStack = createStackNavigator();


class App extends Component {

  createMainStack = () => (
    <mainStack.Navigator initialRouteName="Home">
      <mainStack.Screen
        name={'Home'}
        component={Home}
        options={{ headerShown: false }}
      />
      <mainStack.Screen
        name={'Image'}
        component={Image}
        options={{ headerShown: false }}
      />
    </mainStack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor={'#fff'}
          barStyle={'dark-content'}
        />
        {this.createMainStack()}
      </NavigationContainer>
    );
  }
}

export default App;
