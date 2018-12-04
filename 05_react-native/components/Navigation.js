import React, { Component } from "react";
import { Container, Text, Button } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Constants } from "expo";

class ScannerScreen extends Component {

	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Container style={{ marginTop: Constants.statusBarHeight }}>
				<Grid
					style = {{
						alignItems: "center"
					}}
				>
					<Row>
						<Text>Scanner Screen</Text>
					</Row>
					<Row>
						<Button onPress={() => this.props.navigation.navigate("History")}>
							<Text>History</Text>
						</Button>
						<Button onPress={() => this.props.navigation.navigate("History")}>
							<Text>Result</Text>
						</Button>
					</Row>
				</Grid>
			</Container>
		);
	}

}


class HistoryScreen extends Component {

	static navigationOptions = {
		title: "History"
	};

	render() {
		return (
			<Container style={{ marginTop: Constants.statusBarHeight }}>
				<Grid
					style = {{
						alignItems: "center"
					}}
				>
					<Row>
						<Text>History Screen</Text>
					</Row>
				</Grid>
			</Container>
		);
	}

}


class ResultScreen extends Component {

	static navigationOptions = {
		title: "Scan Details"
	}

	render() {
		return (
			<Container style={{ marginTop: Constants.statusBarHeight }}>
				<Grid
					style={{
						alignItems: "center"
					}}
				>
					<Row>
						<Text>Result Screen</Text>
					</Row>
				</Grid>

			</Container
		);
	}

}


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
