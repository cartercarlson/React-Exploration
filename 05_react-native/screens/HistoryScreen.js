import React, { Component } from "react";

import { Container, Text, Button } from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import { AppLoading, Constants } from "expo";
import SQL from "../components/SQL";


class HistoryScreen extends Component {

	constructor(props) {
		super(props);
		this.state = { qrs: [] };
	}

	static navigationOptions = {
		title: "History"
	};

	async componentDidMount() {
		let qrs = await SQL.GetQRs();
		this.setState({ qrs });
	}

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
					<Row>
						<Text>{this.state.qrs ? JSON.stringify(this.state.qrs) : ""}</Text>
					</Row>
			</Container>
		);
	}

}

export default HistoryScreen;
