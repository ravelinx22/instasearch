import React from "react";
import "../styles/styles.css";
import { TestComponent } from '../components/test_component';

// Commonly used with containers
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

// Actions
import { testAction } from "../actions/actions"

export default class TestContainer extends React.Component {
	constructor(props) {
		super(props);
		this.testAction = testAction.bind(this);
	}

	componentDidMount() {
		this.testAction();
	}

	render() {
		return (
			<div>
				Hello World
				<TestComponent name="React Boilerplate"/>
				<img src="../img/react_icon.png" alt="myAlt"/>
			</div>
		);
	}
}
