import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/signIn";
import SignUp from "../pages/SignUp";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Voltar",
          headerStyle: {
            backgroundColor: "#3b3dbf"
          },
          headerTintColor: "#fff"
        }}
      />

    </Stack.Navigator>
  );
}
