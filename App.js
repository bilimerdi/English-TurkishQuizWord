import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MainScreen from "./src/screens/MainScreen";
import QuizScreen from "./src/screens/QuizScreen";
import AbountScreen from "./src/screens/AbountScreen";
import ResultScreen from "./src/screens/ResultScreen";

const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Quiz: QuizScreen,
    Abount: AbountScreen,
    Result: ResultScreen,
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "KelimeOyunu",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
