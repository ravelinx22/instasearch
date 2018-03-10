import React from "react"
import "../styles/styles.css";

// Use Font-Awesome icons
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBookmark from "@fortawesome/fontawesome-free-solid/faBookmark"
import { Container, Row, Col, Button } from "reactstrap";

export const TagCardRow  = (props) =>  {
	return(
		<Row className="card_row">
			<div className="card_row_title">{props.ranking}. {props.tag}</div>
			<button onClick={() => props.onClick()} className="search_btn ml-auto">Search</button>
		</Row>
	);
}
