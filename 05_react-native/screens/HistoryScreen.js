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
