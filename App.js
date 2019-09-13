import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Profile from "./src/screens/Profile";
import Acceleration from "./src/screens/Acceleration";

const MainStack = createStackNavigator(
  {
    Acceleration: Acceleration,
    Profile: Profile
  },
  {
    initialRouteName: "Acceleration",
    headerMode: "none"
  }
);

const App = createAppContainer(MainStack);

export default App;
