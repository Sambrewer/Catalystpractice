import React from 'react';
import { View, Text, Button } from 'react-native';

export default Login = ({navigation}) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  )
}