import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import DoctorListStack from './DoctorListStack';
import SnapUpStack from './SnapUpStack';
import HomeStack from './HomeStack';
import CreditStack from './CreditStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Service') {
            iconName = 'grid';
          } else if (route.name === 'Credit') {
            iconName = 'credit-card';
          } else if (route.name === 'User') {
            iconName = 'user';
          }

          return <Feather name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarinactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Service" component={DoctorListStack} />
      <Tab.Screen name="Credit" component={CreditStack} />
      <Tab.Screen name="User" component={SnapUpStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
