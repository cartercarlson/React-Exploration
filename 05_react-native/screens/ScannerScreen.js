import React, { Component } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Container, Text, Button, Footer } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { withNavigationFocus } from "react-navigation";

import { BarCodeScanner, Permissions } from "expo";

import SQL from "../components/SQL";


class ScannerScreen extends Component {

	static navigationOptions = {
		header: null
	};

	state = {
		hasCameraPermission: null
	};

	async componentDidMount() {
		// ask for camera permission
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === "granted" });
	}

	saveToDB = qr => {
		SQL.AddQRCode(qr);
	};

	handleBarCodeScanned = ({ type, data }) => {
		this.saveToDB(data);
		// change screen to Result and pass scanned qr
		this.props.navigation.navigate("Result", {
			qr: data
		});
	};

	render() {
		const { hasCameraPermission } == this.state;
		if (hasCameraPermission === null) {
			return <Text>Requesting for camera permission</Text>
		}
		if (hasCameraPermission === false) {
			return <Text>Unable to access camera</Text>
		}
		if (this.props.isFocused) {

			return (
				<Container>
					<BarCodeScanner
						onBarCodeScanned={this.handleBarCodeScanned}
						style={styles.BarCodeScanner}
					>
						<Footer style={styles.layerBottom}>
							<Grid>
								<Row style={styles.layerBottomRow}>
									<Button onPress={() => this.props.navigation.navigate("History")}>
										<Text>History</Text>
									</Button>
								</Row>
							</Grid>
						</Footer>
					</BarCodeScanner>
			);
		}
	}

	const styles = StyleSheet.create({
		BarCodeScanner: {
			height: Dimensions.get("window").height,
			width: Dimensions.get("window").width,
			flex: 1,
			justifyContent: "flex-end"
		},
		layerBottom: { backgroundColor: "transparent" },
		layerBottomRow: {
			justifyContent: "center",
			marginHorizontal: 50
		}
	});

}

export default ScannerScreen;
