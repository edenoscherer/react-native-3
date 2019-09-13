import { createAppContainer, createStackNavigator } from "react-navigation";
import Profile from "./screens/Profile";
import Acceleration from "./screens/Acceleration";
import ModalItem from "./components/ModalItem";

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

const Routes = createAppContainer(MainStack);

export default Routes;
