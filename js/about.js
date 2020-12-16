function parseRamenReviews(RAMEN_REVIEWS) {
	//Do not proceed if no tweets loaded
	if (RAMEN_REVIEWS === undefined) {
		window.alert('No ramen reviews returned');
		return;
	}

	ramen_reviews_array = RAMEN_REVIEWS.slice().reverse().map(function (ramen_review) {
		return new RamenReview(ramen_review.REVIEW_ID, ramen_review.BRAND, ramen_review.VARIETY, ramen_review.STYLE, ramen_review.COUNTRY, ramen_review.STARS);
	});

	// console.log(ramen_reviews_array)
	//This line modifies the DOM, searching for the tag with the numberTweets ID and updating the text.
	//It works correctly, your task is to update the text of the other tags in the HTML file!
	$('#numberRamenReviews').text(ramen_reviews_array.length);

	countriesReviewsCount = new Map();
	ramen_reviews_array.map(review => {
		if (countriesReviewsCount.has(review.country)) {
			countriesReviewsCount.set(review.country, {
				frequency: ++countriesReviewsCount.get(review.country).frequency,
				totalStars: countriesReviewsCount.get(review.country).totalStars + review.stars,
				avgStarsFromThisCountry: countriesReviewsCount.get(review.country).totalStars / countriesReviewsCount.get(review.country).frequency,
			});
		} else {
			countriesReviewsCount.set(review.country, {
				frequency: 1,
				totalStars: review.stars,
				avgStarsFromThisCountry: review.stars / 1,
			});
		}
	})

	console.log(countriesReviewsCount);
	let countriesReviewsCountArr = Array.from(countriesReviewsCount).map(
		([country, { frequency, totalStars, avgStarsFromThisCountry }]) =>
			({ country, frequency, avgStarsFromThisCountry }));


	reviewCountVisSpec = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "",
		"data": {
			"values": countriesReviewsCountArr
		},
		"mark": "bar",
		"encoding": {
			"x": {
				"field": "country",
				"axis": { "labelAngle": 45 },
				"type": "nominal",
				"title": "Country",
				"sort": "-y"
			},
			"y": {
				"field": "frequency",
				"type": "quantitative",
				"title": "# of Mentions",
			},
		},
	};

	vegaEmbed('#reviewCountVis', reviewCountVisSpec, { actions: false });
	//Countries that have the highest rated ramen
	avgStarsVisSpec = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "",
		"data": {
			"values": countriesReviewsCountArr
		},
		"mark": "bar",
		"encoding": {
			"x": {
				"field": "country",
				"axis": { "labelAngle": 45 },
				"type": "nominal",
				"title": "Country",
				"sort": "-y"
			},
			"y": {
				"field": "avgStarsFromThisCountry",
				"type": "quantitative",
				"title": "# of Mentions",
			},
		},
	};

	vegaEmbed('#countryAvgStarsVis', avgStarsVisSpec, { actions: false });

	//Style of ramen with the highest rating
	//Brand of ramen that has the highest rating
	//Most common noodle flavor
	//Top ramen of each year

}


//Wait for the DOM to load
$(document).ready(function () {
	loadRamenReviewData().then(parseRamenReviews);
});