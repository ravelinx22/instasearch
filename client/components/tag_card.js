import React from "react"
import "../styles/styles.css";

// Use Font-Awesome icons
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBookmark from "@fortawesome/fontawesome-free-solid/faBookmark"
import { Container, Row, Col, Button } from "reactstrap";
import { TagCardRow } from "./tag_card_row";

export default class TagCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: []
		}
	}

	componentDidMount() {
	}

	render() {
		return(
			<Col md="4" className="card_container">
				<div className="card_content">
					<div className="card_title">#{this.props.name}</div>
					<Container>
						{this.props.rows}
					</Container>
				</div>
			</Col>
		);
	}
}
