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

	$('#numberRamenReviews').text(ramen_reviews_array.length);

	countryBasedReviews = new Map();
	ramen_reviews_array.map(review => {
		if (!isNaN(review.stars)) {
			if (countryBasedReviews.has(review.country)) {
				countryBasedReviews.set(review.country, {
					frequency: ++countryBasedReviews.get(review.country).frequency,
					totalStars: countryBasedReviews.get(review.country).totalStars + review.stars,
					avgStarsFromThisCountry: countryBasedReviews.get(review.country).totalStars / countryBasedReviews.get(review.country).frequency,
				});
			} else {
				countryBasedReviews.set(review.country, {
					frequency: 1,
					totalStars: review.stars,
					avgStarsFromThisCountry: review.stars / 1,
				});
			}
		}
	})

	let countryBasedReviewsArr = Array.from(countryBasedReviews).map(
		([country, { frequency, totalStars, avgStarsFromThisCountry }]) =>
			({ country, frequency, avgStarsFromThisCountry }));

	reviewCountVisSpec = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "",
		"data": {
			"values": countryBasedReviewsArr
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
	countryAvgStarsVisSpec = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "",
		"data": {
			"values": countryBasedReviewsArr
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
				"title": "Average Ramen Rating",
			},
		},
	};

	vegaEmbed('#countryAvgStarsVis', countryAvgStarsVisSpec, { actions: false });

	//Style of ramen with the highest rating
	styleBasedReviews = new Map();
	ramen_reviews_array.map(review => {
		if (review.stars != NaN) {
			if (styleBasedReviews.has(review.style)) {
				styleBasedReviews.set(review.style, {
					frequency: ++styleBasedReviews.get(review.style).frequency,
					totalStars: styleBasedReviews.get(review.style).totalStars + review.stars,
					avgStarsFromThisStyle: styleBasedReviews.get(review.style).totalStars / styleBasedReviews.get(review.style).frequency,
				});
			} else {
				styleBasedReviews.set(review.style, {
					frequency: 1,
					totalStars: review.stars,
					avgStarsFromThisStyle: review.stars / 1,
				})
			}
		}
	});
	let avgStarsFromThisStyleArr = Array.from(styleBasedReviews).map(
		([style, { frequency, totalStars, avgStarsFromThisStyle }]) =>
			({ style, frequency, avgStarsFromThisStyle }));

	styleAvgStarsVisSpec = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "",
		"data": {
			"values": avgStarsFromThisStyleArr
		},
		"mark": "bar",
		"encoding": {
			"x": {
				"field": "style",
				"axis": { "labelAngle": 45 },
				"type": "nominal",
				"title": "Style of Ramen",
				"sort": "-y"
			},
			"y": {
				"field": "avgStarsFromThisStyle",
				"type": "quantitative",
				"title": "Average Ramen Rating",
			},
		},
	};
	vegaEmbed('#styleAvgStarsVis', styleAvgStarsVisSpec, { actions: false });

	numStylesVisSpec = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "",
		"data": {
			"values": avgStarsFromThisStyleArr
		},
		"mark": "bar",
		"encoding": {
			"x": {
				"field": "style",
				"axis": { "labelAngle": 45 },
				"type": "nominal",
				"title": "Style of Ramen",
				"sort": "-y"
			},
			"y": {
				"field": "frequency",
				"type": "quantitative",
				"title": "# of Reviews",
			},
		},
	};

	vegaEmbed('#numStylesVis', numStylesVisSpec, { actions: false });
	$("#numStylesVis").hide();

	//Brand of ramen that has the highest rating
	brandBasedReviews = new Map();
	ramen_reviews_array.map(review => {
		if (review.stars != NaN) {
			if (brandBasedReviews.has(review.brand)) {
				brandBasedReviews.set(review.brand, {
					frequency: ++brandBasedReviews.get(review.brand).frequency,
					totalStars: brandBasedReviews.get(review.brand).totalStars + review.stars,
					avgStarsFromThisBrand: brandBasedReviews.get(review.brand).totalStars / brandBasedReviews.get(review.brand).frequency,
				})
			} else {
				brandBasedReviews.set(review.brand, {
					frequency: 1,
					totalStars: review.stars,
					avgStarsFromThisBrand: review.stars / 1,
				})
			}
		}
	});

	let avgStarsFromThisBrandArr = Array.from(brandBasedReviews).map(
		([brand, { frequency, totalStars, avgStarsFromThisBrand }]) =>
			({ brand, frequency, avgStarsFromThisBrand }));

	brandAvgStarsVisSpec = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "",
		"data": {
			"values": avgStarsFromThisBrandArr
		},
		"mark": "bar",
		"encoding": {
			"x": {
				"field": "brand",
				"axis": { "labelAngle": 45 },
				"type": "nominal",
				"title": "Brand of Ramen",
				"sort": "-y"
			},
			"y": {
				"field": "avgStarsFromThisBrand",
				"type": "quantitative",
				"title": "Average Ramen Rating",
			},
		},
	};

	vegaEmbed('#brandAvgStarsVis', brandAvgStarsVisSpec, { actions: false });

	numBrandsVisSpec = {
		"$schema": "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
		"description": "",
		"data": {
			"values": avgStarsFromThisBrandArr
		},
		"mark": "bar",
		"encoding": {
			"x": {
				"field": "brand",
				"axis": { "labelAngle": 45 },
				"type": "nominal",
				"title": "Brand of Ramen",
				"sort": "-y"
			},
			"y": {
				"field": "frequency",
				"type": "quantitative",
				"title": "Average Ramen Rating",
			},
		},
	};

	vegaEmbed('#numBrandsVis', numBrandsVisSpec, { actions: false });
	$("#numBrandsVis").hide();

	//Most common noodle flavor

	//Top ramen of each year

}

function showStyleGraph() {
	var x = document.getElementById("styleSwitch");
	x.innerHTML === "Show frequency" ? x.innerHTML = "Show average ramen rating" : x.innerHTML = "Show frequency";
	$("#styleAvgStarsVis").toggle();
	$("#numStylesVis").toggle();
}

function showBrandGraph() {
	var x = document.getElementById("brandSwitch");
	x.innerHTML === "Show frequency" ? x.innerHTML = "Show average ramen rating" : x.innerHTML = "Show frequency";
	$("#brandAvgStarsVis").toggle();
	$("#numBrandsVis").toggle();
}

//Wait for the DOM to load
$(document).ready(function () {
	loadRamenReviewData().then(parseRamenReviews);
});