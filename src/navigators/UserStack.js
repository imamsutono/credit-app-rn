import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen';

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Doctor List Stack"
        component={UserScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
