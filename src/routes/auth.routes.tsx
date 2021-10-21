import React from "react";
/*
  Using react-navigation/native-stack as an alternative because of
  the following issue in react-navigation/stack
  https://github.com/react-navigation/react-navigation/issues/9834
*/
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from "../screens/AppointmentDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
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
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Details"
        component={AppointmentDetails}
      />
    </Navigator>
  );
}
