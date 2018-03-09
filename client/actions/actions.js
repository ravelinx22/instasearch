import React from "react";

export function testAction() {
	console.log("Hello world");
}

export function getResults() {
fetch("/api/fights", {
		method: "POST",
		body: JSON.stringify({
			"primaryTag": "cat"
		 })
	})
	.then((response) => response.json())
	.then((responseJSON) => {
		console.log(responseJSON);	
	})
	.catch((error) => {
		console.log("Error");
	});

}
