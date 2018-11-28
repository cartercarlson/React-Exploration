import React, { Component } from 'react';

export class MyFirstChildComp extends Component {

	constructor(props) {
		super(props)
	}

  render() {
		console.log("PROPS", this.props)
    return (
      <div>
				My child component
      </div>
    );
  }
}

// export MyFirstChildComp;
