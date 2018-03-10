import React from "react";
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom"
import TagCard from "../components/tag_card";
// Actions
import { getResults, loadHistory, showError } from "../actions/actions"
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';

export default class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tagName: "",
			tagInfo: null,
			history: []
		}
		this.getResults = getResults.bind(this);
		this.loadHistory = loadHistory.bind(this);
		this.showError = showError.bind(this);
	}

	componentDidMount() {
		this.loadHistory();
	}

	updateTag(evt) {
		this.setState({
			tagName: evt.target.value
		});
	}

	render() {
		return (
			<Container>
				<div className="homeTitle">InstaSearch</div>
				<Row className="justify-content-center">
					<input type="text" placeholder="Search Hashtag" onChange={(evt) => this.updateTag(evt)}/>
					<button className="search_btn" onClick={() => this.getResults(this.state.tagName)}>Buscar</button>
				</Row>
				<Container>
					<Row className="justify-content-center">
						{this.state.tagInfo}
					</Row>
					<div className="subtitle">History</div>
					<Row>
						{this.state.history}
					</Row>
				</Container>
				<Alert stack={{limit: 3}} />
	</Container>
		);
	}
}
