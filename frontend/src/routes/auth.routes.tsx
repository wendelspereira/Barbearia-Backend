import React from "react";
import SingIn from "../pages/SignIn";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SingIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
