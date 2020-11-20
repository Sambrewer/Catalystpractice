import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screen/Home';
import Login from  '../../Screen/Login';

const MainStack = createStackNavigator();

export default NavigationRouter = () => {
  return  (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}