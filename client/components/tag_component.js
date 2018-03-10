import React from "react"
import "../styles/styles.css";

// Use Font-Awesome icons
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBookmark from "@fortawesome/fontawesome-free-solid/faBookmark"

export const TagComponent  = (props) =>  {
	return(
		<div>{props.name} <FontAwesomeIcon icon={faBookmark} /></div>
	);
}
