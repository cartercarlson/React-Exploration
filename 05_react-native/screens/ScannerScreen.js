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
