import React from "react";
/*
  Using react-navigation/native-stack as an alternative because of
  the following issue in react-navigation/stack
  https://github.com/react-navigation/react-navigation/issues/9834
*/
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '../screens/Home';
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  );
}
