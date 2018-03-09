import React from "react";
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";

// Actions
import { getResults } from "../actions/actions"

export default class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.getResults = getResults.bind(this);
	}

	componentDidMount() {
		this.getResults();
	}

	render() {
		return (
			<div>
				Hello World
			</div>
		);
	}
}
