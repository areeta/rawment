function parseRamenReviews(RAMEN_REVIEWS) {
	//Do not proceed if no tweets loaded
	if (RAMEN_REVIEWS === undefined) {
		window.alert('No ramen reviews returned');
		return;
	}

	ramen_reviews_array = RAMEN_REVIEWS.map(function (ramen_review) {
		return new RamenReview(ramen_review.REVIEW_ID, ramen_review.BRAND, ramen_review.VARIETY, ramen_review.STYLE, ramen_review.COUNTRY, ramen_review.STARS);
	});

	//This line modifies the DOM, searching for the tag with the numberTweets ID and updating the text.
	//It works correctly, your task is to update the text of the other tags in the HTML file!
	$('#numberRamenReviews').text(ramen_reviews_array.length);


}

//Wait for the DOM to load
$(document).ready(function () {
	loadRamenReviewData().then(parseRamenReviews);
});