import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceScreen from '../screens/ServiceScreen';

const Stack = createStackNavigator();

const ServiceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Doctor List Stack"
        component={ServiceScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default ServiceStack;
