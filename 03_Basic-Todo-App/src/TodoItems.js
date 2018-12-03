import React, { Component } from 'react';

class TodoItems extends Component {

	createTasks = item => {
		return (
			<li key={item.key} onClick={() => this.props.deleteItem(item.key)}>{item.text}</li>
		)
	}

	deleteItem = key => {
		const filteredItems = this.state.items.filter(item => {
			return item.key !== key
		})
		this.setState({
			items: filteredItems
		})
	}

	render() {
		const todoEntries = this.props.entries
		const listItems = todoEntries.map(this.createTasks)
		return <ul className="theList">{listItems}</ul>
	}

}

export default TodoItems
