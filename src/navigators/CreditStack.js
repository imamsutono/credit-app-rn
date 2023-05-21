import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreditScreen from '../screens/CreditScreen';

const Stack = createStackNavigator();

const CreditStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Credit Stack"
        component={CreditScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default CreditStack;
