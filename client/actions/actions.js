import React from "react";
import { TagComponent } from "../components/tag_component";
import { Container, Row, Col, Button } from "reactstrap";
import TagCard from "../components/tag_card";
import { TagCardRow } from "../components/tag_card_row";

export function testAction() {
	console.log("Hello world");
}

export function getResults(tagName) {
	console.log(tagName);

fetch("/api/fights", {
		method: "POST",
		body: JSON.stringify({
			"primaryTag": tagName
		 }),
		headers: new Headers({'content-type': 'application/json'}),
	})
	.then((response) => response.json())
	.then((responseJSON) => {
		this.loadHistory();
		var i = 1;
		var tags = responseJSON.map((tag) => {
			return <TagCardRow tag={tag.name} ranking={i++} onClick={() => this.getResults(tag.name.substring(1))}/>;	
		});
	    var card = <TagCard rows={tags} name={tagName}/>;
		this.setState({tagInfo: card});
	})
	.catch((error) => {
		console.log("Error");
	});
}

export function loadHistory() {
	fetch("/api/fights")
	.then(results => {
		return results.json();
	}).then(data => {
		var cards = data.map((tag) => {
			var i = 1;
			var rows = tag.tags.map((row) => {
				return <TagCardRow tag={row.name} ranking={i++} onClick={() => this.getResults(row.name.substring(1))} />;
			});

			return <TagCard key={tag._id} rows={rows} name={tag.name}/>
		});
		this.setState({history: cards});
	});
}
