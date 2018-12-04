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
