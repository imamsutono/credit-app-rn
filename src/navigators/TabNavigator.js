import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DoctorListStack from './DoctorListStack';
import FAQStack from './FAQStack';
import SnapUpStack from './SnapUpStack';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Details') {
            iconName = 'apps-outline';
          } else if (route.name === 'Doctor List') {
            iconName = 'ios-people-outline';
          } else if (route.name === 'FAQ') {
            iconName = 'ios-help-circle-outline';
          } else if (route.name === 'Snap Up') {
            iconName = 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EF8C0B',
        tabBarinactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Service" component={DoctorListStack} />
      <Tab.Screen name="Credit" component={FAQStack} />
      <Tab.Screen name="User" component={SnapUpStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
