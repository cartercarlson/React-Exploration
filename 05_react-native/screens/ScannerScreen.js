import React, { Component } from "react";
import { TextInput } from "react-native";
import { Container, Text, Button } from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import { AppLoading, Constants } from "expo";
import SQL from "../components/SQL";


class ScannerScreen extends Component {

	static navigationOptions = {
		header: null
	};

	saveToDB = qr => {
		SQL.AddQRCode(qr);
	};

	render() {
		return (
			<Container style={{ marginTop: Constants.statusBarHeight }}>
				<Grid
					style={{
						alignItems: "center"
					}}
				>
					<Row>
						<Text>Scanner Screen</Text>
					</Row>
					<Row>
						<TextInput
							placeholder="Type here to the qr..."
							onChangeText={qr => this.setState({ qr })}
						/>
					</Row>
					<Row>
						<Button
							onPress={() => {
								this.saveToDB(this.state.qr);
							}}
						>
							<Text>Add to database</Text>
						</Button>
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

export default ScannerScreen;
