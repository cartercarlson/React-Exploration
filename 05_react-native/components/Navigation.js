import { createStackNavigator, createAppContainer } from "react-navigation";
import HistoryScreen from "../screens/HistoryScreen"
import ResultScreen from "../screens/ResultScreen"
import ScannerScreen from "../screens/ScannerScreen"

const RootStack = createStackNavigator(
	{
		Scanner: {
			screen: ScannerScreen
		},
		History: {
			screen: HistoryScreen
		},
		Result: {
			screen: ResultScreen
		}
	},
	{
		initialRouteName: "Scanner" // default screen name
	}
);

export default createAppContainer(RootStack);
