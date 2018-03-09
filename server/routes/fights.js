var router = require("express").Router();
const basePath = "https://www.instagram.com/explore/tags/";
const endPath = "/?__a=1";
var request = require("request");

router.post("/", function(req, res) {
	console.log(req.body);
	var primaryTag = req.body.primaryTag;
	console.log(primaryTag);
	request({
		url: basePath + primaryTag + endPath,
		method: "GET",
		qs: {}
	}, function(err_i, res_i, body_i) {
		response = JSON.parse(body_i);
		edges = response.graphql.hashtag.edge_hashtag_to_top_posts.edges;
		
		var tags = edges.map((edge) => {
			return edge.node.edge_media_to_caption.edges[0].node.text.match(/#\w+/g);
		});

		// Add tags
		var all = {}; 
		for(var i = 0; i < tags.length;i++) {
			for(var j = 0; j < tags[i].length; j++) {
			  all[tags[i][j]] = 0;
			}
		}

		// Add count
		for(var i = 0; i < tags.length;i++) {
			for(var j = 0; j < tags[i].length; j++) {
			  all[tags[i][j]] += 1;
			}
		}

		// Order by number
		var result = Object.keys(all).sort(function(a, b) {
			return all[b] - all[a];
		});

		// Add count again
	    var endResult = result.map((name) => {
			return {name: name, count: all[name]};
		});
		res.json(endResult);
	});
});

module.exports = router;

