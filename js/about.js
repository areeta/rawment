function parseRamenReviews(RAMEN_REVIEWS) {
	//Do not proceed if no tweets loaded
	if (RAMEN_REVIEWS === undefined) {
		window.alert('No ramen reviews returned');
		return;
	}

	ramen_reviews_array = RAMEN_REVIEWS.slice().reverse().map(function (ramen_review) {
		return new RamenReview(ramen_review.REVIEW_ID, ramen_review.BRAND, ramen_review.VARIETY, ramen_review.STYLE, ramen_review.COUNTRY, ramen_review.STARS);
	});

	console.log(ramen_reviews_array)
	//This line modifies the DOM, searching for the tag with the numberTweets ID and updating the text.
	//It works correctly, your task is to update the text of the other tags in the HTML file!
	$('#numberRamenReviews').text(ramen_reviews_array.length);

	activity_vis_spec = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "A plot of how many of each type of activity exists in the dataset.",
		"data": {
			"url": "./data/ramen-data-convert.json"
		},
		"mark": "bar",
		"encoding": {
			"y": {
				"type": "quantitative",
				"sort": { "op": "count", "field": "COUNTRY" },
				"title": "Frequency of Activity"
			},
			"x": {
				"field": "COUNTRY",
				"axis": { "labelAngle": 45 },
				"type": "nominal",
				"title": "Activity Type"
			},

		},


	};
	vegaEmbed('#activityVis', activity_vis_spec, { actions: false });
	//Countries that have the highest rated ramen
	//Style of ramen with the highest rating
	//Brand of ramen that has the highest rating
	//Most common noodle flavor
	//Top ramen of each year

}


//Wait for the DOM to load
$(document).ready(function () {
	loadRamenReviewData().then(parseRamenReviews);
});