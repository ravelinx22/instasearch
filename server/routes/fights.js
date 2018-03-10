var router = require("express").Router();
const basePath = "https://www.instagram.com/explore/tags/";
const endPath = "/?__a=1";
var request = require("request");
var Fight = require("../models/fight");
var mongoose = require("mongoose");

router.post("/", function(req, res) {
	try {
		var primaryTag = req.body.primaryTag;
		if(primaryTag.trim() === "") throw new Error();

		console.log(primaryTag + " posi");
		request({
			url: basePath + primaryTag + endPath,
			method: "GET",
			qs: {}
		}, function(err_i, res_i, body_i) {
			response = JSON.parse(body_i);
			edges = response.graphql.hashtag.edge_hashtag_to_top_posts.edges;
		
			var tags = edges.map((edge) => {
				if(edge.node.edge_media_to_caption.edges[0]) {
					return edge.node.edge_media_to_caption.edges[0].node.text.match(/#\w+/g);
				}
			});

			// Add tags
			var all = {}; 

			for(var i = 0; i < tags.length;i++) {
				if(tags[i]) {
					for(var j = 0; j < tags[i].length; j++) {
						if(tags[i][j] !== ("#" + primaryTag)) {
							all[tags[i][j]] = 0;
						}
					}
				}
			}

			// Add count
			for(var i = 0; i < tags.length;i++) {
				if(tags[i]) {
					for(var j = 0; j < tags[i].length; j++) {
						if(tags[i][j] !== ("#" + primaryTag)) {
							all[tags[i][j]] += 1;
						}
					}
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

			if(endResult) {
				if(endResult.length >= 5) {
					endResult = endResult.slice(0,5);
				}

				var fight = new Fight({
					_id: new mongoose.Types.ObjectId(),
					name: primaryTag,
					tags: endResult
				});		

				fight.save(function(err) {
					if(err) throw err;
				});
				res.status(200).json(endResult);
			}
		});
	}
	catch(error) {
		res.status(404).send({message: "Opps, there was an error"});
	}
});

router.get('/', function(req, res) {
	try {
		Fight.find({})
			.sort('-createdAt')
			.limit(5)
			.exec(function(err, fights) {
				res.json(fights);	
			})
	}
	catch(error) {
		res.status(404).send({message: "Opps, there was an error"});
	}
});


module.exports = router;

