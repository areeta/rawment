function loadRamenReviewData() {
	return new Promise(function(resolve, reject) {
		var RAMEN_REVIEWS = [
			{
			  "REVIEW_ID": 2580,
			  "BRAND": "New Touch",
			  "VARIETY": "T's Restaurant Tantanmen",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2579,
			  "BRAND": "Just Way",
			  "VARIETY": "Noodles Spicy Hot Sesame Spicy Hot Sesame Guan-miao Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 2578,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Chicken Vegetable",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 2577,
			  "BRAND": "Wei Lih",
			  "VARIETY": "GGE Ramen Snack Tomato Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 2576,
			  "BRAND": "Ching's Secret",
			  "VARIETY": "Singapore Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2575,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Kimchi song Song Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2574,
			  "BRAND": "Acecook",
			  "VARIETY": "Spice Deli Tantan Men With Cilantro",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2573,
			  "BRAND": "Ikeda Shoku",
			  "VARIETY": "Nabeyaki Kitsune Udon",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2572,
			  "BRAND": "Ripe'n'Dry",
			  "VARIETY": "Hokkaido Soy Sauce Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 2571,
			  "BRAND": "KOKA",
			  "VARIETY": "The Original Spicy Stir-Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 2570,
			  "BRAND": "Tao Kae Noi",
			  "VARIETY": "Creamy tom Yum Kung Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2569,
			  "BRAND": "Yamachan",
			  "VARIETY": "Yokohama Tonkotsu Shoyu",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2568,
			  "BRAND": "Nongshim",
			  "VARIETY": "Mr. Bibim Stir-Fried Kimchi Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2567,
			  "BRAND": "Nissin",
			  "VARIETY": "Deka Buto Kimchi Pork Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2566,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Bar Noodle Aka Tonkotsu Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2565,
			  "BRAND": "KOKA",
			  "VARIETY": "Mushroom Flavour Instant Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2564,
			  "BRAND": "TRDP",
			  "VARIETY": "Mario Masala Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2563,
			  "BRAND": "Yamachan",
			  "VARIETY": "Tokyo Shoyu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2562,
			  "BRAND": "Binh Tay",
			  "VARIETY": "Mi Hai Cua",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2561,
			  "BRAND": "Paldo",
			  "VARIETY": "Premium Gomtang",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2560,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Laksa Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2559,
			  "BRAND": "Jackpot Teriyaki",
			  "VARIETY": "Beef Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2558,
			  "BRAND": "KOKA",
			  "VARIETY": "Creamy Soup With Crushed Noodles Hot & Sour Fish Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2557,
			  "BRAND": "Yamachan",
			  "VARIETY": "Sapporo Miso Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2556,
			  "BRAND": "Ching's Secret",
			  "VARIETY": "Hot Garlic Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2555,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Song Song Kimchi Big Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2554,
			  "BRAND": "Yum-Mie",
			  "VARIETY": "Instant Noodles Beef In Light Soup Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Ghana",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2553,
			  "BRAND": "Nissin",
			  "VARIETY": "Hakata Ramen Noodle White Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2552,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang White Curry Rice Vermicelli Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2551,
			  "BRAND": "KOKA",
			  "VARIETY": "Signature Tom Yum Flavor Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2550,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Paegaejang Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2549,
			  "BRAND": "Nissin",
			  "VARIETY": "Gekikara Ramen Extra Hot Ramen Goreng",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2548,
			  "BRAND": "Ottogi",
			  "VARIETY": "Plain Instant Noodle No Soup Included",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": "Unrated"
			},
			{
			  "REVIEW_ID": 2547,
			  "BRAND": "Sichuan Guangyou",
			  "VARIETY": "Chongqing Spicy Hot Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2546,
			  "BRAND": "New Touch",
			  "VARIETY": "Sugo-Men Kyoto Backfat Shoyu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2545,
			  "BRAND": "KOKA",
			  "VARIETY": "Instant Noodles Laksa Singapura Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2544,
			  "BRAND": "Lipton",
			  "VARIETY": "Cup-A-Soup Chicken Noodle With White Meat Instant Soup",
			  "STYLE": "Box",
			  "COUNTRY": "USA",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 2543,
			  "BRAND": "KOKA",
			  "VARIETY": "Curry Flavour Instant Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2542,
			  "BRAND": "Acecook",
			  "VARIETY": "Super Cup Yochan Ika Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 2541,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Very Veggie Spicy Chicken Flavor Ramen Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2540,
			  "BRAND": "Wei Lih",
			  "VARIETY": "GGE Noodle Snack Wheat Crackers Mexican Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2539,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Tonkotsu Flavour Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2538,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Very Veggie Beef Flavor Ramen Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2537,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup NoodlesTom Yam Seafood (More Shrimptacular)",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2536,
			  "BRAND": "Lele",
			  "VARIETY": "Instant Noodles Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Ghana",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2535,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Very Veggie Chicken Flavor Ramen Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2534,
			  "BRAND": "Fujiwara",
			  "VARIETY": "Hokkaido Hakodate Shoyu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2533,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun Black",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2532,
			  "BRAND": "Nissin",
			  "VARIETY": "Nippon Onomichi Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2531,
			  "BRAND": "Uni-President",
			  "VARIETY": "Pickled Cabbage Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2530,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ppushu Ppushu Noodle Snack Honey Butter",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2529,
			  "BRAND": "Maruchan",
			  "VARIETY": "Gotsumori Chanpon Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2528,
			  "BRAND": "Prima",
			  "VARIETY": "Juzz's Mee Creamy Chicken Flavour (Export Version)",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2527,
			  "BRAND": "Uni-President",
			  "VARIETY": "Mushroom Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 2526,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Jjamppong Big Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2525,
			  "BRAND": "Sokensha",
			  "VARIETY": "Curry Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2524,
			  "BRAND": "Nissin",
			  "VARIETY": "Straits Reborn Laksa",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2523,
			  "BRAND": "Nongshim",
			  "VARIETY": "Budae Jjigae Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2522,
			  "BRAND": "Takamori",
			  "VARIETY": "Hearty Japanese Style Curry Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2521,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Potato Chips Black Pepper Crab Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2520,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Blacl Pepper Crab Flavour (More Angry Crab)",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2519,
			  "BRAND": "Guava Story",
			  "VARIETY": "Anchovy Flavor Guava Rice Noodles",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 2518,
			  "BRAND": "Samurai Ramen",
			  "VARIETY": "Umami Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2517,
			  "BRAND": "Ikeda Shoku",
			  "VARIETY": "Nabeyaki Tempura Udoin",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2516,
			  "BRAND": "Fujiwara",
			  "VARIETY": "Hokkaido Hakodate Miso Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2515,
			  "BRAND": "Uni-President",
			  "VARIETY": "Man Han Feast Spicy Beef Flavor Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2514,
			  "BRAND": "Ogasawara",
			  "VARIETY": "Kirin Giraffe Shoyu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2513,
			  "BRAND": "Pringles",
			  "VARIETY": "Nissin Top Ramen Chicken Flavor Potato Crisps",
			  "STYLE": "Can",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2512,
			  "BRAND": "Mom's Dry Noodle",
			  "VARIETY": "Dan Dan Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2511,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Samyang Ramen Classic Edition",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2510,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Red Tom Yum Goong Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2509,
			  "BRAND": "Maggi",
			  "VARIETY": "Hot Heads Green Chilli Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2508,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Mala Buldak Bokkeummyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2507,
			  "BRAND": "Indomie",
			  "VARIETY": "RMy Noodlez Rumput Laut",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2506,
			  "BRAND": "KOKA",
			  "VARIETY": "Delight Chicken Flavor Instant Non-Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2505,
			  "BRAND": "Acecook",
			  "VARIETY": "Super Cup Torigawa Shoyu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2504,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2503,
			  "BRAND": "Sichuan Guangyou",
			  "VARIETY": "Sweet Potato Instant Noodle Sout-Hot Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 2502,
			  "BRAND": "Indomie",
			  "VARIETY": "Onion Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Nigeria",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 2501,
			  "BRAND": "Happy Cook",
			  "VARIETY": "Toona Paste Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2500,
			  "BRAND": "The Ramen Rater Select",
			  "VARIETY": "Supreme Creamy Tom Yum Noodle",
			  "STYLE": "Box",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2499,
			  "BRAND": "KOKA",
			  "VARIETY": "Creamy Soup With Crushed Noodles Chicken Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2498,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2497,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Spicy",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2496,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Thai",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2495,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Huhn (Chicken)",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2494,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Korean Kimchi",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2493,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Curry",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2492,
			  "BRAND": "Nissin",
			  "VARIETY": "Smack Chili",
			  "STYLE": "Pack",
			  "COUNTRY": "Hungary",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2491,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Yakitori Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2490,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Garlic Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2489,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Ente (Duck)",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2488,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Thai Tom Yum",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2487,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Sukiyaki Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2486,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2485,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Shrimps",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2484,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Tokyo Soy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2483,
			  "BRAND": "Paldo",
			  "VARIETY": "Bul Jjamppong",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2482,
			  "BRAND": "TTL",
			  "VARIETY": "Chicken With Chinese Shaoxing Wine",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2481,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Buldak Bokkeummyun",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2480,
			  "BRAND": "Acecook",
			  "VARIETY": "Pork Wantan Men",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2479,
			  "BRAND": "E-Zee",
			  "VARIETY": "Instant Noodles Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2478,
			  "BRAND": "Kiki Noodle",
			  "VARIETY": "Scallion Oil & Soy Sauce Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2477,
			  "BRAND": "Kiki Noodle",
			  "VARIETY": "Sichuan Spices Flavor Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2476,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Kimchi Stew Ramyun",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2475,
			  "BRAND": "Maruchan",
			  "VARIETY": "Seimen Red Spicy Dandan Men",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2474,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ppushu Ppushu Noodle Snack Chilli Cheese Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2473,
			  "BRAND": "Tokyo Noodle",
			  "VARIETY": "Mini Instant Noodle Mild Curry Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2472,
			  "BRAND": "GGE",
			  "VARIETY": "Noodle Snack Wheat Cracks Seaweed Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2471,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Mini Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2470,
			  "BRAND": "Myojo",
			  "VARIETY": "Udon Japanese Style Noodles With Soup Base Hot & Sour Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2469,
			  "BRAND": "KOKA",
			  "VARIETY": "Signature Curry Flavor Instant Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2468,
			  "BRAND": "Acecook",
			  "VARIETY": "Dossari Yasai Chanpon",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2467,
			  "BRAND": "Paldo",
			  "VARIETY": "Volcano Curry Kkokkomyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2466,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Instant Noodle King Pepper Duck Flavour Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2465,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles XO Sauce Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2464,
			  "BRAND": "Wang",
			  "VARIETY": "Extreme Spicy Hot Chicken Flavor Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2463,
			  "BRAND": "Nissin",
			  "VARIETY": "Gekikara Ramen Rasa Pedas",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2462,
			  "BRAND": "TTL",
			  "VARIETY": "Sesame Oil Chicken Noodle With Rice Wine",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2461,
			  "BRAND": "Fujiwara",
			  "VARIETY": "Hokkaido Hakodate Shio Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2460,
			  "BRAND": "Daifuku",
			  "VARIETY": "Katsuo Bowl Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2459,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles MUG Shoyu & Seafood",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2458,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Sari Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": "Unrated"
			},
			{
			  "REVIEW_ID": 2457,
			  "BRAND": "KOKA",
			  "VARIETY": "Instant Noodles Chicken Satay Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2456,
			  "BRAND": "KOKA",
			  "VARIETY": "Signature Spicy Singapore Fried Noodles Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2455,
			  "BRAND": "KOKA",
			  "VARIETY": "Creamy Soup With Crushed Noodles Sweet Corn Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2454,
			  "BRAND": "KOKA",
			  "VARIETY": "Silk Beef Pho Flavor Instant Rice Fettuccine",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2453,
			  "BRAND": "KOKA",
			  "VARIETY": "Delight Spicy Sesame Flavor Instant Non-Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2452,
			  "BRAND": "KOKA",
			  "VARIETY": "Signature Laksa Singapura Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2451,
			  "BRAND": "KOKA",
			  "VARIETY": "Delight Spicy Black Pepper Flavor Instant Non-Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2450,
			  "BRAND": "KOKA",
			  "VARIETY": "Purple Wheat Noodles Chili & Lime Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2449,
			  "BRAND": "KOKA",
			  "VARIETY": "Delight Tomato Flavor Instant Non-Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2448,
			  "BRAND": "KOKA",
			  "VARIETY": "Seafood Flavor Instant Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2447,
			  "BRAND": "KOKA",
			  "VARIETY": "Signature Stir-Fry Original Flavor Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2446,
			  "BRAND": "KOKA",
			  "VARIETY": "Creamy Soup Witrh Crushed Noodles Curry Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2445,
			  "BRAND": "KOKA",
			  "VARIETY": "Delight Laksa Singapura Flavor Instant Non-Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2444,
			  "BRAND": "KOKA",
			  "VARIETY": "Silk Spicy Marinara Instant Rice Fettuccine",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2443,
			  "BRAND": "KOKA",
			  "VARIETY": "Signature Chicken Flavor Instant Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2442,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sopa Nissin Hot Sauce Con Camaron",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2441,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Hokkien Prawn Flavor Noodle",
			  "STYLE": "Box",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2440,
			  "BRAND": "Master Kong",
			  "VARIETY": "Roasted Pork Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2439,
			  "BRAND": "Uni-President",
			  "VARIETY": "Man Han Feast Super Hot Pot Beef Flavor Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2438,
			  "BRAND": "World O' Noodle",
			  "VARIETY": "Mi Goreng Original Flavour Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2437,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Nojyuku Toro Tonkotsu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2436,
			  "BRAND": "Kang Shi Fu",
			  "VARIETY": "Artificial Dongpo's Braised Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2435,
			  "BRAND": "Mum Ngon",
			  "VARIETY": "Lau Tom Chua Cay",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2434,
			  "BRAND": "Happy Cook",
			  "VARIETY": "Old Beijing Fried Bean Sauce Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2433,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Indonesia Mie Goreng",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2432,
			  "BRAND": "Fashion Food",
			  "VARIETY": "Yummy Spicy Rice Soup With Seafood",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2431,
			  "BRAND": "Dream Kitchen",
			  "VARIETY": "Udon Japanese Style Fresh Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2430,
			  "BRAND": "MyKuali",
			  "VARIETY": "MeeKuali Bihun Sup Rempah Perisa Daging",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2429,
			  "BRAND": "New Touch",
			  "VARIETY": "T's Restaurant Sura Tanmen",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2428,
			  "BRAND": "TTL",
			  "VARIETY": "Sesame Oil Chicken With Rice Wine Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2427,
			  "BRAND": "Ajinatori",
			  "VARIETY": "HALAL Chicken Shoyu Sauce Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 2426,
			  "BRAND": "Dr. McDougall's",
			  "VARIETY": "Vegan Pad Thai Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 2425,
			  "BRAND": "Nissin",
			  "VARIETY": "Seafood Flavour Rice Vermicelli",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2424,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Cheese Type Buldak Bokkeummyun (Black Pkg)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2423,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung-Fu Instant Oriental Noodles Soup Artificial Onion Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2422,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sopa Nissin Con Camaron Picante",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2421,
			  "BRAND": "Uni-President",
			  "VARIETY": "Baseball Snack Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2420,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Spicy Seafood Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2419,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Red Tom Yum Goong",
			  "STYLE": "Box",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2418,
			  "BRAND": "Myojo",
			  "VARIETY": "Yomise No Yakisoba Karashi Mentaiko Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2417,
			  "BRAND": "Super Bihun",
			  "VARIETY": "Bihun Kuah Rasa Baso Sapi",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2416,
			  "BRAND": "Xiuhe",
			  "VARIETY": "Hot & Sour Beef Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2415,
			  "BRAND": "Nissin",
			  "VARIETY": "Kitsune Udon Donbei (West)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2414,
			  "BRAND": "Little Cook",
			  "VARIETY": "Thailand Green Curry Instant Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2413,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 2412,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Sanukiya Udon Shrimp Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2411,
			  "BRAND": "Mama Pat's",
			  "VARIETY": "Chicken Fajita Flavor Instant Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2410,
			  "BRAND": "Mama Pat's",
			  "VARIETY": "Lamb Stew Flavor Instant Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2409,
			  "BRAND": "Mama Pat's",
			  "VARIETY": "Seafood Gumbo Flavor Instant Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2408,
			  "BRAND": "Mama Pat's",
			  "VARIETY": "Chicken Taco Flavor Instant Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2407,
			  "BRAND": "Just Way",
			  "VARIETY": "Chuan Wei Spicy Guan-miao Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2406,
			  "BRAND": "Sichuan Guangyou",
			  "VARIETY": "Sweet Potato Instant Noodle Braised Spicy Chitterling Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 2405,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Mini Spicy Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2404,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Hokkien Prawn Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2403,
			  "BRAND": "Goku-Uma",
			  "VARIETY": "Yakisoba Japanese Style Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2402,
			  "BRAND": "Maggi",
			  "VARIETY": "Nutri-licious Pazzta Tomato Twist",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2401,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Chongqing Noodles Burning Dry Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2400,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Tom Yam Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2399,
			  "BRAND": "Indomie",
			  "VARIETY": "My Noodles Mi Goreng Pizza Cheese",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2398,
			  "BRAND": "Liang Cheng Mai",
			  "VARIETY": "Shaanxi Cold Noodle: Mustard Spicy",
			  "STYLE": "Tray",
			  "COUNTRY": "China",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 2397,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Cheese Buldak Bokkeummyun (Black)",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2396,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Fiji",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2395,
			  "BRAND": "Master Kong",
			  "VARIETY": "Chicken Flavor Instant Noolde",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2394,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Prawn Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2393,
			  "BRAND": "Ripe'n'Dry",
			  "VARIETY": "Hokkaido Miso Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2392,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Red Tom Yum Goong Rice Vermicelli Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2391,
			  "BRAND": "Ottogi",
			  "VARIETY": "Jin Jjambbong Spicy Seafood Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2390,
			  "BRAND": "Nissin",
			  "VARIETY": "Rice Vermicelli Pickled Vegetable Pork Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2389,
			  "BRAND": "Gefen",
			  "VARIETY": "Imitation Chicken Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2388,
			  "BRAND": "Hua Feng",
			  "VARIETY": "Three Fresh Delicacies Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2387,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Sesame Oil Flavour Instant Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2386,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Fiji",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2385,
			  "BRAND": "Uni-President",
			  "VARIETY": "Man Han Feast Chilli Beef Flavor Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2384,
			  "BRAND": "Sichuan Guangyou",
			  "VARIETY": "9999 Chongqing Artificial Beef Flavor Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2383,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Beef Flavor Ramen Noodle Soup (New Recipe)",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2382,
			  "BRAND": "Nongshim",
			  "VARIETY": "Seaweed Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 2381,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Seafood Flavour Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2380,
			  "BRAND": "Pulmuone",
			  "VARIETY": "Non-Fried Ramyun With Spicy Beef Broth",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2379,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Hot & Spicy Shrimp Flavor Ramen Noodle Soup (New Recipe)",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 2378,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Non-Fried Mix Noodle Black Pepper XO Sauce Flavoured",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2377,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang White Curry Instant Noodle (Japan Version)",
			  "STYLE": "Box",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2376,
			  "BRAND": "Nissin",
			  "VARIETY": "Disney Cuties Instant Chicken With Corn Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2375,
			  "BRAND": "Uni-President",
			  "VARIETY": "Man Han Feast Braised Pork Flavor Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2374,
			  "BRAND": "World O' Noodle",
			  "VARIETY": "Mi Goreng Garlic Flavour Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2373,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Atta Nooldes Masala",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2372,
			  "BRAND": "Liu Quan",
			  "VARIETY": "Instant Spicy Rice Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2371,
			  "BRAND": "Daikoku",
			  "VARIETY": "Tanuki Soba",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2370,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Zzaldduck Buldak Bokkeummyun Snack",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2369,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Curry Buldak Bokkeummyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2368,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Cool/Ice Buldak Bokkeummyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2367,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "2x Spicy Haek Buldak Bokkeummyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2366,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Buldak Bokkeummyun Snack",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2365,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Stew Buldak Bokkeumtangmyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2364,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Cheese Buldak Bokkeummyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2363,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Buldak Bokkeummyun (New Packaging)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2362,
			  "BRAND": "Chuan Wei Wang",
			  "VARIETY": "Bowl Instant Noodles Artificial Spicy Beef Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2361,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Chicken Flavour Instant Noodle (Bowl Noodle)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2360,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Instant Noodles Artificial Chicken Flavoured",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2359,
			  "BRAND": "Daikoku",
			  "VARIETY": "Kitsune Udon",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2358,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Pickled Cabbage Flavor Instant Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2357,
			  "BRAND": "Kamfen",
			  "VARIETY": "Noodle King Artificial Wonton Soup Flavored",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2356,
			  "BRAND": "Nongshim",
			  "VARIETY": "Spicy Shrimp Cup Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2355,
			  "BRAND": "Marutai",
			  "VARIETY": "Nagasaki Agodashi Shoyu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2354,
			  "BRAND": "Vifon",
			  "VARIETY": "Viet Cuisine Bun Rieu Cua Sour Crab Soup Instant Rice Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2353,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Rich Garlic, Egg Yolk & Oxtail",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2352,
			  "BRAND": "Uni-President",
			  "VARIETY": "Minced Pork Flavor Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 2351,
			  "BRAND": "1 To 3 Noodles",
			  "VARIETY": "Chatpat Masala",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2350,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles BIG XO Sauce Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2349,
			  "BRAND": "Fantastic",
			  "VARIETY": "Noodles Chicken & Corn Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2348,
			  "BRAND": "Ripe'n'Dry",
			  "VARIETY": "Hokkaido Salt Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2347,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Tonkotsu Flavour Instant Noodle (Bowl Noodle)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2346,
			  "BRAND": "Knorr",
			  "VARIETY": "Chatt Patta Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Pakistan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 2345,
			  "BRAND": "Sempio",
			  "VARIETY": "Clam Flavor Soup Kal-guksu",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2344,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sopa Nissin Sabor A Pollo",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2343,
			  "BRAND": "Nissin",
			  "VARIETY": "Maxi Sopa Nissin Cuchareable Sabor A Jugo De Carne",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2342,
			  "BRAND": "Nissin",
			  "VARIETY": "Sopa Nissin Sabor A Camaron Sopa Instantanea Tipo Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2341,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sopa Nissin Sabor A Carne De Res",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2340,
			  "BRAND": "Nissin",
			  "VARIETY": "RapiFideo Sabor A Tomate Y Pollo",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2339,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sopa Nissin Sabor Camaron, Habanero Y Limon",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2338,
			  "BRAND": "Nissin",
			  "VARIETY": "Sopa Nissin Sabor A Pollo Sopa Instantanea Tipo Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2337,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sopa Nissin Con Camaron",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2336,
			  "BRAND": "Nissin",
			  "VARIETY": "Maxi Sopa Nissin Cuchareable Sabor A Camaron Picante",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2335,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Gourmet Sabor A Caldo De Camaron",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2334,
			  "BRAND": "Nissin",
			  "VARIETY": "Sopa Nissin Sabor Mariscos, Habanero Y Limon",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2333,
			  "BRAND": "Nissin",
			  "VARIETY": "Maxi Sopa Nissin Cuchareable Sabor A Pollo",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2332,
			  "BRAND": "Nissin",
			  "VARIETY": "Sopa Nissin Sabor A Res Instantanea Tipo Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2331,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sopa Nissin Hot Sauce Sabor A Pollo",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2330,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Little Prince(ss) Brand Snack Noodles Artificial Mexican Pizza Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2329,
			  "BRAND": "Patanjali",
			  "VARIETY": "Atta Noodles Jhatpat Banao Befikr Khao",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2328,
			  "BRAND": "Qin Zong",
			  "VARIETY": "Shaanxi Cold Noot Hot & Sour Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2327,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Spicy Lime Flavor Ramen Noodle Soup (New Recipe)",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2326,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Tokyo Shoru Tonkotsu Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2325,
			  "BRAND": "Pran",
			  "VARIETY": "Mr. Noodles Curry Flavor Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Bangladesh",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2324,
			  "BRAND": "Paldo",
			  "VARIETY": "Bul Jjajangmyeon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2323,
			  "BRAND": "Ogasawara",
			  "VARIETY": "Kirin Giraffe Shio Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2322,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Mie Kamayama Ramen Gyukotsu Misoaji",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2321,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Black Pepper XO Sauce Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2320,
			  "BRAND": "Nissin",
			  "VARIETY": "Nupasta Bolognese Flavour Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2319,
			  "BRAND": "Nongshim",
			  "VARIETY": "Saeutang Sabalmyeon",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2318,
			  "BRAND": "Happy Cook",
			  "VARIETY": "Sichuan Spicy Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2317,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Bowl Noodles Shrimp (Tom Yum) Flavor Base",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2316,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Spicy Curry Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2315,
			  "BRAND": "Goku-Uma",
			  "VARIETY": "Ramen Noodles Miso Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2314,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Spicy Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2313,
			  "BRAND": "Xiao Ban Mian",
			  "VARIETY": "Sesame Oil With Garlic Flavor Thin Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2312,
			  "BRAND": "Xiao Ban Mian",
			  "VARIETY": "Traditional Shallot & Onion Oil Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2311,
			  "BRAND": "Xiao Ban Mian",
			  "VARIETY": "Sesame Sauce Matcha Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.8
			},
			{
			  "REVIEW_ID": 2310,
			  "BRAND": "Pran",
			  "VARIETY": "Mr. Noodles Instant Noodles Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Bangladesh",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2309,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Big Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2308,
			  "BRAND": "Fantastic",
			  "VARIETY": "Noodles Chicken Chow Mein Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2307,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ramyun Sabor Pollo",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2306,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Black Garlic Oil Tonkotsu Flavour Instant Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2305,
			  "BRAND": "Ajinatori",
			  "VARIETY": "Chicken Flavor Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2304,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Masala Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2303,
			  "BRAND": "Maruchan",
			  "VARIETY": "Sopa Maruchan Sobar A Camaron",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2302,
			  "BRAND": "Nissin",
			  "VARIETY": "Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2301,
			  "BRAND": "Suimin",
			  "VARIETY": "Noodle With Oriental Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2300,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Spicy Xo Sauce Seafood Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2299,
			  "BRAND": "Cintan",
			  "VARIETY": "Mi Segera Mmm... Original",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2298,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Spicy Chile Chicken (New Recipe)",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2297,
			  "BRAND": "Chuan Wei Wang",
			  "VARIETY": "Bowl Instant Noodles Artificial Beef With Sauerkraut Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2296,
			  "BRAND": "Suimin",
			  "VARIETY": "Noodles With Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2295,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2294,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Tabimen AizuKitakata Gyokai Shoyu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2293,
			  "BRAND": "Nissin",
			  "VARIETY": "Nupasta Bacon In Carbonara Sauce Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2292,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Chongqing Noodles Spicy Hot Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2291,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Buldak Bokkummyun Cheese Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2290,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Straight Noodle Black Garlic Oil Tonkotsu Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2289,
			  "BRAND": "Myojo",
			  "VARIETY": "Shin Toyama Black Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2288,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Tom Yum Goong Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2287,
			  "BRAND": "Master Kong",
			  "VARIETY": "Artificial Abalone Crab Flavor Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 2286,
			  "BRAND": "Kamfen",
			  "VARIETY": "Noodle King Artificial Abalone And Chicken Soup Flavored",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2285,
			  "BRAND": "Fantastic",
			  "VARIETY": "Noodles Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2284,
			  "BRAND": "Nissin",
			  "VARIETY": "Korean Kimchi Flavour Vermicelli",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2283,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Pork Bone Soy Soup Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2282,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Gold Jjamppong Fried Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2281,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Red Hot Seafood Flavour Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2280,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Chongqing Noodles Hot & Sour Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2279,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Spicy Tonkotsu Flavour Instant Noodle (Bowl Noodle)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2278,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Tantanmen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2277,
			  "BRAND": "Goku-Uma",
			  "VARIETY": "Ramen Noodles Soy Sauce Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2276,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles With Shrimp Ramen Noodle Soup (New Recipe)",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2275,
			  "BRAND": "JML",
			  "VARIETY": "Hot & Sour Beef Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2274,
			  "BRAND": "Suimin",
			  "VARIETY": "Noodles With Braised Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2273,
			  "BRAND": "Uni-President",
			  "VARIETY": "A Q Bucket Noodle Korean Kimchi Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2272,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Spicy Kimchi Pot Flavour Instant Noodle (Bowl Noodle)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2271,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Chongqing Noodles Burning Dry Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2270,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Fresh Bibimmyun Fried Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2269,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Instant Noodles Veg Masala Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2268,
			  "BRAND": "Nissin",
			  "VARIETY": "Nupasta Neapolitan Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2267,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Karami Ramen Spicy Chili Flavour Japanese Style Noodle With Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2266,
			  "BRAND": "Nissin",
			  "VARIETY": "Disney Cuties Instant Noodle Crab Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2265,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Rich Soft Shelled Turle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2264,
			  "BRAND": "Unif Tung-I",
			  "VARIETY": "Instant Vegetarian Beehoon Rice Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 2263,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Broad Noodle Artificial Beef Flavor Hot Pot",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2262,
			  "BRAND": "Dream Kitchen",
			  "VARIETY": "Curry Flavour Instant Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2261,
			  "BRAND": "Tablemark",
			  "VARIETY": "Tohokuno Aji Yonezawa Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2260,
			  "BRAND": "Uni-President",
			  "VARIETY": "Science Noodle (X'Mas Edition)",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2259,
			  "BRAND": "Farmer's Heart",
			  "VARIETY": "Pho Beef Flavor Vietnamese Rice Noodle Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2258,
			  "BRAND": "Kamfen",
			  "VARIETY": "Instant Wonton Noodles Scallop Lobster Soup Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.3
			},
			{
			  "REVIEW_ID": 2257,
			  "BRAND": "Fuku",
			  "VARIETY": "Tom Yam Soup Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.3
			},
			{
			  "REVIEW_ID": 2256,
			  "BRAND": "Goku-Uma",
			  "VARIETY": "Ramen Noodles Artificially Flavored Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2255,
			  "BRAND": "Daikoku",
			  "VARIETY": "Hiroshima Flavor Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2254,
			  "BRAND": "Nissin",
			  "VARIETY": "Disney Cuties Instant Noodle Seaweed Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2253,
			  "BRAND": "Singa-Me",
			  "VARIETY": "Instant Noodles Mi Goreng Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2252,
			  "BRAND": "New Touch",
			  "VARIETY": "Sugomen Sano Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2251,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ramyon Sabor Y Camaron",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2250,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Spicy XO Sauce Seafood Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2249,
			  "BRAND": "Love Cook",
			  "VARIETY": "Sun Dried Noodle - Fruity Soy Bean Paste",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2248,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2247,
			  "BRAND": "Nissin",
			  "VARIETY": "Sapporo Noukou Miso Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2246,
			  "BRAND": "Dream Kitchen",
			  "VARIETY": "Soy Sauce",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2245,
			  "BRAND": "Nissin",
			  "VARIETY": "Vietnamese Chicken Coriander Flavour Vermicelli",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2244,
			  "BRAND": "Kang Shi Fu",
			  "VARIETY": "Artificial Spicy Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2243,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Black Pepper Crab Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2242,
			  "BRAND": "Great Value",
			  "VARIETY": "Beef Style Noodles With Vegetables",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2241,
			  "BRAND": "Fuku",
			  "VARIETY": "Spicy Soup Instant Noodle Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2240,
			  "BRAND": "Wang",
			  "VARIETY": "Rice Noodle Anchovy Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2239,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Chicken Flavor Ramen Noodle Soup (New Recipe)",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2238,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Rumpum Gundruk Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 2237,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Light+ Bagna Cauda",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2236,
			  "BRAND": "Maruchan",
			  "VARIETY": "Gotsumori Koku Tonkotsu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2235,
			  "BRAND": "Fashion Food",
			  "VARIETY": "Tom Yum Shrimp Creamy Flavour Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2234,
			  "BRAND": "Paldo",
			  "VARIETY": "Bibim Men",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2233,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Milk Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2232,
			  "BRAND": "Nissin",
			  "VARIETY": "Spicy Chikin Donburi",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2231,
			  "BRAND": "Fantastic",
			  "VARIETY": "Noodle Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2230,
			  "BRAND": "Marutai",
			  "VARIETY": "Kuroma-Yu Tonkotsu Kumamoto Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2229,
			  "BRAND": "Kang Shi Fu",
			  "VARIETY": "Artificial Beef With Sauerkraut Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2228,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Shoyu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2227,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Sriracha Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2226,
			  "BRAND": "Nagatanien",
			  "VARIETY": "Hiyashi Soba Taidashi Goma",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2225,
			  "BRAND": "Fuku",
			  "VARIETY": "Bowl Chicken Flavour Instant Rice Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2224,
			  "BRAND": "Wai Wai",
			  "VARIETY": "X-Press Flavour Of Pizza In Noodles Proprietary Food",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2223,
			  "BRAND": "KOKA",
			  "VARIETY": "Rice Noodles Fragrant Chicken Pho Ga Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2222,
			  "BRAND": "Nyor Nyar",
			  "VARIETY": "Vegetarian Penang White Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2221,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2220,
			  "BRAND": "Paldo",
			  "VARIETY": "Budae Jjigae",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2219,
			  "BRAND": "Fantastic",
			  "VARIETY": "Noodles Crispy Bacon Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 2218,
			  "BRAND": "Tseng Noodles",
			  "VARIETY": "Spicy Braised Pork Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2217,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Spicy Seafood Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2216,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Chow Mein Spicy Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "Taiwan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2215,
			  "BRAND": "Myojo",
			  "VARIETY": "Mee Goreng Spicy Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2214,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Tabimen Nagasaki Chanpon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2213,
			  "BRAND": "Acecook",
			  "VARIETY": "Oh! Ricey Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2212,
			  "BRAND": "Paldo",
			  "VARIETY": "Bul Jjamppong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2211,
			  "BRAND": "Nissin",
			  "VARIETY": "Disney Cuties Instant Noodle Roast Pork Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2210,
			  "BRAND": "Morre",
			  "VARIETY": "Instant Noodles Masala",
			  "STYLE": "Pack",
			  "COUNTRY": "Pakistan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2209,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Spicy Hot tonkotsu Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2208,
			  "BRAND": "Roland",
			  "VARIETY": "Ramen Japanese Style Quick-Cooking Alimentary Paste With Chicken Artificially Flavored Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 2207,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Tonkotsu Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2206,
			  "BRAND": "Nissin",
			  "VARIETY": "Deka Buto Kuro M-yu Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2205,
			  "BRAND": "Maruchan",
			  "VARIETY": "Bowl Taste Of Asia Hearty Pork Flavor Tonkotsu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2204,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sabor Galinha Caipira",
			  "STYLE": "Cup",
			  "COUNTRY": "Brazil",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2203,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Soup Independence Day Limited Edition Spicy Chicken Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2202,
			  "BRAND": "Nissin",
			  "VARIETY": "Nupasta Vongole Flavour Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2201,
			  "BRAND": "Mr. Lee's Noodles",
			  "VARIETY": "Penang Chicken Curry Laksa",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2200,
			  "BRAND": "Mr. Lee's Noodles",
			  "VARIETY": "Shaolin Monk Vegetables",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2199,
			  "BRAND": "Mr. Lee's Noodles",
			  "VARIETY": "Tai Chi Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2198,
			  "BRAND": "Mr. Lee's Noodles",
			  "VARIETY": "Dragon Fire Mushroom",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2197,
			  "BRAND": "Mr. Lee's Noodles",
			  "VARIETY": "Hong Kong Street Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2196,
			  "BRAND": "Mr. Lee's Noodles",
			  "VARIETY": "Warrior Fighting Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3.3
			},
			{
			  "REVIEW_ID": 2195,
			  "BRAND": "Nissin",
			  "VARIETY": "Gyorai Inaniwa Chuka Soba",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2194,
			  "BRAND": "Fuku",
			  "VARIETY": "Chicken Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2193,
			  "BRAND": "Knorr",
			  "VARIETY": "Chicken Flavored Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Pakistan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2192,
			  "BRAND": "Nyor Nyar",
			  "VARIETY": "Penang White Curry Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2191,
			  "BRAND": "Choumama",
			  "VARIETY": "XO Scallops Sauce Dry Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2190,
			  "BRAND": "Myojo",
			  "VARIETY": "Barikata Noukou Tonkotsu Shoyu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2189,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Sesame Oil Flavour Cup",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2188,
			  "BRAND": "Singa-Me",
			  "VARIETY": "Instant Noodles Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 2187,
			  "BRAND": "Pulmuone",
			  "VARIETY": "Non-Fried Ramyun Noodle (Crab Flavor)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2186,
			  "BRAND": "Master Kong",
			  "VARIETY": "Assorted Seafood Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2185,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Hot & Sour Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2184,
			  "BRAND": "President Rice",
			  "VARIETY": "Coriander Instant Rice Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 2183,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Rice Noodles Moo Nam Tok Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2182,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Rice Vermicelli Clear Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2181,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Rice Noodles Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2180,
			  "BRAND": "MAMA",
			  "VARIETY": "Pho Ga Rice Noodles With Artificial Chicken Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2179,
			  "BRAND": "MAMA",
			  "VARIETY": "Oriental Kitchen Instant Rice Vermicelli In Gravy",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2178,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Tom Yam Rice Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2177,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Rice Noodles Vegetable Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2176,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Rice Vermicelli Yentafo Tom Yam Mohfai",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2175,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Flat Noodles Clear Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2174,
			  "BRAND": "MAMA",
			  "VARIETY": "Cup Rice Noodles Tom Saab Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2173,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Rice Noodles Stew Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2172,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Rice Noodles Phnom Penh Style",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2171,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Flat Noodles Tom Yam Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2170,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle soup Mushroom Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2169,
			  "BRAND": "Happy Family",
			  "VARIETY": "Vegetable Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2168,
			  "BRAND": "Tseng Noodles",
			  "VARIETY": "Rice Noodle Shallot With Braised Pork Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2167,
			  "BRAND": "Great Value",
			  "VARIETY": "Vegetable Flavour Noodles With Vegetables",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2166,
			  "BRAND": "JML",
			  "VARIETY": "Instant Noodle Artificial Beef Flavor 7 sour Pickled Cabbage",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2165,
			  "BRAND": "Suimin",
			  "VARIETY": "Noodles With Hot & Spicy Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2164,
			  "BRAND": "Tseng Noodles",
			  "VARIETY": "Rice Noodle Chinese Mushroom With Soybean Vegetarian Braised Pork Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2163,
			  "BRAND": "Nissin",
			  "VARIETY": "Piritto Karakuchi Tantan Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2162,
			  "BRAND": "Tseng Noodles",
			  "VARIETY": "Rice Noodle Seafood Laksa Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2161,
			  "BRAND": "Nongshim",
			  "VARIETY": "Chal Bibim Myun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2160,
			  "BRAND": "Menraku",
			  "VARIETY": "Japanese Yakisoba Umami Sauce",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2159,
			  "BRAND": "La Moderna",
			  "VARIETY": "Sazon Casero Sopa Con Tomate Y Sabor Pollo",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2158,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Chow Mein Original Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2157,
			  "BRAND": "Master Kong",
			  "VARIETY": "Artificial Mushroom Chicken Flavor Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2156,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Chow Mein Oyster Sauce BBQ Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "Taiwan",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2155,
			  "BRAND": "Jingqi",
			  "VARIETY": "Aloe Vera Guan Mian Purple Sweet Potato Noodle With Spicy Miso Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2154,
			  "BRAND": "Jingqi",
			  "VARIETY": "Black Eyes Bean Original Noodle With Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2153,
			  "BRAND": "Jingqi",
			  "VARIETY": "Aloe Vera Guan Mian Pumpkin Noodle With Basil Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2152,
			  "BRAND": "Jingqi",
			  "VARIETY": "Black Eyes Bean Cyanobacteria Noodle With Ginger Oil Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2151,
			  "BRAND": "Jingqi",
			  "VARIETY": "Aloe Vera Guan Mian Original Noodle With Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2150,
			  "BRAND": "Jingqi",
			  "VARIETY": "Black Eyes Bean Purple Sweet Potato Noodle With Spicy Miso Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2149,
			  "BRAND": "Jingqi",
			  "VARIETY": "Aloe Vera Guan Mian Cyanobacteria Noodle With Ginger Oil Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2148,
			  "BRAND": "Jingqi",
			  "VARIETY": "Black Eyes Bean Pumpkin Noodles With Basil Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2147,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Pork Flavor Ramen Noodles With Vegetables",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2146,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Kun Ramen Sumo-kuchikin (Smoked Chicken)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2145,
			  "BRAND": "Dream Kitchen",
			  "VARIETY": "Tonkotsu",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2144,
			  "BRAND": "Nissin",
			  "VARIETY": "Lamen Sabor Picanha",
			  "STYLE": "Pack",
			  "COUNTRY": "Brazil",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2143,
			  "BRAND": "Thien Houng Foods",
			  "VARIETY": "Lemon Chicken Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2142,
			  "BRAND": "Maruchan",
			  "VARIETY": "Bowl Taste Of Asia Miso Chicken Flavor Spicy Miso Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2141,
			  "BRAND": "Nissin",
			  "VARIETY": "Men Shokunin Kaoruyasai Shio",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2140,
			  "BRAND": "Wang",
			  "VARIETY": "Rice Noodle Seafood Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2139,
			  "BRAND": "Fuku",
			  "VARIETY": "Superior Soup Instant Noodles (Mfg in Thailand)",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2138,
			  "BRAND": "Fuku",
			  "VARIETY": "Superior Soup Instant Noodles (Mfg in Vietnam)",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2137,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Spicy Curry Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2136,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Roast Beef Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2135,
			  "BRAND": "Doll",
			  "VARIETY": "Instant Noodle Supreme Abalone And Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2134,
			  "BRAND": "Four Seas",
			  "VARIETY": "Chicken Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2133,
			  "BRAND": "Nissin",
			  "VARIETY": "Kimchi Chikin Ramen Donburi",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2132,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Chipotle Chicken Flavor Ramen Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2131,
			  "BRAND": "Myojo",
			  "VARIETY": "Mee Goreng Thai Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2130,
			  "BRAND": "Kang Shi Fu",
			  "VARIETY": "Artificial Salted Beef With Mushrooms Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2129,
			  "BRAND": "CarJEN",
			  "VARIETY": "Hot & Spicy Dry Curry With Chives Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2128,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Taimeiken Yousyoku Yasangatsukutta Omumen",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2127,
			  "BRAND": "Suimin",
			  "VARIETY": "Noodles With Chicken & Sweet Corn Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 2126,
			  "BRAND": "Nissin",
			  "VARIETY": "Mennippon Oumi Chanpon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2125,
			  "BRAND": "Happy Family",
			  "VARIETY": "Curry Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2124,
			  "BRAND": "7 Select",
			  "VARIETY": "Nissin Instant Noodles Tom Yum Seafood Creamy Flavour King Cup",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2123,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Tom Yum Shrimp Sabb Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2122,
			  "BRAND": "Nissin",
			  "VARIETY": "Chilli Noodles Stir Fried Holy Basil Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2121,
			  "BRAND": "Nissin",
			  "VARIETY": "Instant Noodles Moo Manao Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2120,
			  "BRAND": "Nissin",
			  "VARIETY": "Super Tom Yum Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2119,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Minced Pork Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2118,
			  "BRAND": "Nissin",
			  "VARIETY": "Chilli Noodles Tom Yum Shrimp Creamy Soup Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2117,
			  "BRAND": "7 Select",
			  "VARIETY": "Nissin Instant Noodles Shrimp Ma Nao Lui Suan Flavour King Cup",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2116,
			  "BRAND": "Nissin",
			  "VARIETY": "Instant Noodles Tom Yum Shrimp Saab Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2115,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Moo Manao Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2114,
			  "BRAND": "Nissin",
			  "VARIETY": "Instant Noodles Minced Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2113,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Seafood Creamy Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2112,
			  "BRAND": "Nissin",
			  "VARIETY": "Chilli Noodles Spicy Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2111,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Chilli Crab Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2110,
			  "BRAND": "Great Value",
			  "VARIETY": "Vegetarian Flavour Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2109,
			  "BRAND": "Oni Hot Pot",
			  "VARIETY": "Tuna With Shallot Flavor Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.3
			},
			{
			  "REVIEW_ID": 2108,
			  "BRAND": "Weh Lih",
			  "VARIETY": "GGE Noodle Snack Wheat Crackers Original Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 2107,
			  "BRAND": "Nissin",
			  "VARIETY": "Lamen Sabor Frango Assado Com Toque De Limao",
			  "STYLE": "Pack",
			  "COUNTRY": "Brazil",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2106,
			  "BRAND": "Itomen",
			  "VARIETY": "Onion Flavor Shoyu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2105,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Chicken Tortilla Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2104,
			  "BRAND": "Wang",
			  "VARIETY": "Rice Noodle Kimchi Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2103,
			  "BRAND": "Roland",
			  "VARIETY": "Ramen Japanese Style Quick-Cooking Alimentary Paste With Beef Artificially Flavored Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 2102,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Singapore Laksa",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2101,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Pojangmacha Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2100,
			  "BRAND": "Myojo",
			  "VARIETY": "Mee Goreng Original Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2099,
			  "BRAND": "Sanpo",
			  "VARIETY": "Yakibuta Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2098,
			  "BRAND": "Nongshim",
			  "VARIETY": "Kimchi Flavor Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2097,
			  "BRAND": "CarJEN",
			  "VARIETY": "Otentiq Cheezy Mushroom Instant Noodles (Improved Taste)",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2096,
			  "BRAND": "Maruchan",
			  "VARIETY": "Seimen Noukou Toro Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2095,
			  "BRAND": "Nissin",
			  "VARIETY": "Straits Kitchen Laksa",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2094,
			  "BRAND": "Nongshim",
			  "VARIETY": "Champong Noodle Soup Spicy Seafood Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2093,
			  "BRAND": "Oni Hot Pot",
			  "VARIETY": "Seaweed Flavour Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2092,
			  "BRAND": "Doll",
			  "VARIETY": "Instant Noodle Preserved Vegetable Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2091,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Hokkien Prawn Noodle Authentic Taste",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2090,
			  "BRAND": "Nissin",
			  "VARIETY": "Nupasta Salmon In White Sauce Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2089,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Seafood Curry Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2088,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Beef Flavour Instant Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2087,
			  "BRAND": "Nissin",
			  "VARIETY": "Mie Goreng Indonesia Stir Noodle Original Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2086,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Sesame Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2085,
			  "BRAND": "Fuku",
			  "VARIETY": "Superior Soup Instant Rice Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2084,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Straight Noodle Kyushu Tonkotsu Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2083,
			  "BRAND": "Nissin",
			  "VARIETY": "Taisho Fried Noodle Sesame Paste Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2082,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Pork Chowder Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2081,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Mifun Spicy Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2080,
			  "BRAND": "Fuku",
			  "VARIETY": "Non-Fried Superior Soup Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2079,
			  "BRAND": "Nissin",
			  "VARIETY": "Nupasta Carbonara Flavour Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2078,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Curry Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2077,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Big Spicy Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2076,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Black Garlic Oil Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2075,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Mi Segera Mi Goreng Ayam Krispi",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2074,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sabor Pollo Habanero Y Limon Sopa Instantanea",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2073,
			  "BRAND": "Great Value",
			  "VARIETY": "Spicy Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2072,
			  "BRAND": "Maruchan",
			  "VARIETY": "Bowl Taste Of Asia Beef Flavor Sukiyaki Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2071,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Tainan Noodle Original Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2070,
			  "BRAND": "Tokushima Seifun",
			  "VARIETY": "Negi Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 2069,
			  "BRAND": "Doll",
			  "VARIETY": "Instant Noodle Vegetarian Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2068,
			  "BRAND": "Maggi",
			  "VARIETY": "Fusian Special Edition Ow... Ow... Spicy Cow Mi Goreng",
			  "STYLE": "Pack",
			  "COUNTRY": "Australia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2067,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Fresh Jjajang",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2066,
			  "BRAND": "Marutai",
			  "VARIETY": "Hakata Tonkotsu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2065,
			  "BRAND": "Four Seas",
			  "VARIETY": "Kung Tak Lam Vegetarian Noodle (Mushroom)",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2064,
			  "BRAND": "Nongshim",
			  "VARIETY": "Arrabiata Rice Bucatini",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2063,
			  "BRAND": "Mamee",
			  "VARIETY": "Pepper Noodles Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2062,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ramyon Sabor Mariscos",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2061,
			  "BRAND": "Kamfen",
			  "VARIETY": "Dried Mix Noodles Scallop Seafood Flavoured",
			  "STYLE": "Tray",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2060,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Light+ Cheese Fondue",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2059,
			  "BRAND": "Four Seas",
			  "VARIETY": "Beef And Radish Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 2058,
			  "BRAND": "Zow Zow",
			  "VARIETY": "Instant Noodle Shrimp Tom Yam Flavoured",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2057,
			  "BRAND": "Nissin",
			  "VARIETY": "RapiFideo Sabor A Chile Y Limon",
			  "STYLE": "Cup",
			  "COUNTRY": "Mexico",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2056,
			  "BRAND": "Koyo",
			  "VARIETY": "Garlic Pepper Reduced Sodium Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 2055,
			  "BRAND": "Nissin",
			  "VARIETY": "Tokyo Tokunou Gyokai Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2054,
			  "BRAND": "Suimin",
			  "VARIETY": "Noodles Curried Prawn Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2053,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Sriracha Chicken Flavor Ramen Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2052,
			  "BRAND": "Indomie",
			  "VARIETY": "Pop Mie Mi Instan Cup Rasa Ayam",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2051,
			  "BRAND": "Master Kong",
			  "VARIETY": "Artificial Pork Ribs Flavour Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2050,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Red Tom Yum Goong Noodle Authentic Taste",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2049,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ramyon Sabor A Res",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2048,
			  "BRAND": "Acecook",
			  "VARIETY": "Kadomen Koikoku Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.8
			},
			{
			  "REVIEW_ID": 2047,
			  "BRAND": "Oni Hot Pot",
			  "VARIETY": "XO Sauce Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2046,
			  "BRAND": "E-Zee",
			  "VARIETY": "Perisa Asam Pedas Mi Segera",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2045,
			  "BRAND": "Great Value",
			  "VARIETY": "Chicken Style Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2044,
			  "BRAND": "Doll",
			  "VARIETY": "Hello Kitty Dim Sum Noodle Japanese Soy Sauce Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2043,
			  "BRAND": "ORee Garden",
			  "VARIETY": "Malaysia Green Curry Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2042,
			  "BRAND": "Suimin",
			  "VARIETY": "Noodles Mi Goreng",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 4.3
			},
			{
			  "REVIEW_ID": 2041,
			  "BRAND": "Master Kong",
			  "VARIETY": "Tomato Sauce Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2040,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sabor Franhp Com Requeijao",
			  "STYLE": "Cup",
			  "COUNTRY": "Brazil",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2039,
			  "BRAND": "Tokushima Seifun",
			  "VARIETY": "Yakibuta Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2038,
			  "BRAND": "A1",
			  "VARIETY": "Vegetarian Herbal Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 2037,
			  "BRAND": "Migawon",
			  "VARIETY": "Hovenia Ramen Vegetable Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2036,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Hakka BBQ Sauce Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 2035,
			  "BRAND": "Acecook",
			  "VARIETY": "Maru Uma Curry Udon",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2034,
			  "BRAND": "Fantastic",
			  "VARIETY": "Noodles Oriental Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 2033,
			  "BRAND": "Chaudhary's Wai Wai",
			  "VARIETY": "Instant Noodles Artificial Chicken & Shrimp Flavored",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 2032,
			  "BRAND": "Kamfen",
			  "VARIETY": "Noodle King Artificial Beef Soup Flavored",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2031,
			  "BRAND": "CarJEN",
			  "VARIETY": "Otentiq Cheezy Curry Instant Noodles (Improved Taste)",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2030,
			  "BRAND": "Myojo",
			  "VARIETY": "Charumera Atyificial Tonkotsu Shouyu Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2029,
			  "BRAND": "Singa-Me",
			  "VARIETY": "Instant Noodles Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2028,
			  "BRAND": "Maruchan",
			  "VARIETY": "Sopa Maruchan Sabor a Camaron, Limon y Habanero",
			  "STYLE": "Pack",
			  "COUNTRY": "Mexico",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2027,
			  "BRAND": "Nissin",
			  "VARIETY": "Shinshu Miso Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2026,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang White Curry Authentic Taste Cup",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 2025,
			  "BRAND": "Urban Noodle",
			  "VARIETY": "Authentic Street Food Chow Mein",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2024,
			  "BRAND": "Urban Noodle",
			  "VARIETY": "Authentic Street Food Pad Thai",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 2023,
			  "BRAND": "Urban Noodle",
			  "VARIETY": "Authentic Street Food Black Bean",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 2022,
			  "BRAND": "Urban Noodle",
			  "VARIETY": "Authentic Street Food Thai Red Curry",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2021,
			  "BRAND": "Urban Noodle",
			  "VARIETY": "Authentic Street Food Satay",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2020,
			  "BRAND": "Kang Shi Fu",
			  "VARIETY": "Artificial Roasted Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2019,
			  "BRAND": "Acecook",
			  "VARIETY": "Seabura Tonkotsu Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2018,
			  "BRAND": "Pulmuone",
			  "VARIETY": "Noodle With Spicy Oyster Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2017,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Honey & Cheese Big Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 2016,
			  "BRAND": "Great Value",
			  "VARIETY": "Chicken Style Noodles With Vegetables",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2015,
			  "BRAND": "E-Zee",
			  "VARIETY": "Perisa Kari Mi Segera (Improved Taste)",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2014,
			  "BRAND": "Oni Hot Pot",
			  "VARIETY": "Ghost Pepper Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2013,
			  "BRAND": "Great Value",
			  "VARIETY": "Beef Style Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2012,
			  "BRAND": "MAMA",
			  "VARIETY": "Vegetarian Instant Noodles Shiitake Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2011,
			  "BRAND": "Trident",
			  "VARIETY": "2 Minute Laksa Flavour Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Australia",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2010,
			  "BRAND": "MAMA",
			  "VARIETY": "Rangers Snack Noodles Popcorn Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2009,
			  "BRAND": "Conimex",
			  "VARIETY": "Oriental Noodles Soto Ajam",
			  "STYLE": "Cup",
			  "COUNTRY": "Netherlands",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 2008,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Hot spicy Flavor Instant Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 2007,
			  "BRAND": "Nongshim",
			  "VARIETY": "Rice Fettucini Alfredo",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2006,
			  "BRAND": "Kamfen",
			  "VARIETY": "Wonton Noodles Beef Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2005,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Hakka Spicy Barbeque Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 2004,
			  "BRAND": "Nissin",
			  "VARIETY": "Donbei Dashi Shoyu Yakiudon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 2003,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Rich Miso Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 2002,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Tom Yum Goong",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.8
			},
			{
			  "REVIEW_ID": 2001,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Big Seafood Clam Chowder",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 2000,
			  "BRAND": "Nissin",
			  "VARIETY": "Chikin Ramen Donburi",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1999,
			  "BRAND": "Nissin",
			  "VARIETY": "Curry Udon",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1998,
			  "BRAND": "Nissin",
			  "VARIETY": "Men Shokunin Shoyu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1997,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Vegeta Buta-kyabetsu Tonkotsu",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4.3
			},
			{
			  "REVIEW_ID": 1996,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Pasta Style Tarako Spaghetti",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1995,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Big Cheese Mexican Chilli",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1994,
			  "BRAND": "Nissin",
			  "VARIETY": "Gyoretsu-no-Dekiru-Mise-no-Ramen (Shrimp Tantanmen)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1993,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Tonkotsu",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1992,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Light Plus Ratatouille",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1991,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Milk Chikin Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1990,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1989,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang White curry Noodle Authentic Taste",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1988,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Noodles Chicken Soup Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1987,
			  "BRAND": "Nissin",
			  "VARIETY": "Yokohama Walker Iekei Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1986,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Quinoa Noodle With Oyster Sauce And Vegetables",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1985,
			  "BRAND": "Prima Taste",
			  "VARIETY": "Singapore Prawn Soup La Mian",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1984,
			  "BRAND": "Nissin",
			  "VARIETY": "Chinese Tan Tan Vermicelli",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1983,
			  "BRAND": "Tokushima Seifun",
			  "VARIETY": "Tokushima Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1982,
			  "BRAND": "Master Kong",
			  "VARIETY": "Assorted Pork Bone Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1981,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Red tom Yum Goong Noodle Authentic Taste",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1980,
			  "BRAND": "Suimin",
			  "VARIETY": "Noodles Witrh Prawn & Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Australia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1979,
			  "BRAND": "Nissin",
			  "VARIETY": "BIG Cup Noodle Ajillo",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1978,
			  "BRAND": "CarJEN",
			  "VARIETY": "Nyonya Curry Laksa (Improved Taste)",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1977,
			  "BRAND": "MyOri",
			  "VARIETY": "Malaysia Penang Green Curry Vermicelli (New Package)",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1976,
			  "BRAND": "Itsuki",
			  "VARIETY": "Kumamoto Spicy Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1975,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Fried Noodles Classic",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1974,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Cheese Curry Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1973,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sabor Calabresa",
			  "STYLE": "Pack",
			  "COUNTRY": "Brazil",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1972,
			  "BRAND": "Doll",
			  "VARIETY": "Spicy Flavour Instant Mifun",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1971,
			  "BRAND": "Fujiwara",
			  "VARIETY": "Horse Crab Flavour Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1970,
			  "BRAND": "MyOri",
			  "VARIETY": "Malaysia Penang Red Curry Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1969,
			  "BRAND": "Nongshim",
			  "VARIETY": "Noodle Soup Seasoned With Real Kimchi",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1968,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Chicken Flavor Ramen Noodle Soup (New Packaging)",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1967,
			  "BRAND": "Tokushima Seifun",
			  "VARIETY": "Kinchan Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1966,
			  "BRAND": "Wei Lih",
			  "VARIETY": "GGE Noodle Snack Wheat Crackers Soy Sauce Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1965,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Spicy Prawn Soup Noodle Authentic Taste",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1964,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Noodles Coconut Milk Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1963,
			  "BRAND": "Kabuto Noodles",
			  "VARIETY": "Rice Noodles Vegetable Laksa",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1962,
			  "BRAND": "Kabuto Noodles",
			  "VARIETY": "Rice Noodles Chicken Pho",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1961,
			  "BRAND": "Kabuto Noodles",
			  "VARIETY": "Chicken Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1960,
			  "BRAND": "Kabuto Noodles",
			  "VARIETY": "Chilli Chicken Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1959,
			  "BRAND": "Myojo",
			  "VARIETY": "Charumera Shoyu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1958,
			  "BRAND": "IbuRamen",
			  "VARIETY": "Mi Goreng Bento Noodles In A Box Curry Masala Flavour",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1957,
			  "BRAND": "MAMA",
			  "VARIETY": "Cup Vegetarian Instant Noodles Tom Yum Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1956,
			  "BRAND": "Maruchan",
			  "VARIETY": "Spicy Tomato Salsa Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 1955,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Ramen Noodle Soup Umami Soy Sauce Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1954,
			  "BRAND": "Koh Thai",
			  "VARIETY": "Island Of Flavours Spicy Thai Chicken Instant Noodles Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1953,
			  "BRAND": "Prima Taste",
			  "VARIETY": "Singapore Fish Soup La Mian",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1952,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung-Fu Brand Instant Oriental Noodle Soup Artificial Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1951,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Ramen Noodle Soup Hearty Chicken Flavor [New Package]",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1950,
			  "BRAND": "Fujiwara",
			  "VARIETY": "Red King Crab Flavour Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1949,
			  "BRAND": "Bamee",
			  "VARIETY": "Oriental Style Instant Noodles Shrimp Flavour (Tom Yum)",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1948,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Artificial Pickled Cabbage Fish Flavor Instant Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1947,
			  "BRAND": "Prima Taste",
			  "VARIETY": "Singapore Laksa Wholegrain La Mian",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1946,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Shio Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1945,
			  "BRAND": "MAMA",
			  "VARIETY": "Oriental Style Instant Noodles Masala Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Bangladesh",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1944,
			  "BRAND": "Wei Lih",
			  "VARIETY": "GGE Noodle Snack Wheat Crackers Hot Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1943,
			  "BRAND": "New Touch",
			  "VARIETY": "Sugomen Niigata Seabura Shoyu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1942,
			  "BRAND": "Ibumie",
			  "VARIETY": "Always Mi Goreng Perisa Sambal Udang",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1941,
			  "BRAND": "Unox",
			  "VARIETY": "Good Noodles Tandoori",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1940,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Pasta Style Bolognese",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1939,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Noodles Shrimp Creamy Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1938,
			  "BRAND": "Nissin",
			  "VARIETY": "Donbei Kamodashi Soba",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1937,
			  "BRAND": "MAMA",
			  "VARIETY": "Chicken Soup Flavour Cup Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Myanmar",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1936,
			  "BRAND": "Fortune",
			  "VARIETY": "Rice Noodle Coconut Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 1935,
			  "BRAND": "Love Cook",
			  "VARIETY": "Guanmiao Dried Noodles With Oleum Sesami",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1934,
			  "BRAND": "Love Cook",
			  "VARIETY": "Guanmiao Dried Noodles With Spicy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1933,
			  "BRAND": "Love Cook",
			  "VARIETY": "Guanmiao Dried Noodles With Authentic Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1932,
			  "BRAND": "Love Cook",
			  "VARIETY": "Guanmiao Dried Noodles With Shallot Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1931,
			  "BRAND": "Bonasia",
			  "VARIETY": "Instant Noodles chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hungary",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1930,
			  "BRAND": "Koh Thai",
			  "VARIETY": "Island Of Flavours Lemongrass Instant Noodles Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 1929,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Noodles Minced Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Cambodia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1928,
			  "BRAND": "Bamee",
			  "VARIETY": "Instant Noodles Oriental Style Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1927,
			  "BRAND": "Marutai",
			  "VARIETY": "Kogashi Megiiri Tonkotsu Kagoshima Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1926,
			  "BRAND": "Nissin",
			  "VARIETY": "Bowl Noodles Hot & Spicy Chicken Flavor Less Sodium Ramen Noodle Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1925,
			  "BRAND": "Prima",
			  "VARIETY": "Juzz's Mee Creamy Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1924,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Broad Noodle Artificial Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1923,
			  "BRAND": "Conimex",
			  "VARIETY": "Oriental Noodles Teriyaki",
			  "STYLE": "Cup",
			  "COUNTRY": "Netherlands",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 1922,
			  "BRAND": "Mie Sedaap",
			  "VARIETY": "Instant Cup Mi Kuah Rasa Baso Spesial",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1921,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Ramen Noodle Soup Chicken Flavor [New Package]",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1920,
			  "BRAND": "Itsuki",
			  "VARIETY": "Ramen Tonkotudou Kumamoto Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 0.75
			},
			{
			  "REVIEW_ID": 1919,
			  "BRAND": "Maruchan",
			  "VARIETY": "Shiroi Chikara Mochi Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1918,
			  "BRAND": "iMee",
			  "VARIETY": "Instant Noodles chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1917,
			  "BRAND": "IbuRamen",
			  "VARIETY": "Mi Goreng Bento Noodles In A Box Hot Sweet & Sour Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 1916,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Fried Noodles Teriyaki",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1915,
			  "BRAND": "Itsuki",
			  "VARIETY": "Yuzu Sesame Sauce Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1914,
			  "BRAND": "Prima",
			  "VARIETY": "Juzz's Mee Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1913,
			  "BRAND": "Thai Smile",
			  "VARIETY": "Mushroom Rice Noodle Soup Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 1912,
			  "BRAND": "MAMA",
			  "VARIETY": "Instant Noodles Chicken Sichek Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1911,
			  "BRAND": "Nissin",
			  "VARIETY": "Emergency Chikin Ramen Cup Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1910,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Pad Thai",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1909,
			  "BRAND": "Asia Gold",
			  "VARIETY": "Instant Noodles With Chicken Flavouring",
			  "STYLE": "Pack",
			  "COUNTRY": "Hungary",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1908,
			  "BRAND": "Nissin",
			  "VARIETY": "Kuroma-yu Tonkotsu Kumamoto Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1907,
			  "BRAND": "Prima Taste",
			  "VARIETY": "Singapore Curry Wholegrain La Mian",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1906,
			  "BRAND": "Vifon",
			  "VARIETY": "Chicken Flavour Asian Style Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1905,
			  "BRAND": "Pirkka",
			  "VARIETY": "Nuudeli Kana Nudlar Kyckling",
			  "STYLE": "Pack",
			  "COUNTRY": "Finland",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1904,
			  "BRAND": "Bonasia",
			  "VARIETY": "Instant Noodles Duck Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hungary",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1903,
			  "BRAND": "Higashimaru",
			  "VARIETY": "Tonkotsu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1902,
			  "BRAND": "MAMA",
			  "VARIETY": "Seafood Tom Yum Sichek Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1901,
			  "BRAND": "Prima",
			  "VARIETY": "Juzz's Mee Original Spicy Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1900,
			  "BRAND": "Ibumie",
			  "VARIETY": "Always Mi Goreng Perisa Kari Kapitan",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1899,
			  "BRAND": "Koh Thai",
			  "VARIETY": "Island Of Flavours Thai Royal Shrimp Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1898,
			  "BRAND": "Master Kong",
			  "VARIETY": "Spicy Fish Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1897,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Massaman Curry",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1896,
			  "BRAND": "Asia Gold",
			  "VARIETY": "Instant Noodles Duck Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hungary",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1895,
			  "BRAND": "Maruchan",
			  "VARIETY": "Seimen Houjyun Koku Shoyu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1894,
			  "BRAND": "MAMA",
			  "VARIETY": "Rangers Snack Noodles BBQ Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1893,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Sio",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1892,
			  "BRAND": "Ottogi",
			  "VARIETY": "Cheese Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1891,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Homestyle Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1890,
			  "BRAND": "Kuriki",
			  "VARIETY": "Beef Tongue Shio Mayo Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1889,
			  "BRAND": "MAMA",
			  "VARIETY": "Rangers Snack Noodles Sour Cream Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1888,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Kyushu White Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1887,
			  "BRAND": "Myojo",
			  "VARIETY": "Mee Poh Dry",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1886,
			  "BRAND": "Myojo",
			  "VARIETY": "Chicken Abalone Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1885,
			  "BRAND": "Myojo",
			  "VARIETY": "Ramen Char Mee 100",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1884,
			  "BRAND": "Myojo",
			  "VARIETY": "La Ramen Spicy Mushroom Flavour Big Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1883,
			  "BRAND": "Myojo",
			  "VARIETY": "Mee Goreng",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1882,
			  "BRAND": "Myojo",
			  "VARIETY": "La Ramen Spicy Lobster Hot Pot Flavour Big Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1881,
			  "BRAND": "Myojo",
			  "VARIETY": "Chicken Abalone Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1880,
			  "BRAND": "Myojo",
			  "VARIETY": "Thai Tom Yam Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1879,
			  "BRAND": "Myojo",
			  "VARIETY": "Chicken Tanmen Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1878,
			  "BRAND": "Myojo",
			  "VARIETY": "Extra Spicy Singapore Curry Big Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1877,
			  "BRAND": "Myojo",
			  "VARIETY": "La Ramen Spicy Mushroom Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1876,
			  "BRAND": "Myojo",
			  "VARIETY": "Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1875,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Tonkotsu Ramen Artificially Flavored Tonkotsu White Chicken Broth",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1874,
			  "BRAND": "Ibumie",
			  "VARIETY": "Always Mi Goreng Perisa Thai Tom Yam",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1873,
			  "BRAND": "Vedan",
			  "VARIETY": "Wei Wei A Instant Noodles Chicken Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 1872,
			  "BRAND": "Itsuki",
			  "VARIETY": "Hakata Ossyoi",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1871,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Minced Pork Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1870,
			  "BRAND": "Asia Gold",
			  "VARIETY": "Instant Noodles With Beef Flavouring",
			  "STYLE": "Pack",
			  "COUNTRY": "Hungary",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1869,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Fried Noodles Chili",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1868,
			  "BRAND": "Marutai",
			  "VARIETY": "Kuroma-yu Tonkotsu Kumamoto Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1867,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Premier Bowl Instant Noodles Stewed Pork Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1866,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Spicy Prawn Soup Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1865,
			  "BRAND": "Mama",
			  "VARIETY": "Shrimp Tom Yum Flavour Cup Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Myanmar",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1864,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Ramen Noodle Soup Umami Tonkotsu Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1863,
			  "BRAND": "Baijia",
			  "VARIETY": "Broad Noodle Pickled Vegetable Artificial Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 1862,
			  "BRAND": "Ibumie",
			  "VARIETY": "Always Mi Goreng Perisa Asli",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1861,
			  "BRAND": "Conimex",
			  "VARIETY": "Oriental Noodles Groene Curry",
			  "STYLE": "Cup",
			  "COUNTRY": "Netherlands",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 1860,
			  "BRAND": "Nissin",
			  "VARIETY": "Cupo Noodle Pasta Style Vongole",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1859,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles chicken Green Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Cambodia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1858,
			  "BRAND": "Myojo",
			  "VARIETY": "Wantan Men",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1857,
			  "BRAND": "IbuRamen",
			  "VARIETY": "Mi Goreng Bento Noodles In A Box Shallot Teriyaki Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1856,
			  "BRAND": "Indomie",
			  "VARIETY": "Instant Cup Noodles Mi Goreng Fried Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1855,
			  "BRAND": "Daraz",
			  "VARIETY": "Negi Man Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1854,
			  "BRAND": "Mama",
			  "VARIETY": "Chinese Kitchen Chinese Style Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1853,
			  "BRAND": "Bonasia",
			  "VARIETY": "Instant Noodles Shrimp Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hungary",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1852,
			  "BRAND": "Myojo",
			  "VARIETY": "Udon Japanese Style Precooked Noodles With Soup Hot & Spicy Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1851,
			  "BRAND": "Fujiwara",
			  "VARIETY": "Snow Crab Flavour Shio Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1850,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Ramen Noodle Soup Umami Miso Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1849,
			  "BRAND": "Pama",
			  "VARIETY": "Instant Rice Vermicelli Clear Soup Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1848,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Red tom Yum Goong Noodle (New Version)",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1847,
			  "BRAND": "Conimex",
			  "VARIETY": "Oriental Noodles Hot & Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1846,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Savory Sauce And Restayrant Quality Noodles Roast Chicken Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1845,
			  "BRAND": "Mama",
			  "VARIETY": "Oriental Style Instant Noodles Shrimp Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Bangladesh",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1844,
			  "BRAND": "Seven & I",
			  "VARIETY": "Gold Sumire Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1843,
			  "BRAND": "Forest Noodles",
			  "VARIETY": "Sunbaked Noodles With Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1842,
			  "BRAND": "Forest Noodles",
			  "VARIETY": "Purple Sweet Potato Noodles With Taiwanese Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1841,
			  "BRAND": "Forest Noodles",
			  "VARIETY": "Sunbaked Noodles With Spicy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1840,
			  "BRAND": "Forest Noodles",
			  "VARIETY": "Sweet Potato Noodles With Sesame Paste Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1839,
			  "BRAND": "Vit's",
			  "VARIETY": "Taste Of Malaysia Penang White Curry Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1838,
			  "BRAND": "Vit's",
			  "VARIETY": "Taste Of Malaysia Penang Asam Laksa Fried Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1837,
			  "BRAND": "Vit's",
			  "VARIETY": "Taste Of Malaysia Penang Hokkien Mee Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1836,
			  "BRAND": "Vit's",
			  "VARIETY": "Taste Of Malaysia Penang White Curry Fried Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1835,
			  "BRAND": "Vit's",
			  "VARIETY": "Taste Of Malaysia Penang Asam Laksa Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1834,
			  "BRAND": "Vit's",
			  "VARIETY": "Taste Of Malaysia Penang Hokkien Mee Fried Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1833,
			  "BRAND": "Vit's",
			  "VARIETY": "Instant Noodles With Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1832,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Instant Flat Shaped Noodles Boat Noodles Nam Tok Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1831,
			  "BRAND": "Kuriki",
			  "VARIETY": "Plum Mayo Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1830,
			  "BRAND": "Tseng Noodles",
			  "VARIETY": "Sichuan Pepper Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1829,
			  "BRAND": "Tseng Noodles",
			  "VARIETY": "Hu Sesame Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1828,
			  "BRAND": "Tseng Noodles",
			  "VARIETY": "Scallion With Sichuan Pepper  Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1827,
			  "BRAND": "Nongshim",
			  "VARIETY": "Zha Wang ((Jjawang) Noodles With Chajang Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1826,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Stewed Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Cambodia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1825,
			  "BRAND": "Sichuan Baijia",
			  "VARIETY": "Broad Noodle Chilli Oil Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1824,
			  "BRAND": "Nongshim",
			  "VARIETY": "Soon Veggie Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1823,
			  "BRAND": "MyKuali",
			  "VARIETY": "MeeKuali spicy Fried Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1822,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Mi Kuah Rasa Baso Spesial",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1821,
			  "BRAND": "Myojo",
			  "VARIETY": "Udon Japanese Style Pre-Cooked Noodles With Soup Beef Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1820,
			  "BRAND": "Ten-In",
			  "VARIETY": "Veggie King Buddha Jump Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1819,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Premier Bowl Instant Noodles Suki Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1818,
			  "BRAND": "Sugakiya Foods",
			  "VARIETY": "Nara Tenri Shoyu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1817,
			  "BRAND": "Hao Way",
			  "VARIETY": "Penang Vegetarian Prawn Instant Bowl Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1816,
			  "BRAND": "Vifon",
			  "VARIETY": "Asian Style Instant Noodles Artificial Beef Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1815,
			  "BRAND": "Nakaya Shouten",
			  "VARIETY": "Hingya no Shio Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1814,
			  "BRAND": "Koh Thai",
			  "VARIETY": "Island Of Flavours Tom Yum Instant Noodles Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1813,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Fried Noodles Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1812,
			  "BRAND": "Master Kong",
			  "VARIETY": "Mushroom Instant Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1811,
			  "BRAND": "Conimex",
			  "VARIETY": "Oriental Noodles Oosterse Groenten",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1810,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang White Curry Noodle (New Version)",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1809,
			  "BRAND": "Marutai",
			  "VARIETY": "Nagahama Hakata Tonkotsu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1808,
			  "BRAND": "Mama",
			  "VARIETY": "Vegetarian Instant Cup Noodle Tofu & Shiitake Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1807,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Tom Yum Goong Flavour Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1806,
			  "BRAND": "Cintan",
			  "VARIETY": "Mi Segera Mmm... Perisa Goreng Ala Indonesia",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1805,
			  "BRAND": "Mama",
			  "VARIETY": "Oriental Style Instant Noodles Tandoori Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Bangladesh",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1804,
			  "BRAND": "Thai Chef",
			  "VARIETY": "Oriental Style Instant Noodles Shrimp Creamy Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hungary",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1803,
			  "BRAND": "Mama",
			  "VARIETY": "Vegetarian Instant Noodles Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1802,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Ramen Noodles Ramen Noodle Soup Beef Flavor (New Package)",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1801,
			  "BRAND": "Baijia",
			  "VARIETY": "Spicy Artificial Fei Chang Instant Vermicelli (New Recipe)",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1800,
			  "BRAND": "Crystal Noodle",
			  "VARIETY": "Soup All Natural Hot & Sour",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 1799,
			  "BRAND": "Thai Smile",
			  "VARIETY": "Spring Onion Rice Noodle Soup Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1798,
			  "BRAND": "iMee",
			  "VARIETY": "Instant Noodles Vegetable Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1797,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Instant Rice Vermicelli Crab Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1796,
			  "BRAND": "Fujiwara",
			  "VARIETY": "Salty Taste Chanko Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1795,
			  "BRAND": "Azami",
			  "VARIETY": "Kimchee Flavour Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 1794,
			  "BRAND": "Vit's",
			  "VARIETY": "Shallot Chicken Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1793,
			  "BRAND": "Cintan",
			  "VARIETY": "Mi Segera Mmm... Perisa Asam Laksa",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1792,
			  "BRAND": "A1",
			  "VARIETY": "Soup Spices Noodle Mee Rempahan Sup",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1791,
			  "BRAND": "Vit's",
			  "VARIETY": "Tom Yam Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1790,
			  "BRAND": "Super",
			  "VARIETY": "Kimchi",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1789,
			  "BRAND": "Cintan",
			  "VARIETY": "Mi Segera Mmm... Perisa Ayam Cendawan",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1788,
			  "BRAND": "Super",
			  "VARIETY": "Curry Flavour Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1787,
			  "BRAND": "Pama",
			  "VARIETY": "Kua Teaw Segera",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1786,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Premium Savory Sauce And Restaurant Quality Noodles Sriracha Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1785,
			  "BRAND": "Super",
			  "VARIETY": "Instant Noodles Black Pepper Crab Mi Goreng",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1784,
			  "BRAND": "Torishi",
			  "VARIETY": "Hakata Tonkotsu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1783,
			  "BRAND": "iMee",
			  "VARIETY": "Instant Noodles Creamy Tom Yum Shrimp Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1782,
			  "BRAND": "Western Family",
			  "VARIETY": "Beef Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 1781,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Hokkien Prawn Soup Rice Vermicelli (Bihun)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1780,
			  "BRAND": "Pulmuone",
			  "VARIETY": "Non-Fried Noodle Blackbean Sauce Noodle With Squid",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1779,
			  "BRAND": "Chering Chang",
			  "VARIETY": "Instant Non-Fried Noodles Tomato Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1778,
			  "BRAND": "JML",
			  "VARIETY": "Spicy King Spicy Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1777,
			  "BRAND": "JML",
			  "VARIETY": "Supereme Bowl Noodles With Stewed Egg Spicy Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1776,
			  "BRAND": "JML",
			  "VARIETY": "Spicy King Bowl Noodle Spicy Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1775,
			  "BRAND": "JML",
			  "VARIETY": "Spicy King Bowl Noodle Spicy Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1774,
			  "BRAND": "JML",
			  "VARIETY": "Spicy King Spicy Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1773,
			  "BRAND": "JML",
			  "VARIETY": "Supreme Bowl Noodles With Stewed Egg Sour Beans With Pork Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1772,
			  "BRAND": "JML",
			  "VARIETY": "Spicy King Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1771,
			  "BRAND": "JML",
			  "VARIETY": "Supreme Bowl Noodles With Stewed Egg Braised Beef Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1770,
			  "BRAND": "JML",
			  "VARIETY": "Spicy King Bowl Noodle Spicy Pork",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1769,
			  "BRAND": "Mamee",
			  "VARIETY": "Chef Lontong Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1768,
			  "BRAND": "New Touch",
			  "VARIETY": "Negi Miso No Ippin Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1767,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Shrimp Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Cambodia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1766,
			  "BRAND": "Paldo",
			  "VARIETY": "Bulnak Boeummyun King Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1765,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Ramen Noodles With Shrimp (New Package)",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1764,
			  "BRAND": "Pirkka",
			  "VARIETY": "Nuudeli Tom Yum Katkarapu",
			  "STYLE": "Pack",
			  "COUNTRY": "Finland",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1763,
			  "BRAND": "Ishimaru",
			  "VARIETY": "Tuna Flavor Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1762,
			  "BRAND": "Mom's Dry Noodle",
			  "VARIETY": "Sesame & Pepper",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1761,
			  "BRAND": "Authentically Asian",
			  "VARIETY": "Natural Quality Foods Pad Thai Noodle Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 1760,
			  "BRAND": "New Touch",
			  "VARIETY": "Homestyle Tonjiru",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1759,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Moo Manao Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1758,
			  "BRAND": "Vit's",
			  "VARIETY": "Duck Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1757,
			  "BRAND": "iMee",
			  "VARIETY": "Instant Noodles Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1756,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Veggie Noodle Carrot Noodle With Original Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1755,
			  "BRAND": "Mama",
			  "VARIETY": "Oriental Style Instant Noodles Hot & Spicy Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Bangladesh",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1754,
			  "BRAND": "Paldo",
			  "VARIETY": "King Bowl Super Spicy Pan Stirfried Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1753,
			  "BRAND": "Thai Smile",
			  "VARIETY": "Garlic Rice Noodle Soup Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1752,
			  "BRAND": "Kuriki",
			  "VARIETY": "Mayo Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1751,
			  "BRAND": "Mom's Dry Noodle",
			  "VARIETY": "Spicy & Sour Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1750,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Instant Cup Mi Kuah Rasa Soto",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1749,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Jumbo Instant Noodles Tom Yum Kung Creamy Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1748,
			  "BRAND": "Azami",
			  "VARIETY": "Chili Chicken Flavour Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1747,
			  "BRAND": "Vit's",
			  "VARIETY": "Curry Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1746,
			  "BRAND": "Marutai",
			  "VARIETY": "Ramen Shoyu Taste",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1745,
			  "BRAND": "Unox",
			  "VARIETY": "Good Noodles Kerrie",
			  "STYLE": "Pack",
			  "COUNTRY": "Netherlands",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1744,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Veggie Noodle Baby Grass Noodle With Toona Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1743,
			  "BRAND": "Mama",
			  "VARIETY": "Rangers Snack Noodles Shrimp Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1742,
			  "BRAND": "Aroi",
			  "VARIETY": "Curry Me! Penang White Curry Stir-fry Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1741,
			  "BRAND": "Myojo",
			  "VARIETY": "Udon Japanese Style Pre-Cooked Noodles With Soup Chicken Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1740,
			  "BRAND": "Master Kong",
			  "VARIETY": "Braised Beef Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1739,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Tanrei Koku Shio Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1738,
			  "BRAND": "Little Cook",
			  "VARIETY": "Instant Noodles Shrimp Tom Yum Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1737,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Instant Cup Mi Goreng",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1736,
			  "BRAND": "Mamee",
			  "VARIETY": "Monster Snek Mi Pedas",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1735,
			  "BRAND": "Master Kong",
			  "VARIETY": "Tomato Sauce Instant Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1734,
			  "BRAND": "Koka",
			  "VARIETY": "Laksa Singapura",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1733,
			  "BRAND": "Bonasia",
			  "VARIETY": "Instant Noodles Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1732,
			  "BRAND": "Super",
			  "VARIETY": "Seafood Flavour Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1731,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Creamy Shrimp Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Cambodia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1730,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "BBQ Pork Flavor Chow Mein",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1729,
			  "BRAND": "Vedan",
			  "VARIETY": "Zan Vegetarian Instant Noodle Series Shiitake Mushroom Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1728,
			  "BRAND": "Yamadai",
			  "VARIETY": "Tenobe Somen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1727,
			  "BRAND": "Wei Lih",
			  "VARIETY": "Jah Jan Men",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1726,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Oh! Ricey Pho Ga",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1725,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Veggie Noodle Black Sesame Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1724,
			  "BRAND": "Pirkka",
			  "VARIETY": "Nuudeli Liha Nudlar Kott",
			  "STYLE": "Pack",
			  "COUNTRY": "Finland",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1723,
			  "BRAND": "Baixiang Noodles",
			  "VARIETY": "Artificial Beef Instant Noodles With Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1722,
			  "BRAND": "CarJEN",
			  "VARIETY": "Otentiq Cheezy Curry Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1721,
			  "BRAND": "Salam Mie",
			  "VARIETY": "Mi Goreng Dengan Abon",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1720,
			  "BRAND": "Mamee",
			  "VARIETY": "Chef Lontong Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1719,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Grilled Pork Flavour Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1718,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Hao Hao Sate Onion Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1717,
			  "BRAND": "Lee Fah Mee",
			  "VARIETY": "Sarawak White Laksa Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Sarawak",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1716,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Egg Protein Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Myanmar",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1715,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Instant Noodles Minced Pork Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1714,
			  "BRAND": "Master Kong",
			  "VARIETY": "Sichuan Hot Spicy Fish",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1713,
			  "BRAND": "CarJEN",
			  "VARIETY": "Otentiq Cheezy Mushroom Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1712,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "Organic Miso Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1711,
			  "BRAND": "Hao Way",
			  "VARIETY": "Vegetarian Penang Laksa",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1710,
			  "BRAND": "Chering Chang",
			  "VARIETY": "Instant Non-Fried Noodles Vegetable Curry Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1709,
			  "BRAND": "Asia Gold",
			  "VARIETY": "Instant Noodles With Shrimp Flavouring",
			  "STYLE": "Pack",
			  "COUNTRY": "Hungary",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1708,
			  "BRAND": "The Kitchen Food",
			  "VARIETY": "Sibu Instant Kampua Original",
			  "STYLE": "Pack",
			  "COUNTRY": "Sarawak",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1707,
			  "BRAND": "Azami",
			  "VARIETY": "Hot & Spicy Flavour Noodle Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "Canada",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1706,
			  "BRAND": "Maggi",
			  "VARIETY": "Hot Cup Goreng Perencah Cili Fiesta",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1705,
			  "BRAND": "Premiere",
			  "VARIETY": "Gold Bihun Kari Heritage Instant Rice Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1704,
			  "BRAND": "Baixiang Noodles",
			  "VARIETY": "Sour & Spicy Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1703,
			  "BRAND": "7 Select/Nissin",
			  "VARIETY": "Super Tom Yum Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1702,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Seafood Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1701,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "Organic Shoyu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1700,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Hakka Flat Noodle With Za Jiang Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1699,
			  "BRAND": "Vit's",
			  "VARIETY": "Mi goreng Pedas Chewy & springy",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1698,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Chicken Tortilla Flavor Ramen Noodles With Vegetables",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1697,
			  "BRAND": "The Kitchen Food",
			  "VARIETY": "Instant Kampua Dark Soy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Sarawak",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1696,
			  "BRAND": "Mama",
			  "VARIETY": "Cup Yentafo Tom Yum Mohfai",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1695,
			  "BRAND": "Mama",
			  "VARIETY": "Cup Shrimp Creamy Tom Yum",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1694,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Rice Vermicelli Bihun Goreng Original Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1693,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles coconut Milk Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Myanmar",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1692,
			  "BRAND": "Mama",
			  "VARIETY": "Oriental Style Instant Noodles Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Bangladesh",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1691,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Cup Noodles Minced Prok Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1690,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Sour Bamboo Shoot & Beef If Hot Pot Flavor Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1689,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Tomato Beef Brisket Flavor Purple Potato Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1688,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Sea Tangle & Sparerins Flavor Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1687,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Chef's Grains Millet Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1686,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Chef's Grains Buckwheat Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1685,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Chef's Grains Pea Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1684,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Sichuan Pepper & Chicken Flavor Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1683,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Sour Soup & Minced Meat Flavor Chef's Grain Naked Oat Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1682,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Sour Bamboo Shoot & Beef If Hot Pot Flavor Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1681,
			  "BRAND": "Wugudaochang",
			  "VARIETY": "Sea Tangle & Sparerins Flavor Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1680,
			  "BRAND": "Aroi",
			  "VARIETY": "Curry Me! Penang White Curry Soup Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1679,
			  "BRAND": "Ten-In",
			  "VARIETY": "Veggie World Vegetarian Braised Beef Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1678,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Black Spicy Po-Au-Feu Flavor (Mew Edition)",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1677,
			  "BRAND": "Paldo",
			  "VARIETY": "Raobokki Noodle (Export Version)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1676,
			  "BRAND": "A1",
			  "VARIETY": "Emporer Herbs Chicken Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1675,
			  "BRAND": "Baixiang Noodles",
			  "VARIETY": "Sauerkraut Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1674,
			  "BRAND": "Emart",
			  "VARIETY": "Dare You! Habanero Ramen (New Edition)",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1673,
			  "BRAND": "Lishan Food Manufacturing",
			  "VARIETY": "Black Cock Brand Vegetarian Chicken Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1672,
			  "BRAND": "Azami",
			  "VARIETY": "Chili Seafood Flavor Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1671,
			  "BRAND": "Ah Lai",
			  "VARIETY": "Penang Favourite White Curry Rice Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1670,
			  "BRAND": "Tropicana Slim",
			  "VARIETY": "Less Fat Noodles Grilled Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1669,
			  "BRAND": "A-One",
			  "VARIETY": "Mi Ly Instant Noodles Mi Chay Vegetarian Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Vietnam",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 1668,
			  "BRAND": "Mama",
			  "VARIETY": "Cup Rice Vermicelli With Clear Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1667,
			  "BRAND": "Deshome",
			  "VARIETY": "Aloe Thin Noodles With Camelia Oil Vegetable Sauce Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1666,
			  "BRAND": "Vifon",
			  "VARIETY": "Curry Instant Noodle With Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1665,
			  "BRAND": "Paldo Vina",
			  "VARIETY": "Koreno Premium Mushroom Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1664,
			  "BRAND": "Mamee",
			  "VARIETY": "Oriental Noodles Prawn Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1663,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "King Chef Authentic Kimchi Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1662,
			  "BRAND": "Mama",
			  "VARIETY": "Non-Fried Instant Noodles Ramen Tonkotsu Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1661,
			  "BRAND": "Chencun",
			  "VARIETY": "Senior Food Rice Noodle Fragrant Peppery Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1660,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Ho Fan Wonton Soup Flavored",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1659,
			  "BRAND": "United",
			  "VARIETY": "Xi Gon Satay Onion Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1658,
			  "BRAND": "ChoripDong",
			  "VARIETY": "Hurricane Rice Cake (Topokki)",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1657,
			  "BRAND": "Shan",
			  "VARIETY": "Shoop Instant Noodles Bombay Biryani Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Pakistan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1656,
			  "BRAND": "Mama",
			  "VARIETY": "JokCup Instant Porridge Soup Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1655,
			  "BRAND": "Baijia",
			  "VARIETY": "Artificial Pickled Vegetable Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1654,
			  "BRAND": "MyOri",
			  "VARIETY": "Malaysia Penang White Curry Noodle Super Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1653,
			  "BRAND": "MyOri",
			  "VARIETY": "Malaysia Penang Green Curry Rice Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1652,
			  "BRAND": "MyOri",
			  "VARIETY": "Malaysia Penang White Curry Noodle Original",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1651,
			  "BRAND": "Ruski",
			  "VARIETY": "Chicken Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1650,
			  "BRAND": "Ottogi",
			  "VARIETY": "Sesame Flavor Ramen Korean Style Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1649,
			  "BRAND": "Master Kong",
			  "VARIETY": "Seafood Flavour Instant Cooking Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1648,
			  "BRAND": "Wei Lih",
			  "VARIETY": "Instant Noodles With Onion Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1647,
			  "BRAND": "No Name",
			  "VARIETY": "Shrimp Flavour Oriental Noodles And Soup Mix",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1646,
			  "BRAND": "New Way",
			  "VARIETY": "Spaghetti Instant Noodles",
			  "STYLE": "Tray",
			  "COUNTRY": "Vietnam",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1645,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Jjamppong Korean Style Spicy Seafood Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1644,
			  "BRAND": "Hao Way",
			  "VARIETY": "Vegetarian Penang Laksa Instant Bowl Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Malaysia",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1643,
			  "BRAND": "Emart",
			  "VARIETY": "Dare You! Habanero Jjajang Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1642,
			  "BRAND": "Campbell's",
			  "VARIETY": "Hearty Noodles Savoury Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 1641,
			  "BRAND": "One Dish Asia",
			  "VARIETY": "Japanese Ramen Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 1640,
			  "BRAND": "Long Jun Hang",
			  "VARIETY": "Taiwan Dried Noodles With Onion Oil Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1639,
			  "BRAND": "Pama",
			  "VARIETY": "Bihun Creamy Tom Yam Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1638,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Veggie Noodle Tomato Noodle With Vine Ripened Tomato Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1637,
			  "BRAND": "Thai Chef",
			  "VARIETY": "Instant Nudelsuppe Huhn Geschmack",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1636,
			  "BRAND": "Shan",
			  "VARIETY": "Shoop Instant Noodles Masala Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Pakistan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1635,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Quick Zabb Tom Klong Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1634,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Shoyu Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1633,
			  "BRAND": "A-One",
			  "VARIETY": "Mi Ly Instant Noodles Mi Bo Beef Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1632,
			  "BRAND": "Cintan",
			  "VARIETY": "Mi Segera Mmm... Perisa Kari",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1631,
			  "BRAND": "Nissin",
			  "VARIETY": "Donbei Tempura Soba Mini",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1630,
			  "BRAND": "Nongshim",
			  "VARIETY": "Korean Clay Pot Ramyun",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1629,
			  "BRAND": "Hao Way",
			  "VARIETY": "Penang Laksa Instant Bowl Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1628,
			  "BRAND": "Azami",
			  "VARIETY": "Kimchee Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 1627,
			  "BRAND": "Vedan",
			  "VARIETY": "Wei Wei A Instant Noodles Hot Beef Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1626,
			  "BRAND": "Nissin",
			  "VARIETY": "Gonbuto Kistune Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1625,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Rice Noodle Soup Spicy Shrimp Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1624,
			  "BRAND": "Baixiang Noodles",
			  "VARIETY": "Artificial Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1623,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang White Curry Noodle (New Improved Tatse)",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1622,
			  "BRAND": "Nongshim",
			  "VARIETY": "Quick2 Hot & Spicy Noodle Soup With Habanero & Lime",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1621,
			  "BRAND": "Myojo",
			  "VARIETY": "MenWhite Creamy Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1620,
			  "BRAND": "Premiere",
			  "VARIETY": "Gold Penang Asam Laksa Bihun",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1619,
			  "BRAND": "Nissin",
			  "VARIETY": "Chu Qian Yi Ding Tom Yum Instant Noodles With Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1618,
			  "BRAND": "Deshome",
			  "VARIETY": "Aloe This Noodles With Camellia Oil Spicy Bean Sauce Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1617,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Hokkien Prawn Noodle (New Improved Taste)",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1616,
			  "BRAND": "Unif-100",
			  "VARIETY": "Instant Noodles Artificial Spicy Beef Flavor (New Package)",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1615,
			  "BRAND": "Hankow",
			  "VARIETY": "Shanghai Kaiyang Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1614,
			  "BRAND": "The Bridge",
			  "VARIETY": "Penang White Curry Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1613,
			  "BRAND": "Maruchan",
			  "VARIETY": "Kaoru Maitake Tempura Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1612,
			  "BRAND": "Shan",
			  "VARIETY": "Shoop Instant Noodles Spicy Lemon Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Pakistan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1611,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Seafood Flavor Big Cup",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1610,
			  "BRAND": "Paldo Vina",
			  "VARIETY": "Koreno Premium Ginseng Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1609,
			  "BRAND": "Mitoku",
			  "VARIETY": "Brown Rice Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 1608,
			  "BRAND": "Hao Way",
			  "VARIETY": "Penang Vegetarian Prawn Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1607,
			  "BRAND": "Myojo",
			  "VARIETY": "Nyumen Desse Shoyu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1606,
			  "BRAND": "Maggi",
			  "VARIETY": "Perencah Kari Letup Mi Segera",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1605,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Mushroom With Vegetables Flavour Macaroni",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1604,
			  "BRAND": "Unzen",
			  "VARIETY": "Mushroom Honpo Shiitake Nutritious Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 1603,
			  "BRAND": "Salam Mie",
			  "VARIETY": "Mi Goreng Ala Jawa Dengan Sambal Cabe Asli",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1602,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Mikochi Tom Yum Flavor Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1601,
			  "BRAND": "Nongshim",
			  "VARIETY": "Jinjja Jinjja (New)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1600,
			  "BRAND": "Chering Chang",
			  "VARIETY": "Instant Non-Fried Noodles Shallot Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1599,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Super Noodles Tomato",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1598,
			  "BRAND": "Mama",
			  "VARIETY": "Cup Rice Vermicelli Shrimp Creamy Tom Yum",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1597,
			  "BRAND": "Nissin",
			  "VARIETY": "Original Chow Mein Premium Spicy Chicken Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1596,
			  "BRAND": "Uncle Sun",
			  "VARIETY": "White Curry Noodle More Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1595,
			  "BRAND": "JML",
			  "VARIETY": "Emporer Instant Noodles Spicy Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1594,
			  "BRAND": "Acecook",
			  "VARIETY": "Jan Jan Dashi Shoyu Yakisoba",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 1593,
			  "BRAND": "Nongshim",
			  "VARIETY": "Tteokgukmyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1592,
			  "BRAND": "Mom's Dry Noodle",
			  "VARIETY": "Vegan Chilli With Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1591,
			  "BRAND": "Mi E-Zee",
			  "VARIETY": "Perisa Sayuran",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1590,
			  "BRAND": "Mi E-Zee",
			  "VARIETY": "Perisa Kari Sayuran",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1589,
			  "BRAND": "E-mi",
			  "VARIETY": "Mi Perencah Ayam Jagung",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1588,
			  "BRAND": "Mi E-Zee",
			  "VARIETY": "Perisa Bayam",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1587,
			  "BRAND": "Mi E-Zee",
			  "VARIETY": "Plain Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": "Unrated"
			},
			{
			  "REVIEW_ID": 1586,
			  "BRAND": "J.J.",
			  "VARIETY": "Snek Mi Perisa Ayam",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1585,
			  "BRAND": "CarJEN",
			  "VARIETY": "Nyonya Curry Laksa",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1584,
			  "BRAND": "E-mi",
			  "VARIETY": "Mi Perencah Asam Pedas",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1583,
			  "BRAND": "J.J.",
			  "VARIETY": "Snek Mi Perisa BBQ",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1582,
			  "BRAND": "Mi E-Zee",
			  "VARIETY": "Perisa Kari / Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1581,
			  "BRAND": "United",
			  "VARIETY": "3 Con Tom Instant Noodles Thailand Sour Shrimp Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1580,
			  "BRAND": "Emart",
			  "VARIETY": "Dare You! Habanero Ramen (New Edition)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1579,
			  "BRAND": "Curry Prince",
			  "VARIETY": "Penang Authentic White Curry Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1578,
			  "BRAND": "Nissin",
			  "VARIETY": "Gonbuto Tempura Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1577,
			  "BRAND": "Mama",
			  "VARIETY": "Pork Flavour Whole Wheat Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1576,
			  "BRAND": "Maggi",
			  "VARIETY": "Authentic Indian Noodles Vegetable Atta Masala",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1575,
			  "BRAND": "Paldo",
			  "VARIETY": "Jjajangmen Chajang Noodle King Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1574,
			  "BRAND": "Chering Chang",
			  "VARIETY": "Steam Vegetarian Flavor Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1573,
			  "BRAND": "Hao Way",
			  "VARIETY": "Penang White Curry Instant Bowl Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1572,
			  "BRAND": "Master Kong",
			  "VARIETY": "Artificial Seafood Flavor Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1571,
			  "BRAND": "Econsave",
			  "VARIETY": "Choice Instant Noodles Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1570,
			  "BRAND": "Maruchan",
			  "VARIETY": "Big Cup Ramen Corn, Salt & Butter Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1569,
			  "BRAND": "Maggi",
			  "VARIETY": "Mi Goreng Perencah Kari Ori",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1568,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Cup Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1567,
			  "BRAND": "Nissin",
			  "VARIETY": "Emergency Cup Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1566,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Tomato Enjoy Noodles With Hot Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "India",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1565,
			  "BRAND": "Oyatsu",
			  "VARIETY": "Baby Star Snack Noodle Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1564,
			  "BRAND": "A-One",
			  "VARIETY": "Mì Ly Instant Noodles Mì Thịt Xào Pork Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1563,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun Noodle Soup (New Edition)",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1562,
			  "BRAND": "Koka",
			  "VARIETY": "Purple Wheat Noodles Soy & Vinegar Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1561,
			  "BRAND": "Uncle Sun",
			  "VARIETY": "White Curry Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1560,
			  "BRAND": "Kin-Dee",
			  "VARIETY": "Instant Rice Noodle Spicy Seafood",
			  "STYLE": "Tray",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1559,
			  "BRAND": "Master Kong",
			  "VARIETY": "Spicy Beef Flavor Instant Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1558,
			  "BRAND": "No Name",
			  "VARIETY": "Beef Flavour Oriental Noodles And Soup Mix",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1557,
			  "BRAND": "Hao Way",
			  "VARIETY": "Penang Laksa",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1556,
			  "BRAND": "Ching's Secret",
			  "VARIETY": "Hot Garlic Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1555,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Instant Noodles Taste Sensation Mixed Vegetable Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1554,
			  "BRAND": "ICA",
			  "VARIETY": "Asia Fast Noodles Snabbnudlar Räksmak",
			  "STYLE": "Pack",
			  "COUNTRY": "Sweden",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1553,
			  "BRAND": "Mamee",
			  "VARIETY": "Mi Segera Perisa Itik",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1552,
			  "BRAND": "Bamee",
			  "VARIETY": "Oriental Style Instant Noodles Pa-Lo Duck Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1551,
			  "BRAND": "Myojo",
			  "VARIETY": "Men Black Seafood Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1550,
			  "BRAND": "Ibumie",
			  "VARIETY": "Penang White CurryMee",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1549,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Chow Mein Japanese Style Noodles Yakisoba",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1548,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Curry Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1547,
			  "BRAND": "Vedan",
			  "VARIETY": "Volcano Spicy Pork Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1546,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Rice Vermicelli Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1545,
			  "BRAND": "Nanyang Chef",
			  "VARIETY": "Penang Asam Pedas Hot & Sour Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1544,
			  "BRAND": "Thai Pavilion",
			  "VARIETY": "Pad Thai Instant rice Noodles & Sauce",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1543,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Hungrooo Masala Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1542,
			  "BRAND": "Koka",
			  "VARIETY": "Noodles Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1541,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Steam Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1540,
			  "BRAND": "Unif-100",
			  "VARIETY": "Instant Noodles Artificial Shallot Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1539,
			  "BRAND": "New Touch",
			  "VARIETY": "Kimchi Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1538,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Oat Noodle Tomato Soup Flavored",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1537,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Quick Zabb Chili Paste Tom Yum Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1536,
			  "BRAND": "Paldo Vina",
			  "VARIETY": "Koreno Premium Shrimp Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1535,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Oat Noodle Pork Rib Flavored",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1534,
			  "BRAND": "Vit's",
			  "VARIETY": "Seafood Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1533,
			  "BRAND": "Miliket",
			  "VARIETY": "Sate Flavor Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1532,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Special Instant Noodles Jjamppong Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1531,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Special Instant sopas Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1530,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Spicy Beef Mami Instant Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1529,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Special Instant Curly Spaghetti With Yummy Red Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1528,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Pinoy Chicken Instant Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Philippines",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1527,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Special Baked Mac Style Instant Macaroni",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1526,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "La Paz Batchoy Instant Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1525,
			  "BRAND": "Pama",
			  "VARIETY": "Instant Kua Teow Tom Yam",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1524,
			  "BRAND": "Nissin",
			  "VARIETY": "Chu Qian Yi Ding Spicy Sesame Flavour Instant Noodles With Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1523,
			  "BRAND": "Paldo",
			  "VARIETY": "Jjamppong Seafood Noodle King Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1522,
			  "BRAND": "Vifon",
			  "VARIETY": "Instant Porridge Seafood Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1521,
			  "BRAND": "Maruchan",
			  "VARIETY": "Gotsumori Sauce Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1520,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Oriental Style Instant Noodles Wasabi Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1519,
			  "BRAND": "Ching's Secret",
			  "VARIETY": "Manchurian Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1518,
			  "BRAND": "Mamee",
			  "VARIETY": "Chef Gold Recipe Bihun Kari Seribu Rasa",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1517,
			  "BRAND": "Katoz",
			  "VARIETY": "Instant Noodles Spicy Chili",
			  "STYLE": "Pack",
			  "COUNTRY": "Sweden",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1516,
			  "BRAND": "Men-Sunaoshi",
			  "VARIETY": "Miso Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1515,
			  "BRAND": "Nongshim",
			  "VARIETY": "Neoguri Udon Seafood & Mild",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1514,
			  "BRAND": "Maggi",
			  "VARIETY": "Royale Penang Seafood Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1513,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Tom Yum Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1512,
			  "BRAND": "Chewy",
			  "VARIETY": "Japanese Fried Ramen Noodles Kyoto Barbecue Sauce Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 1511,
			  "BRAND": "Long Jun Hang",
			  "VARIETY": "Tainan Yi Mien With Sesame Oil Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1510,
			  "BRAND": "Knorr",
			  "VARIETY": "Quick Serve Macaroni Wonton Broth",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1509,
			  "BRAND": "Nissin",
			  "VARIETY": "Donbei Kitsune Udon Mini",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1508,
			  "BRAND": "Mamee",
			  "VARIETY": "Chef Gold Recipe Mi Kari Seribu Rasa",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1507,
			  "BRAND": "Nissin",
			  "VARIETY": "Chu Qian Yi Ding Prawn Flavour Instant Noodles With Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1506,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Mug Noodles Spicy Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1505,
			  "BRAND": "Shan",
			  "VARIETY": "Shoop Instant Noodles BBQ Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Pakistan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1504,
			  "BRAND": "Master Kong",
			  "VARIETY": "Stewed Beef Flavor Cooking Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1503,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Soup Shrimp Habanero Lime Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1502,
			  "BRAND": "JML",
			  "VARIETY": "Artificial Pork Flavor Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1501,
			  "BRAND": "Acecook",
			  "VARIETY": "Ohmori Chukafu Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1500,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Red Tom Yum Goong Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1499,
			  "BRAND": "United",
			  "VARIETY": "Instant Noodles Xi Gon Artificial Stewed Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1498,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Sogokimyun Hot Flavor Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1497,
			  "BRAND": "Nissin",
			  "VARIETY": "Easy Fideos Picante Lime Shrimp Flavor Ramen Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1496,
			  "BRAND": "Master Kong",
			  "VARIETY": "Mianba Pork Ribs Flavor Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1495,
			  "BRAND": "Super",
			  "VARIETY": "Instant Noodles Mee Goreng",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1494,
			  "BRAND": "Indomie",
			  "VARIETY": "Pop Mie Chicken Flavour Cup Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1493,
			  "BRAND": "Maruchan",
			  "VARIETY": "Magomi-an Kitsune Udon (Eastern Japan Flavor)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1492,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Quick Zabb Tom Yum Shrimp Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1491,
			  "BRAND": "Ottogi",
			  "VARIETY": "Potato Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1490,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Chili Noodles With Japanese Yakisoba Sauce",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1489,
			  "BRAND": "Maggi",
			  "VARIETY": "Multigrainz Noodles Spice Remix",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1488,
			  "BRAND": "Mom's Dry Noodle",
			  "VARIETY": "Sichuan Spicy Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1487,
			  "BRAND": "ICA",
			  "VARIETY": "Asia Snabbnudlar Kycklingsmak",
			  "STYLE": "Pack",
			  "COUNTRY": "Sweden",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1486,
			  "BRAND": "Mom's Dry Noodle",
			  "VARIETY": "Onion Oil & Shrimp Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1485,
			  "BRAND": "Nongshim",
			  "VARIETY": "Spicy Tonkotsu Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1484,
			  "BRAND": "Ibumie",
			  "VARIETY": "Mee Baa..Gus Mi Goreng Spicier Original Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1483,
			  "BRAND": "Four Seas",
			  "VARIETY": "Hot & Spicy Instant Noodle (Mushroom & Beef Flavour)",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1482,
			  "BRAND": "Maruchan",
			  "VARIETY": "I Want To Eat Ramen' Shoyu Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1481,
			  "BRAND": "Master Kong",
			  "VARIETY": "Mushroom Stew Chicken Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1480,
			  "BRAND": "Paldo",
			  "VARIETY": "Jjol Bibim Men",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1479,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Easy Fideos Tomato Chicken Flavor Ramen Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1478,
			  "BRAND": "Ruski",
			  "VARIETY": "Tom Yam Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1477,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Moo Nam Tok Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1476,
			  "BRAND": "Thai Chef",
			  "VARIETY": "Instant Nudelsuppe Shrimp Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1475,
			  "BRAND": "Bamee",
			  "VARIETY": "Cup Oriental Style Instant Noodles Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1474,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodle Shrimp Tom Yum Flavour Jumbo Pack",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1473,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Cup Noodles Shrimp Tom Yum Flavour (Extreme)",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1472,
			  "BRAND": "Ruski",
			  "VARIETY": "Chicken Masala Flavour Instant Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1471,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Shrimp Creamy Tom Yum Flavour Jumbo Pack",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1470,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Cup Noodles Spicy Cheese Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1469,
			  "BRAND": "Bamee",
			  "VARIETY": "Oriental Style Instant Noodles Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1468,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Cup Noodles Seafood Pad Kee Mao Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1467,
			  "BRAND": "Ruski",
			  "VARIETY": "Creamy Tom Yam Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1466,
			  "BRAND": "Mama",
			  "VARIETY": "Oriental Style Instant Noodles Green Curry Flavour Jumbo Pack",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1465,
			  "BRAND": "Thai Chef",
			  "VARIETY": "Shrimp \"Tom Yum\" Instant Nudelsuppe",
			  "STYLE": "Pack",
			  "COUNTRY": "Germany",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1464,
			  "BRAND": "Nanyang Chef",
			  "VARIETY": "Penang White curry Noodle With Nanyang Chilli Paste",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1463,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch California Vegetable Ramen Noodles With Vegetables",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1462,
			  "BRAND": "Wei Lih",
			  "VARIETY": "Steam Instant Noodles Korean Salt & Rib Soup Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 1461,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Black Pepper Crab Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1460,
			  "BRAND": "Nissin",
			  "VARIETY": "Premium Instant Noodles Spicy Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1459,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Tom Yam Veg Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1458,
			  "BRAND": "Nissin",
			  "VARIETY": "Premium Instant Noodles Roasted Beef Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1457,
			  "BRAND": "Nissin",
			  "VARIETY": "Chu Qian Yi Ding Sesame Oil Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1456,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1455,
			  "BRAND": "Nissin",
			  "VARIETY": "Premium Instant Noodles XO Sauce Seafood Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1454,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Chilli Crab Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1453,
			  "BRAND": "Nissin",
			  "VARIETY": "Japanese Ramen Kyushu Black Instant Noodles With Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1452,
			  "BRAND": "Nissin",
			  "VARIETY": "Premium Instant Noodles Spicy Beef Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1451,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Tom Yam Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1450,
			  "BRAND": "Nissin",
			  "VARIETY": "Japanese Ramen Tokyo Shoyu Instant Noodles With Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1449,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Seafood Curry Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1448,
			  "BRAND": "Nissin",
			  "VARIETY": "Premium Instant Noodles Roasted Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1447,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Cream Of Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1446,
			  "BRAND": "Myojo",
			  "VARIETY": "Ippei-Chan Jumbo Night Market Style Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1445,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang Hokkien Prawn Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1444,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Jalapeno Cheddar Flavor Ramen Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1443,
			  "BRAND": "Nongshim",
			  "VARIETY": "Harmony Korean Spicy Noodle Dish With Chipotle",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1442,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Tom Yam Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1441,
			  "BRAND": "Nissin",
			  "VARIETY": "Souper Meal Chili Picante Chicken With Lime Flavor Ramen Noodle Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1440,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Dried Noodle With Beef Flavor Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1439,
			  "BRAND": "Adabi",
			  "VARIETY": "Mi Segera Mi Goreng Pedas Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1438,
			  "BRAND": "Maruchan",
			  "VARIETY": "Old Style Miso Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1437,
			  "BRAND": "Knorr",
			  "VARIETY": "Quick Serve Macaroni Abalone & Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1436,
			  "BRAND": "Chencun",
			  "VARIETY": "Rice Noodle Beef With Brown Sauce",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1435,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Assam Laksa Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1434,
			  "BRAND": "Maggi",
			  "VARIETY": "Hot Cup Perisa Kari",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1433,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1432,
			  "BRAND": "Maggi",
			  "VARIETY": "Senses Laksa Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1431,
			  "BRAND": "Maggi",
			  "VARIETY": "Extra Spicy Curry Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1430,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Buldak Bokkummyeon",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1429,
			  "BRAND": "Nissin",
			  "VARIETY": "Sabor A Gallina Fideos Con Instantanea",
			  "STYLE": "Pack",
			  "COUNTRY": "Colombia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1428,
			  "BRAND": "Myojo",
			  "VARIETY": "Chukazanmai Beijing Style Salt Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1427,
			  "BRAND": "Osaka Ramen",
			  "VARIETY": "Miso Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1426,
			  "BRAND": "Ottogi",
			  "VARIETY": "Cheese Bokki",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1425,
			  "BRAND": "Hao Way",
			  "VARIETY": "Instant Penang White Curry Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1424,
			  "BRAND": "Sainsbury's",
			  "VARIETY": "Curry Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1423,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "King Chef Seafood With Kimchi Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1422,
			  "BRAND": "Nissin",
			  "VARIETY": "Pan Asian Kitchen Spicy Szechuan Chicken Flavor Ramen Noodles",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1421,
			  "BRAND": "Nongshim",
			  "VARIETY": "Korean Clay Pot Ramyun Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1420,
			  "BRAND": "Maruchan",
			  "VARIETY": "I Want To Eat Ramen Shio",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1419,
			  "BRAND": "Vifon",
			  "VARIETY": "Ngon-Ngon Tom Yum Minced Pork Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1418,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ppushu Ppushu Grilled Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 1417,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Oat Noodle Abalone Flavored",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 1416,
			  "BRAND": "Myojo",
			  "VARIETY": "Chukazanmai Szechuan Style Miso",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1415,
			  "BRAND": "Chewy",
			  "VARIETY": "Instant Rice Vermicelli Original Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 1414,
			  "BRAND": "Paldo",
			  "VARIETY": "Cheese Ramyun (for US market)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1413,
			  "BRAND": "Chering Chang",
			  "VARIETY": "Curry La-Men",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1412,
			  "BRAND": "Chewy",
			  "VARIETY": "Non-Fried Ramen Noodles Taiwan Roast Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1411,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Prince Katsu Snack Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1410,
			  "BRAND": "Adabi",
			  "VARIETY": "Mi Segera Tom Yam Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1409,
			  "BRAND": "Baixiang Noodles",
			  "VARIETY": "Spicy Artificial Beef Flavour Instant Noodles With Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1408,
			  "BRAND": "Pamana",
			  "VARIETY": "Chicken Sopas Creamy Macaroni Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "Philippines",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1407,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Ramen House Thai Coconut Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1406,
			  "BRAND": "La Fonte",
			  "VARIETY": "Spaghetti With Mushroom Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1405,
			  "BRAND": "Maggi",
			  "VARIETY": "Masala Dumdaar Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1404,
			  "BRAND": "Thai Choice",
			  "VARIETY": "Instant Noodles Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1403,
			  "BRAND": "Tesco",
			  "VARIETY": "Everyday Value Chicken & Mushroom Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 1402,
			  "BRAND": "Pop Bihun",
			  "VARIETY": "Spesial Rasa Kari Ayam Pedas",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1401,
			  "BRAND": "Myojo",
			  "VARIETY": "Yomise No Yakisoba Shiodare Flavor With Black Pepper Mayonnaise",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1400,
			  "BRAND": "Pulmuone",
			  "VARIETY": "Nature Is Delicious Non-Fried Ramyun (Spicy Flavor) (New Version)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1399,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Oh! Ricey Pho Bo Instant Rice Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1398,
			  "BRAND": "Nissin",
			  "VARIETY": "Fried Noodle Specialist Tom Yam Mee Goreng Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1397,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Steam Seafood Flavor Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1396,
			  "BRAND": "Oyatsu",
			  "VARIETY": "Baby Star Snack Noodle Yakisoba Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1395,
			  "BRAND": "Snapdragon",
			  "VARIETY": "Singapore Laksa Curry Soup Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1394,
			  "BRAND": "Paldo",
			  "VARIETY": "Mild Kokomen (Prototype)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1393,
			  "BRAND": "Saji",
			  "VARIETY": "Sajimee Curry Soup Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1392,
			  "BRAND": "Miracle Noodle",
			  "VARIETY": "Miso Marvellous Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1391,
			  "BRAND": "Shan",
			  "VARIETY": "Shoop Instant Noodles Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Pakistan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1390,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Rasa Iga Penyet",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1389,
			  "BRAND": "Tiger Tiger",
			  "VARIETY": "Traveller's Choice Thai Red Curry Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 1388,
			  "BRAND": "Paldo",
			  "VARIETY": "Barbecue Ramyun (Prototype)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1387,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Red Pepper 7 Garlic Peperoncino",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1386,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Sukiyaki Style Noodle Stew",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1385,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Yaki-Udon Roast Soy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1384,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Hiyashi Udon Bonito Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1383,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Futomen Yakisoba",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1382,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Hiyashi Chuka Lemon Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1381,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Curry Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1380,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Chanpon",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1379,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Shio Yakisoba",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1378,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Yakisoba",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1377,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Yaki-Udon Mild Spicy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1376,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Katsuo Dashi Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1375,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Spaghetti Napolitan",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1374,
			  "BRAND": "Tokyo Noodle",
			  "VARIETY": "Spicy Garlic Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1373,
			  "BRAND": "Tesco",
			  "VARIETY": "Everyday Value Beef & Tomato Flavour Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1372,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Nagasaki Jjamppong",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1371,
			  "BRAND": "Campbell's",
			  "VARIETY": "Hearty Noodles Thai Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 1370,
			  "BRAND": "Papa",
			  "VARIETY": "Oriental Style Instant 'Kua-Chap'",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1369,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Hello Kitty Za Jiang (Soybean Sauce)",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1368,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Teriyaki Noodles With Japanese Yakisoba Sauce",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1367,
			  "BRAND": "Sawadee",
			  "VARIETY": "Instant Noodles Vegetable & Mushroom Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1366,
			  "BRAND": "Nongshim",
			  "VARIETY": "Sir Long Tang Creamy Beef Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1365,
			  "BRAND": "Four Seas",
			  "VARIETY": "Seaweed Hot & Spicy Instant Noodle Mushroom & Beef Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1364,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "Korean Style Stew Pork Flavour Noodle Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 1363,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Instant Noodle King Won Ton Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1362,
			  "BRAND": "Mamee",
			  "VARIETY": "Instant Noodles Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1361,
			  "BRAND": "Mamee",
			  "VARIETY": "Chef Creamy Tom Yam Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1360,
			  "BRAND": "Mamee",
			  "VARIETY": "Monster BBQ Flavour Snack Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1359,
			  "BRAND": "Mamee",
			  "VARIETY": "Chef Curry Laksa Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1358,
			  "BRAND": "Mamee",
			  "VARIETY": "SLLRRRP! Asam Laksa",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1357,
			  "BRAND": "Mamee",
			  "VARIETY": "Mie Goreng Indonesia Spicy Sambal",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1356,
			  "BRAND": "Mamee",
			  "VARIETY": "Chef Spicy Chicken Shiitake Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1355,
			  "BRAND": "Mamee",
			  "VARIETY": "Instant Vermicelli Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1354,
			  "BRAND": "Mamee",
			  "VARIETY": "Chef Creamy Tom Yam Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1353,
			  "BRAND": "Mamee",
			  "VARIETY": "Instant Noodles Vegetarian Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1352,
			  "BRAND": "Mamee",
			  "VARIETY": "SLLRRRP! Kari Berapi",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1351,
			  "BRAND": "Mamee",
			  "VARIETY": "Monster Chicken Flavour Snack Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1350,
			  "BRAND": "Mamee",
			  "VARIETY": "Chef Curry Laksa Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1349,
			  "BRAND": "Mamee",
			  "VARIETY": "Mie Goreng Indonesia Original Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1348,
			  "BRAND": "Mamee",
			  "VARIETY": "Instant Vermicelli Tom Yam Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1347,
			  "BRAND": "Paldo",
			  "VARIETY": "Bulnak Bokkummyun Spicy Fried Octopus Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1346,
			  "BRAND": "Oyatsu",
			  "VARIETY": "Baby Star Ramen Round Consomme Mini",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1345,
			  "BRAND": "Lotus Foods",
			  "VARIETY": "Forbidden Rice Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 1344,
			  "BRAND": "Lotus Foods",
			  "VARIETY": "Millet & Brown Rice Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1343,
			  "BRAND": "Lotus Foods",
			  "VARIETY": "Jade Pearl Rice Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1342,
			  "BRAND": "Ah Lai",
			  "VARIETY": "White Curry Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1341,
			  "BRAND": "Plats Du Chef",
			  "VARIETY": "Cuisine Adventures Chicken Pho Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "Canada",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1340,
			  "BRAND": "Indomie",
			  "VARIETY": "Taste Of Asia Mi Goreng Rasa Bulgogi Ala Korea",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1339,
			  "BRAND": "Kin-Dee",
			  "VARIETY": "Instant Rice Noodle Pad Thai",
			  "STYLE": "Tray",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1338,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Peppered Steak Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1337,
			  "BRAND": "Sakura Noodle",
			  "VARIETY": "Chikara Brand Udon Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1336,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Fresh Chow Mein Noodles With Seasoning",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1335,
			  "BRAND": "Sakura Noodle",
			  "VARIETY": "Chikara Brand Udon Hot & Spicy Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1334,
			  "BRAND": "Sakura Noodle",
			  "VARIETY": "Chikara Brand Udon Mushroom Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1333,
			  "BRAND": "Sakura Noodle",
			  "VARIETY": "Chikara Brand Udon Oriental Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1332,
			  "BRAND": "Sakura Noodle",
			  "VARIETY": "Chikara Brand Udon Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1331,
			  "BRAND": "Indomie",
			  "VARIETY": "Taste Of Asia Mi Kuah Rasa Tom Yum Ala Thailand",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1330,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Otafuku Okonomi Sauce Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1329,
			  "BRAND": "Vifon",
			  "VARIETY": "Oriental Style Instant Noodle Mi Ga Chicken Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Vietnam",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 1328,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Hello Kitty La Wei (Spicy Flavor)",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1327,
			  "BRAND": "Unif",
			  "VARIETY": "Unif-100 Instant Noodles Artificial Tart Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1326,
			  "BRAND": "Mamee",
			  "VARIETY": "Mi Segera SLLRRRP! Perencah Kari Xtra Pedas",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1325,
			  "BRAND": "Koka",
			  "VARIETY": "Spicy Shrimp Tom Yam Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1324,
			  "BRAND": "Ruski",
			  "VARIETY": "Instant Noodles Stewed Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1323,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "Korean Style Mushroom Chicken Flavour Cooking Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1322,
			  "BRAND": "Hi-Myon",
			  "VARIETY": "Instant Noodle Udon Hot & Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1321,
			  "BRAND": "Takamori Kosan",
			  "VARIETY": "Fresh Chow Mein Noodles With Seasoning",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1320,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Cup Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1319,
			  "BRAND": "Adabi",
			  "VARIETY": "Mi Segera Kari Ayam Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1318,
			  "BRAND": "Nissin",
			  "VARIETY": "Spa Oh Tarako Spaghetti",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1317,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Little Prince Brand Snack Noodles Original Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1316,
			  "BRAND": "Ottogi",
			  "VARIETY": "Japchae Vermicelli Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1315,
			  "BRAND": "Sainsbury's",
			  "VARIETY": "Chicken Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1314,
			  "BRAND": "Paldo",
			  "VARIETY": "Korean Traditional Beef Gomtangmen",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1313,
			  "BRAND": "Healtimie",
			  "VARIETY": "Green Barley Noodle Vegetable Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1312,
			  "BRAND": "Maruchan",
			  "VARIETY": "I Want To Eat Ramen Miso Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1311,
			  "BRAND": "Pop Bihun",
			  "VARIETY": "Spesial Rasa Soto Ayam",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1310,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Rice Noodle Cart Thai Peanut",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1309,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Oriental Style Instant Noodles Seafood Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1308,
			  "BRAND": "Nongshim",
			  "VARIETY": "Soon Veggie Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1307,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Cheese Curry",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1306,
			  "BRAND": "Koka",
			  "VARIETY": "Oriental Style Instant Noodles Tom Yam Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1305,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Instant Noodle Original Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1304,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Shoyu Tonkotsu Artificial Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1303,
			  "BRAND": "Western Family",
			  "VARIETY": "Instant Noodles In A Cup Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1302,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Yentafo Tom Yum Mohfai Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1301,
			  "BRAND": "Knorr",
			  "VARIETY": "Quick Serve Macaroni Shrimp Broth",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1300,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Red Nagasaki Jjampong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1299,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Noodles In A Cup Spicy Chicken Simulated Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 1298,
			  "BRAND": "Good Tto Leu Foods",
			  "VARIETY": "Lightning Beef Bone Tteokguk Rice Cake Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1297,
			  "BRAND": "GaGa",
			  "VARIETY": "Mie Gepeng Kuah Rasa Ayam Lada Hitam",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1296,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Ramen With Pickled Mustard Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1295,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Steam Mushroom Flavor Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1294,
			  "BRAND": "Thai Choice",
			  "VARIETY": "Instant Noodles Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1293,
			  "BRAND": "Myojo",
			  "VARIETY": "Prawn Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1292,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sabor A Carne Sopa Con Fideos",
			  "STYLE": "Cup",
			  "COUNTRY": "Colombia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1291,
			  "BRAND": "A-One",
			  "VARIETY": "Mì Ly Instant Noodles Mì Tôm Shrimp Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1290,
			  "BRAND": "Nongshim",
			  "VARIETY": "Sain Sain Garlic Teriyaki Fresh Cooked Udon Pasta",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1289,
			  "BRAND": "JML",
			  "VARIETY": "Braised Beef Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1288,
			  "BRAND": "Sau Tao",
			  "VARIETY": "QQ Scallop Seafood Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1287,
			  "BRAND": "Kimura",
			  "VARIETY": "Kumamoto Tonkotsu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1286,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Roast Beef & Onion Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1285,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Chow Mein Seafood Flavor Instant Stir-Fried Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1284,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Rice Noodle Cart Sweet Citrus Ginger",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1283,
			  "BRAND": "Nongshim",
			  "VARIETY": "Oolongmen Kimchi Cup Noodle Soup Mix",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1282,
			  "BRAND": "Koka",
			  "VARIETY": "Purple Wheat Noodles Aglio Olio",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1281,
			  "BRAND": "Tokachimen Koubou",
			  "VARIETY": "Jet Black Sesame Oil Pork Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 1280,
			  "BRAND": "Deshome",
			  "VARIETY": "Sun Dried Noodle Chlorella Powder Noodle With Curry Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1279,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Instant Noodles Mixed Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1278,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ppushu Ppushu Noodle Snack Bulgogi Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1277,
			  "BRAND": "Vifon",
			  "VARIETY": "Mì Gà Tìm Chua Cay Hot & Sour Chicken Flavor Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1276,
			  "BRAND": "Adabi",
			  "VARIETY": "Mi Bandung Prawn Mee",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1275,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Ramen With Stewed Pork Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1274,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Shiitake Flavor Spinach Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1273,
			  "BRAND": "Sainsbury's",
			  "VARIETY": "Basics Instant Noodles Chicken Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1272,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Baked Noodle Spicy Grilled Beef Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1271,
			  "BRAND": "Prima Taste",
			  "VARIETY": "Singapore Chilli Crab La Mian",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1270,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Instant Noodles Taste Sensations Creamy Shrimp Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1269,
			  "BRAND": "Chewy",
			  "VARIETY": "Rice Vermicelli Scallop With XO Sauce Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1268,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Dried Noodle With Jah Jan Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1267,
			  "BRAND": "ABC",
			  "VARIETY": "Mi Cup Rasa Soto Ayam Chicken Soto Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1266,
			  "BRAND": "ABC",
			  "VARIETY": "Selera Pedas Mi Goreng Cup Rasa Gulai Ayam Pedas Hot Gulai Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1265,
			  "BRAND": "ABC",
			  "VARIETY": "Rasa Ayam Bawang Chicken Onion Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1264,
			  "BRAND": "ABC",
			  "VARIETY": "Selera Pedas Mi Goreng Cup Rasa Ayam Pedas Limau Hot Chicken Lemon Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1263,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Curry X Gunpla RX-78-2 Gundam",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1262,
			  "BRAND": "ABC",
			  "VARIETY": "Mi Cup Rasa Kari Ayam Chicken Curry Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1261,
			  "BRAND": "Eat & Go",
			  "VARIETY": "Rasa Baso Sapi Meat Ball Mi Instan Cup",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1260,
			  "BRAND": "ABC",
			  "VARIETY": "Mi Goreng Pangsit Fried Noodle With Dumpling",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1259,
			  "BRAND": "Eat & Go",
			  "VARIETY": "Chicken Onion Mi Instan Cup",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1258,
			  "BRAND": "President",
			  "VARIETY": "Mi Goreng Rasa Ayam Chicken Flavoured Fried Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1257,
			  "BRAND": "ABC",
			  "VARIETY": "Mi Goreng Spesial Special Fried Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1256,
			  "BRAND": "Eat & Go",
			  "VARIETY": "Curry Chicken Mi Instan Cup",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1255,
			  "BRAND": "Thai Choice",
			  "VARIETY": "Instant Noodles Shrimp Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1254,
			  "BRAND": "Four Seas",
			  "VARIETY": "Sesame Oil Chicken Flavour Instant Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1253,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Teriyaki Chicken Flavor Chow Mein Noodles",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1252,
			  "BRAND": "Tesco",
			  "VARIETY": "Instant Noodles Chow Mein Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 1251,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Tom Saab Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1250,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "三養라면 (Samyang Ramyun) (South Korean Version)",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1249,
			  "BRAND": "Nissin",
			  "VARIETY": "Sabor A Pollo Sopa Con Fideos",
			  "STYLE": "Cup",
			  "COUNTRY": "Colombia",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1248,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Beef Flavour Tomato Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1247,
			  "BRAND": "Maruchan",
			  "VARIETY": "I Want To Eat Ramen Pork Tonkotsu Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1246,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Ramen House Chicken Vegetable Flavored Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1245,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Instant Noodle King Abalone & Chicken Flavoured",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1244,
			  "BRAND": "Unif",
			  "VARIETY": "Unif-100 Pickled Cayenne Flavor Beef Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1243,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Rice Vermicelli Chicken Flavour Instant Rice Vermicelli With Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 1242,
			  "BRAND": "Thai Pavilion",
			  "VARIETY": "Garlic Chili Instant Rice Noodles & Sauce",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1241,
			  "BRAND": "Nissin",
			  "VARIETY": "Donbei Kansai Soy Sauce Flavor Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1240,
			  "BRAND": "Maggi",
			  "VARIETY": "Big Kari Perencah (Big Curry Flavor) 2 Minute Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1239,
			  "BRAND": "SuperMi",
			  "VARIETY": "Rasa Ayam Spesial",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1238,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Sesame Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1237,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Creamy Tom Yum Minced Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1236,
			  "BRAND": "Emart",
			  "VARIETY": "Dare You Habanero Ramyun",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1235,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Miso Tonkotsu Artificial Pork Flavor Ramen Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1234,
			  "BRAND": "Sainsbury's",
			  "VARIETY": "Barbecue Beef Flavour Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1233,
			  "BRAND": "Nissin",
			  "VARIETY": "Sabor A Pollo Sopa Instantánea Con Fideos",
			  "STYLE": "Pack",
			  "COUNTRY": "Colombia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1232,
			  "BRAND": "GaGa",
			  "VARIETY": "Mie Gepeng Kuah Rasa Ayam Bawang Pedas",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1231,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Instant Noodle Shallot Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1230,
			  "BRAND": "Saji",
			  "VARIETY": "Sajimee Original Soto Soup Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1229,
			  "BRAND": "Kumamoto",
			  "VARIETY": "Tonkotsu Ramen MEGA Dragon",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1228,
			  "BRAND": "Maruchan",
			  "VARIETY": "Seimen Japanese Instant Ramen Noodles Shio Aji",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1227,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Chicken Kimchi Oriental Style Noodles With Soup Base",
			  "STYLE": "Bowl",
			  "COUNTRY": "Canada",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 1226,
			  "BRAND": "Master Kong",
			  "VARIETY": "Artificial Braised Beef Flavor Instant Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1225,
			  "BRAND": "Nissin",
			  "VARIETY": "Pan Asian Kitchen Sweet & Sour Chicken Flavor Ramen Noodles",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1224,
			  "BRAND": "HoMyeonDang",
			  "VARIETY": "Premium Noodle House Seafood Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1223,
			  "BRAND": "Sawadee",
			  "VARIETY": "Instant Noodles Prawn Oriental Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1222,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Classic Noodles With Japanese Yakisoba Sauce",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1221,
			  "BRAND": "ABC",
			  "VARIETY": "Selera Pedas Hot Semur Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1220,
			  "BRAND": "Nissin",
			  "VARIETY": "Ultraman Instant Noodle Pork Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1219,
			  "BRAND": "Tokyo Noodle",
			  "VARIETY": "Mini Instant Noodle Spicy Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1218,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Ho Fan Beef Soup Flavored",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1217,
			  "BRAND": "Doll",
			  "VARIETY": "Hello Kitty Dim Sum Noodle Japanese Curry Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1216,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Low Fat Noodles Chilli Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 1215,
			  "BRAND": "GaGa",
			  "VARIETY": "Mi Instan Cup Milk Chicken Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1214,
			  "BRAND": "Eat & Go",
			  "VARIETY": "Rendang Beef Flavour Fried Instant Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1213,
			  "BRAND": "Nan Jie Cun",
			  "VARIETY": "Hot -Dry Instant Noodles Chilli Flavour",
			  "STYLE": "Tray",
			  "COUNTRY": "China",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 1212,
			  "BRAND": "Ruski",
			  "VARIETY": "Instant Noodles Tom Yum Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1211,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Instant Noodle With Soup Base Artificial Chicken Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1210,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Hell Spicy Mala",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1209,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Chicken Mushroom Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1208,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "Korean Style Stew Prok Flavour Cooking Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1207,
			  "BRAND": "Nissin",
			  "VARIETY": "UFO Yakisoba With Wasabi Mayonnaise",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1206,
			  "BRAND": "China Best",
			  "VARIETY": "Frozen Satay Sauce Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 1205,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Pork Flavour With Black Pepper",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1204,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Sabor A Gallina",
			  "STYLE": "Cup",
			  "COUNTRY": "Colombia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1203,
			  "BRAND": "GaGa",
			  "VARIETY": "Mie Gepeng Kuah Rasa Soto Cabe Hijau",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1202,
			  "BRAND": "Sugakiya Foods",
			  "VARIETY": "Udon Miso Stew",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1201,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Instant Noodle Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1200,
			  "BRAND": "Men-Sunaoshi",
			  "VARIETY": "Tonkotsu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1199,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Noodles Chicken Green Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1198,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Maesaengyitangmyun Baked Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1197,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Chilli Tomato",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1196,
			  "BRAND": "Nissin",
			  "VARIETY": "Bowl Noodles Chicken Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1195,
			  "BRAND": "Sawadee",
			  "VARIETY": "Instant Noodles Spicy Tomato Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 1194,
			  "BRAND": "Paldo",
			  "VARIETY": "Namja Ramyun (US Version)",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1193,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Curry Noodles With Japanese Yakisoba Sauce",
			  "STYLE": "Cup",
			  "COUNTRY": "Germany",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1192,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Ramen With Simmered Pork Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1191,
			  "BRAND": "GaGa",
			  "VARIETY": "Seribu 1000 Goreng Spesial",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1190,
			  "BRAND": "Sanrio",
			  "VARIETY": "Hello Kitty Hakata Shoyutonkotsu Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1189,
			  "BRAND": "Acecook",
			  "VARIETY": "Comet Mori Yukino Tan-tan men",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1188,
			  "BRAND": "Chencun",
			  "VARIETY": "Braised Pork Ribs",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1187,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun Cup",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1186,
			  "BRAND": "Nissin",
			  "VARIETY": "Sabor A Carne Sopa Instantánea Con Fideos",
			  "STYLE": "Pack",
			  "COUNTRY": "Colombia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1185,
			  "BRAND": "Sainsbury's",
			  "VARIETY": "Basics Instant Noodles Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1184,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Pokemon Shoyu Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1183,
			  "BRAND": "Paldo",
			  "VARIETY": "Cheese Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1182,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Go Noodles Xtreme Hot & Spicy Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1181,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Star Popeye Ramyun Snack",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1180,
			  "BRAND": "Wei Lih",
			  "VARIETY": "What’s That? Leisure Meatballs Spicy Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1179,
			  "BRAND": "Myojo",
			  "VARIETY": "Chukazanmai Guangdong Style Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1178,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Black Spicy Pot-au-feu Flavor Premium Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1177,
			  "BRAND": "ABC",
			  "VARIETY": "Mi ABC Rasa Ayam Bawang (Onion Chicken)",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1176,
			  "BRAND": "Maruchan",
			  "VARIETY": "Old Style Shio Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1175,
			  "BRAND": "Healtimie",
			  "VARIETY": "Green Barley Noodle Milk Chicken Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1174,
			  "BRAND": "Itomen",
			  "VARIETY": "Crab Flavor Instant Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1173,
			  "BRAND": "Pop Bihun",
			  "VARIETY": "Spesial Goreng Special",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1172,
			  "BRAND": "Koyo",
			  "VARIETY": "Seaweed Ramen Made With Organic Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1171,
			  "BRAND": "Tiger Tiger",
			  "VARIETY": "Traveller's Choice Indian Tikka Masala Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1170,
			  "BRAND": "Acecook",
			  "VARIETY": "Jan Jan Yakisoba",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1169,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Noodles In A Cup Beef Simulated Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 1168,
			  "BRAND": "Nissin",
			  "VARIETY": "Donbei Curry Udon (West Japanese)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1167,
			  "BRAND": "Kabuto Noodles",
			  "VARIETY": "Miso Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1166,
			  "BRAND": "Unif",
			  "VARIETY": "Man Han Feast Sichuan Chilli Eel Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1165,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein With Shrimp Chow Mein Noodles",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1164,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Bowl Chicken Simulated Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Canada",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1163,
			  "BRAND": "Chewy",
			  "VARIETY": "Rice Vermicelli Spicy Beef With Chilli Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1162,
			  "BRAND": "Nissin",
			  "VARIETY": "Chanpon Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1161,
			  "BRAND": "GaGa",
			  "VARIETY": "100 Green Chilli Soto Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1160,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Chacharoni",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1159,
			  "BRAND": "Peyang",
			  "VARIETY": "Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1158,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho XO Sauce Seafood Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1157,
			  "BRAND": "Golden Wonder",
			  "VARIETY": "The Nation's Noodle Beef & Tomato Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1156,
			  "BRAND": "Vifon",
			  "VARIETY": "Oriental Style Instant Vermicelli Sour Crab Flavour Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1155,
			  "BRAND": "Komforte Chockolates",
			  "VARIETY": "Savory Ramen",
			  "STYLE": "Bar",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1154,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "Korean Style Shrimp Flavour Cooking Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1153,
			  "BRAND": "Wu-Mu",
			  "VARIETY": "Spicy Flavor Tomato Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1152,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Tomato & Basil Shio Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1151,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Fatafat Vegetable Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1150,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Krrish Instant Noodles Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1149,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Preeti Instant Noodles Chicken Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1148,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Miteri Instant Noodles Vegetable Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1147,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Rumpum Chicken Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1146,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "2pm Precooked Noodles Chicken Curry Delight",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1145,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Fatafat Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1144,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Krrish Instant Noodles Vegetable Curry Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1143,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Rumpum Vegetable Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1142,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Miteri Instant Noodles Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1141,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Joker Ready To Eat Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1140,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Preeti Instant Noodles Veg Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1139,
			  "BRAND": "Asian Thai Foods",
			  "VARIETY": "Gaurav Chicken Seasoning",
			  "STYLE": "Pack",
			  "COUNTRY": "Nepal",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1138,
			  "BRAND": "Tablemark",
			  "VARIETY": "Downtown Ramen Shop Shoyu",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1137,
			  "BRAND": "Koka",
			  "VARIETY": "Oriental Style Instant Noodles Crab Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1136,
			  "BRAND": "Nissin",
			  "VARIETY": "Yakisoba",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1135,
			  "BRAND": "Indomie",
			  "VARIETY": "Instant Noodle Beef & Lime Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1134,
			  "BRAND": "Hi-Myon",
			  "VARIETY": "Katsuo Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1133,
			  "BRAND": "Kamfen",
			  "VARIETY": "E-Men Noodles Abalone Soup Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1132,
			  "BRAND": "Tesco",
			  "VARIETY": "Everyday Value Spicy Curry Flavour Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1131,
			  "BRAND": "Wei Lih",
			  "VARIETY": "What’s That? Leisure Meatballs Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1130,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Habanero Lime Shrimp Flavor Ramen Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1129,
			  "BRAND": "Oyatsu",
			  "VARIETY": "Baby Star Ramen Round Chikinmini",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1128,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Special Instant Pancit Bihon With Kalamansi",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1127,
			  "BRAND": "Campbell's",
			  "VARIETY": "Hearty Noodles Chicken Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1126,
			  "BRAND": "GaGa",
			  "VARIETY": "Mie Jepeng Goreng Rasa Ayam Lada Hitam",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1125,
			  "BRAND": "Myojo",
			  "VARIETY": "Japanese Style Noodles Shio Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1124,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Ganjjampong",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1123,
			  "BRAND": "Maruchan",
			  "VARIETY": "Fresh Yaki-Soba Stir Fry Noodles With Seasoning Sauce Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1122,
			  "BRAND": "Nagao Noodle",
			  "VARIETY": "Ramen Kamen Thasos Galle Pork Bone",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1121,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Oat Noodle Sesame Oil Flavored",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1120,
			  "BRAND": "ABC",
			  "VARIETY": "Selera Pedas Mi Rebus Hot Gulai Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1119,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Taste Sensation Instant Noodles Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1118,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Kimchi Bowl Noodles Oriental Noodle With Soup Base",
			  "STYLE": "Bowl",
			  "COUNTRY": "Canada",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1117,
			  "BRAND": "Thai Pavilion",
			  "VARIETY": "spicy Pad Thai Instant Noodles & Sauce",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1116,
			  "BRAND": "Tokyo Noodle",
			  "VARIETY": "Mini Instant Noodles Artificial Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1115,
			  "BRAND": "Nissin",
			  "VARIETY": "Pan Asian Kitchen Sukiyaki Beef Flavor Savory Soy Sauce Ramen Noodles",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1114,
			  "BRAND": "Maitri",
			  "VARIETY": "Vegetarian Fried Noodles (Mie Goreng)",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1113,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Samyang Ramyun (SK Version)",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1112,
			  "BRAND": "Mama",
			  "VARIETY": "Oriental Style Instant Kua-Chap Clear Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1111,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "Korean Style Stew Beef Cooking Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1110,
			  "BRAND": "GS25",
			  "VARIETY": "Gonghwachun Jjajangmyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1109,
			  "BRAND": "La Fonte",
			  "VARIETY": "Spaghetti With Bolognese Sauce",
			  "STYLE": "Box",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1108,
			  "BRAND": "Chencun",
			  "VARIETY": "Spicy Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1107,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Kimchi Flavour Instant Noodle With Soup Base",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1106,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Rich Soy Sauce With Roast Pork (2 Slices)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1105,
			  "BRAND": "Nongshim",
			  "VARIETY": "Doong Ji Authentic Korean Cold Noodles With Chili Sauce",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1104,
			  "BRAND": "Western Family",
			  "VARIETY": "Instant Noodles Chicken Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1103,
			  "BRAND": "Myojo",
			  "VARIETY": "Ippei-chan Yomise No Yakisoba Teriyaki Mayo Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1102,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Mild Mexican Chilli",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1101,
			  "BRAND": "Eat & Go",
			  "VARIETY": "Spicy Chicken Mi Instan Cup",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1100,
			  "BRAND": "Baltix",
			  "VARIETY": "Instant Noodles With Chicken Flavour Broth",
			  "STYLE": "Pack",
			  "COUNTRY": "Estonia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1099,
			  "BRAND": "Baltix",
			  "VARIETY": "Instant Noodles With Beef Flavour Broth",
			  "STYLE": "Pack",
			  "COUNTRY": "Estonia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1098,
			  "BRAND": "Tropicana Slim",
			  "VARIETY": "Low Fat Noodles Hainan Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1097,
			  "BRAND": "Amianda",
			  "VARIETY": "Homely Dried Noodles - Sesame Pate",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1096,
			  "BRAND": "Amianda",
			  "VARIETY": "Tachia Noodles - Hot & Spicy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1095,
			  "BRAND": "Amianda",
			  "VARIETY": "Tachia Dried Noodles - Fried Shallot",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1094,
			  "BRAND": "Amianda",
			  "VARIETY": "Thin Noodles - Sesame Oil",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1093,
			  "BRAND": "Amianda",
			  "VARIETY": "Hakka Flat Noodles - Satay Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1092,
			  "BRAND": "Amianda",
			  "VARIETY": "Tachia Dried Noodles - Rou Zhou Meat Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1091,
			  "BRAND": "Amianda",
			  "VARIETY": "Homely Dried Noodles - Original Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1090,
			  "BRAND": "Amianda",
			  "VARIETY": "Dried Noodles - Spicy Sauerkraut",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1089,
			  "BRAND": "Amianda",
			  "VARIETY": "Hakka Flat Noodles - Fried Bean Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1088,
			  "BRAND": "Amianda",
			  "VARIETY": "Tachia Dried Noodles - Peppery",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1087,
			  "BRAND": "MyKuali",
			  "VARIETY": "Penang White Curry Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1086,
			  "BRAND": "Sawadee",
			  "VARIETY": "Indian Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1085,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Hao Hao Mi Goreng Shrimp & Onion Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1084,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Noodles In A Cup Chicken Simulated Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 1083,
			  "BRAND": "Nissin",
			  "VARIETY": "GooTa Demi Hamburg-Men",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1082,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Cabe Ijo",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1081,
			  "BRAND": "Deshome",
			  "VARIETY": "Aloe Noodle Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1080,
			  "BRAND": "Deshome",
			  "VARIETY": "Black Eyed Beans Noodle Basil Sauce & Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1079,
			  "BRAND": "Deshome",
			  "VARIETY": "Aloe Noodle Vegetable Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1078,
			  "BRAND": "Deshome",
			  "VARIETY": "Black Eyed Beans Noodle Spicy Soybean Sauce & Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1077,
			  "BRAND": "Deshome",
			  "VARIETY": "Aloe Noodle Red Onion & Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1076,
			  "BRAND": "Deshome",
			  "VARIETY": "Black Eyed Beans Noodle Vegetable Sauce & Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1075,
			  "BRAND": "Deshome",
			  "VARIETY": "Aloe Noodle With Basil Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1074,
			  "BRAND": "Deshome",
			  "VARIETY": "Pollen Noodles Sesame Sauce & Soy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1073,
			  "BRAND": "Deshome",
			  "VARIETY": "Black Eyed Bean Noodle Red Onion Sauce & Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1072,
			  "BRAND": "Deshome",
			  "VARIETY": "Aloe Noodle With Spicy Soybean Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1071,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Soy Sauce Taste",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1070,
			  "BRAND": "HoMyeonDang",
			  "VARIETY": "Premium Noodle House Pork & Seafood Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1069,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Rich Miso Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1068,
			  "BRAND": "Koka",
			  "VARIETY": "Oriental Instant Noodles Stir Fried Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1067,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodle Red Shock",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1066,
			  "BRAND": "Tasty Bite",
			  "VARIETY": "1 Step-1 Minute Asian Noodles Pad Thai",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1065,
			  "BRAND": "Tasty Bite",
			  "VARIETY": "1 Step-1 Minute Asian Noodles Kung Pao",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1064,
			  "BRAND": "Tasty Bite",
			  "VARIETY": "1 Step-1 Minute Asian Noodles Mushroom Lo Mein",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1063,
			  "BRAND": "Tasty Bite",
			  "VARIETY": "1 Step-1 Minute Asian Noodles Thai Basil",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1062,
			  "BRAND": "Tasty Bite",
			  "VARIETY": "1 Step-1 Minute Asian Noodles Lemongrass Ginger",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1061,
			  "BRAND": "Tasty Bite",
			  "VARIETY": "1 Step-1 Minute Asian Noodles Toasted Sesame",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1060,
			  "BRAND": "Star Anise Foods",
			  "VARIETY": "Happy Pho Vietnamese Brown Rice Noodle Soup Garlic Goodness",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1059,
			  "BRAND": "Mamee",
			  "VARIETY": "Oriental Noodles Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1058,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Dry Noodle Mandarin Noodle - Original Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1057,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Dry Noodle Hakka Noodle - Spicy Sesame Oil Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1056,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Dry Noodle Mandarin Noodle - Onion Oil Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1055,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Dry Noodle QQ Thin Noodle - BBQ Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1054,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "No. 10 Mandarin Noodle - Black Pepper Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1053,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Dry Noodle Tainan Noodle - Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1052,
			  "BRAND": "A-Sha Dry Noodle",
			  "VARIETY": "Dry Noodle Hakka Noodle - Chili Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1051,
			  "BRAND": "Maruchan",
			  "VARIETY": "Seimen Japanese Instant Ramen Noodles Soy Sauce Taste",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1050,
			  "BRAND": "Knorr",
			  "VARIETY": "Japanese Pork Bone Flavour Quick Serve Macaroni",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1049,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Bowl Beef Simulated Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Canada",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1048,
			  "BRAND": "Ottogi",
			  "VARIETY": "Cheese Bokki",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1047,
			  "BRAND": "New Touch",
			  "VARIETY": "Yakisoba Noodle",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1046,
			  "BRAND": "Myojo",
			  "VARIETY": "Stir Fry Noodles Japanese Style Noodles With Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1045,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Chicken",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1044,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun Noodle Spicy Mushroom",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 1043,
			  "BRAND": "Chewy",
			  "VARIETY": "Rice Vermicelli Satay Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1042,
			  "BRAND": "Nongshim",
			  "VARIETY": "Potato Pork Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1041,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Instant Noodles Super Chow Mein",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1040,
			  "BRAND": "Western Family",
			  "VARIETY": "Instant Noodles Vegetable Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 1039,
			  "BRAND": "Maruchan",
			  "VARIETY": "Bowl Hot & Spicy Shrimp Flavor Ramen Noodles With Vegetables",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1038,
			  "BRAND": "Itomen",
			  "VARIETY": "Chanponmen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1037,
			  "BRAND": "Emart",
			  "VARIETY": "Dare You Habanero Jjamppong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1036,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "Korean Style Spicy Shrimp Noodle Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1035,
			  "BRAND": "Wei Lih",
			  "VARIETY": "Spicy Sichuan Flavor Instant Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1034,
			  "BRAND": "Western Family",
			  "VARIETY": "Instant Noodles In A Cup Spicy Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 1033,
			  "BRAND": "Nissin",
			  "VARIETY": "King Cup Noodle BBQ Chicken & Onion",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1032,
			  "BRAND": "Mama",
			  "VARIETY": "Authentic Thai Cuisine Pad Thai",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1031,
			  "BRAND": "HoMyeonDang",
			  "VARIETY": "Premium Noodle House Don Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1030,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "60 Ingredients Assorted Vegetable SK Version",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1029,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Nagasaki Crab Jjampong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1028,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Buldalk Bokkeummyeon (Hot Fried Chicken Ramyun)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1027,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Yukgaejang Beef Ramyun",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1026,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Bajirak Kalgugsu",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1025,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Hot Chacharoni",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1024,
			  "BRAND": "HoMyeonDang",
			  "VARIETY": "Premium Noodle House Tofu Fried Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1023,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Samyang Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1022,
			  "BRAND": "HoMyeonDang",
			  "VARIETY": "Premuim Noodle House Crab Jjampong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 1021,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Beef Flavor Ramyun (SK Version)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1020,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Nagasaki Jjampong",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 1019,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Kimchi Ramyun (SK Version)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1018,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Ganjjampong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1017,
			  "BRAND": "Samyang Foods",
			  "VARIETY": "Sutah (SK Version)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1016,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Habanero Lime Chicken Flavor Ramen Noodle Soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1015,
			  "BRAND": "Tradition",
			  "VARIETY": "Oriental Style Ramen Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1014,
			  "BRAND": "Nissin",
			  "VARIETY": "King Spa Oh Peperoncino Spaghetti (日清生タイプSpa王 ペペロンチーノ)",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 1013,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Oh! Ricey Hủ Tiếu Sườn Heo (Pork Spareribs Flavour)",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1012,
			  "BRAND": "Unox",
			  "VARIETY": "Good Noodles Oosterse Kip (Oriental Chicken)",
			  "STYLE": "Pack",
			  "COUNTRY": "Holland",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1011,
			  "BRAND": "Maruchan",
			  "VARIETY": "Bowl Hot & Spicy Chicken Flavor Ramen Noodles With Vegetables",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1010,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "Korean Style Spicy Beef Noodle Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 1009,
			  "BRAND": "Western Family",
			  "VARIETY": "Instant Noodles In A Cup Oriental",
			  "STYLE": "Cup",
			  "COUNTRY": "Canada",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1008,
			  "BRAND": "Ottogi",
			  "VARIETY": "Sesame Flavor Noodle Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1007,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Sesame Oil Flavour Noodles With Soup Base",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1006,
			  "BRAND": "Amino",
			  "VARIETY": "Barszcz czerwony (Borscht)",
			  "STYLE": "Pack",
			  "COUNTRY": "Poland",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 1005,
			  "BRAND": "Four Seas",
			  "VARIETY": "Chicken Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 1004,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Artificial Pork Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 1003,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Spicy Teriyaki Beef",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 1002,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Bowl Spicy Chicken Simulated Flavour",
			  "STYLE": "Bowl",
			  "COUNTRY": "Canada",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1001,
			  "BRAND": "Paldo",
			  "VARIETY": "ДОШИРАК (Dosirac) Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 1000,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Beef Taco Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 999,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Tony's Doner Kebab",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 998,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun Black Spicy Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 997,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "Miso Stew Instant Udon (Winter)",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 996,
			  "BRAND": "Maruchan",
			  "VARIETY": "Bowl Chicken Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 995,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Instant Noodles Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 994,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Tom Yum Shrimp Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 993,
			  "BRAND": "Unox",
			  "VARIETY": "Sate",
			  "STYLE": "Pack",
			  "COUNTRY": "Holland",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 992,
			  "BRAND": "Prima Taste",
			  "VARIETY": "Singapore Laksa La Mian",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 991,
			  "BRAND": "Prima Taste",
			  "VARIETY": "Singapore Curry La Mian",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 990,
			  "BRAND": "Nissin",
			  "VARIETY": "Pan Asian Kitchen Spicy Pad Thai",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 989,
			  "BRAND": "GS25",
			  "VARIETY": "Gonghwachun Jjamppong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 988,
			  "BRAND": "Amino",
			  "VARIETY": "Ogorkowa",
			  "STYLE": "Pack",
			  "COUNTRY": "Poland",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 987,
			  "BRAND": "Trident",
			  "VARIETY": "Singapore Soft Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Australia",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 986,
			  "BRAND": "Paldo",
			  "VARIETY": "Jong-Gah-Jip Kimchi Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 985,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Go Noodles Thai Hot & Spicy Tom Yum",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 984,
			  "BRAND": "Sun Noodle",
			  "VARIETY": "Ramen Shoyu Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 983,
			  "BRAND": "Sun Noodle",
			  "VARIETY": "Tantanmen Spicy Sesame (Mild)",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 982,
			  "BRAND": "Sun Noodle",
			  "VARIETY": "Ramen Miso Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 981,
			  "BRAND": "S&S",
			  "VARIETY": "Saimin",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 980,
			  "BRAND": "Sun Noodle",
			  "VARIETY": "Cold Ramen Soy Sauce Vinaigrette",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 979,
			  "BRAND": "Sun Noodle",
			  "VARIETY": "Nama Soba Buckwheat Noodle",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 978,
			  "BRAND": "Sun Noodle",
			  "VARIETY": "Ramen Pork Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 977,
			  "BRAND": "Sun Noodle",
			  "VARIETY": "Yakisoba",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 976,
			  "BRAND": "Nissin",
			  "VARIETY": "Donbei Tensoba",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 975,
			  "BRAND": "Ottogi",
			  "VARIETY": "Spaghetti Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 974,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Chilli Beef Flavour",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 973,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Ramen House Spicy Chicken Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 972,
			  "BRAND": "Springlife",
			  "VARIETY": "Spinach With Organic Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 971,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Soup Bowl Chinese Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 970,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Noodle Express Spicy Szechuan",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 969,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Soup Bowl Vietnamese Pho",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 968,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Noodle Express Teriyaki",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 967,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Soup Bowl South Korean Kimchi",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 966,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Ramen House Spring Vegetable Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 965,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Noodle Express Chinese Chow Mein",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 964,
			  "BRAND": "Nissin",
			  "VARIETY": "Raoh Backfat Rich Soy Sauce Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 963,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Mr. Chu’s Golden Noodle No. 7 Sticky Rib",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 962,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Soup Spicy Seafood Flavor (New Version)",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 961,
			  "BRAND": "Trident",
			  "VARIETY": "Chow Mein Soft Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Australia",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 960,
			  "BRAND": "Nissin",
			  "VARIETY": "Bowl Noodles Hot & Spicy Super Picante",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 959,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "ARCHE Naturküche Ramen Mit Ingwer",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 958,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "Soy Sauce Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 957,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "100% Vegetarian Soy Sauce Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 956,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "Sesame Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 955,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "Miso Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 954,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "ARCHE Naturküche Japanische Nudelsuppe",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 953,
			  "BRAND": "Sakurai Foods",
			  "VARIETY": "Soy Sauce Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 952,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Sweet & Spicy",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 951,
			  "BRAND": "Vifon",
			  "VARIETY": "Pomidorowa (Mild Tomato)",
			  "STYLE": "Pack",
			  "COUNTRY": "Poland",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 950,
			  "BRAND": "Ottogi",
			  "VARIETY": "Kiss Myon",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 949,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Instant Noodles Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 948,
			  "BRAND": "Trident",
			  "VARIETY": "Hot & Spicy 2 Minute Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Australia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 947,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Jalapeno Cheddar",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 946,
			  "BRAND": "Right Foods",
			  "VARIETY": "Dr. McDougall's Vegan Chicken Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 945,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Jamaican Jerk!",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 944,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Oriental Style Instant Noodles (Dry method)",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 943,
			  "BRAND": "Amino",
			  "VARIETY": "Zurek",
			  "STYLE": "Pack",
			  "COUNTRY": "Poland",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 942,
			  "BRAND": "Kamfen",
			  "VARIETY": "E-men Lobster Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 941,
			  "BRAND": "Ko-Lee",
			  "VARIETY": "Go Noodles Chicken Special",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 940,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Sour Soup Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 939,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Sweet & Sour",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 938,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Four Cheese",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 937,
			  "BRAND": "Mama",
			  "VARIETY": "Shrimp (TOM YUM)",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 936,
			  "BRAND": "Yamachan",
			  "VARIETY": "Mild Tonkotsu",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 935,
			  "BRAND": "Maruchan",
			  "VARIETY": "Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 934,
			  "BRAND": "Nongshim",
			  "VARIETY": "Jinjja Jinjja Flamin' Hot & Nutty",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 933,
			  "BRAND": "Paldo",
			  "VARIETY": "Kokomen Spicy Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 932,
			  "BRAND": "Paldo",
			  "VARIETY": "Namja Ramen (USA version)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 931,
			  "BRAND": "Kamfen",
			  "VARIETY": "dried Mix Noodles Soya Bean Paste",
			  "STYLE": "Tray",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 930,
			  "BRAND": "Maruchan",
			  "VARIETY": "35% Less Sodium Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 929,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Good Artificial Minced Pork Bean Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 928,
			  "BRAND": "Kamfen",
			  "VARIETY": "Dried Mix Noodles Artificial Spicy Pork",
			  "STYLE": "Tray",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 927,
			  "BRAND": "Paldo",
			  "VARIETY": "Kokomen Spicy Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 926,
			  "BRAND": "Ibumie",
			  "VARIETY": "VegeMee Vegetarian Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 925,
			  "BRAND": "Emart",
			  "VARIETY": "Dare You! Habanero Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 924,
			  "BRAND": "Maruchan",
			  "VARIETY": "35% Less Sodium Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 923,
			  "BRAND": "Ibumie",
			  "VARIETY": "LadMee Hot Pepper",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 922,
			  "BRAND": "Sunlee",
			  "VARIETY": "Shitake Mushroom Vernicalli",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 921,
			  "BRAND": "Ottogi",
			  "VARIETY": "Jjajang Bokki",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 920,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Hot & Spicy Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 919,
			  "BRAND": "Maruchan",
			  "VARIETY": "35% Less Sodium Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 918,
			  "BRAND": "Nongshim",
			  "VARIETY": "Tempura Udon Flavor Cup Ramyun",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 917,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Good Chicken Abalone Bean Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 916,
			  "BRAND": "Goku Uma",
			  "VARIETY": "Seafood Flavor Japanese Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 915,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Casserole Beef Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 914,
			  "BRAND": "Nissin",
			  "VARIETY": "Ramen Shop Sapporo Miso",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 913,
			  "BRAND": "Nongshim",
			  "VARIETY": "Spicy Shrimp Cup Ramyun",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 912,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 911,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Cucharealo Habanero Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 910,
			  "BRAND": "Paldo",
			  "VARIETY": "Namja Ramyun",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 909,
			  "BRAND": "Indomie",
			  "VARIETY": "Kriuuk Bawang",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 908,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Original Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 907,
			  "BRAND": "Nongshim",
			  "VARIETY": "Neoguri Spicy Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 906,
			  "BRAND": "Daddy",
			  "VARIETY": "Kari 365 Curry Flavour",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 905,
			  "BRAND": "Tradition",
			  "VARIETY": "Vegetable Instant Noodle soup",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 904,
			  "BRAND": "Myojo",
			  "VARIETY": "Ippei-chan Yomise-No Yakisoba Oriental",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 903,
			  "BRAND": "Han's South Korea",
			  "VARIETY": "Rice Noodle With Seafood Flavored Soup",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 902,
			  "BRAND": "Sunlee",
			  "VARIETY": "Pho Bo Beef Flavour Rice Stick",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 901,
			  "BRAND": "Sarimi",
			  "VARIETY": "Rasa Ayam Bawang",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 900,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 899,
			  "BRAND": "FMF",
			  "VARIETY": "Chow Tomato",
			  "STYLE": "Pack",
			  "COUNTRY": "Fiji",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 898,
			  "BRAND": "Long Kow",
			  "VARIETY": "Crystal Noodles Savory Shoyu",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 897,
			  "BRAND": "FMF",
			  "VARIETY": "Chow Masala",
			  "STYLE": "Pack",
			  "COUNTRY": "Fiji",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 896,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Good Tomyum Kung Bean Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 895,
			  "BRAND": "SuperMi",
			  "VARIETY": "Sedaaap Mi Goreng",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 894,
			  "BRAND": "Han's South Korea",
			  "VARIETY": "Rice Noodle With Kimchi Flavored Soup",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 893,
			  "BRAND": "Paldo",
			  "VARIETY": "Bowl Noodle Shrimp Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 892,
			  "BRAND": "ABC",
			  "VARIETY": "Selera Pedas Hot Tomato Soup Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 891,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Hao Hao Mushroom",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 890,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Mushroom Flavor Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 889,
			  "BRAND": "Yamachan",
			  "VARIETY": "Rich Shoyu Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 888,
			  "BRAND": "Yamachan",
			  "VARIETY": "Nagasaki Sara Udon Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 887,
			  "BRAND": "Yamachan",
			  "VARIETY": "Cold Noodles With Lemon Soy Dressing",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 886,
			  "BRAND": "Yamachan",
			  "VARIETY": "Tonkotsu-Shoyu Rich Pork Flavor Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 885,
			  "BRAND": "Yamachan",
			  "VARIETY": "Miso Ramen Rich Sapporo Miso",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 884,
			  "BRAND": "Yamachan",
			  "VARIETY": "Miso Ramen - Mild",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 883,
			  "BRAND": "Yamachan",
			  "VARIETY": "Shio Ramen Seafood Mild",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 882,
			  "BRAND": "SuperMi",
			  "VARIETY": "GoBang",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 881,
			  "BRAND": "Han's South Korea",
			  "VARIETY": "Rice Noodle With Hot & Spicy",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 880,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "South Korean Style Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 879,
			  "BRAND": "Song Hak",
			  "VARIETY": "Rice Topokki",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 878,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Short Cuts Lime Chili",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 877,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Bowl (New)",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 876,
			  "BRAND": "Sarimi",
			  "VARIETY": "Soto Koya Pedasss",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 875,
			  "BRAND": "Sunlee",
			  "VARIETY": "Artificial Chicken Rice Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 874,
			  "BRAND": "Fuji Mengyo",
			  "VARIETY": "Nabeyaki Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 873,
			  "BRAND": "Vifon",
			  "VARIETY": "Viet Rice Noodles Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 872,
			  "BRAND": "Nongshim",
			  "VARIETY": "Chapagetti",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 871,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Hot & Sour Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 870,
			  "BRAND": "SuperMi",
			  "VARIETY": "Mi Keriting Rasa Ayam Bawang",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 869,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Good Chicken Bean Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 868,
			  "BRAND": "CJ CheilJedang",
			  "VARIETY": "Katsuobushi Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 867,
			  "BRAND": "Indomie",
			  "VARIETY": "Rasa Coto Makassar",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 866,
			  "BRAND": "Master Kong",
			  "VARIETY": "Mianba",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 865,
			  "BRAND": "Little Cook",
			  "VARIETY": "Stewed Duck",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 864,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Chinese Spices Tong Tsai Bean Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 863,
			  "BRAND": "Indomie",
			  "VARIETY": "Special Fried Curly Noodle (Local)",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 862,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Short Cuts Roast Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 861,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Hao Hao Mi Chay Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 860,
			  "BRAND": "Baijia",
			  "VARIETY": "Artificial Pickled Cabbage Fish",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 859,
			  "BRAND": "Tradition",
			  "VARIETY": "Imitation Chicken Vegetarian",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 858,
			  "BRAND": "Indomie",
			  "VARIETY": "Rasa Mi Cakalang",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 857,
			  "BRAND": "Sempio",
			  "VARIETY": "Seafood Vermicelli Anchovy",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 856,
			  "BRAND": "Little Cook",
			  "VARIETY": "Mushroom Vegetarian",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 855,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Bestcook Hot & Sour Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 854,
			  "BRAND": "Long Kow",
			  "VARIETY": "Crystal Noodles Hot & Sour",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 853,
			  "BRAND": "Dongwon",
			  "VARIETY": "RaUdong Unfried Noodle With Kimchi",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 852,
			  "BRAND": "SuperMi",
			  "VARIETY": "Sedaaap Mi Kuah Rasa Kari Ayam",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 851,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Pork Ribs",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 850,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Short Cuts Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 849,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Cucharealo Tomato Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 848,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "South Korean Style Spicy Pork",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 847,
			  "BRAND": "Itomen",
			  "VARIETY": "Sansai Soba Edible Wld Plant",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 846,
			  "BRAND": "Vifon",
			  "VARIETY": "Mi Kim Chee",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 845,
			  "BRAND": "Nongshim",
			  "VARIETY": "Doong Ji Cold Noodle Chilled Broth",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 844,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Perencah Asam Laksa",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 843,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Short Cuts Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 842,
			  "BRAND": "JML",
			  "VARIETY": "Artificial Stew Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 841,
			  "BRAND": "Nongshim",
			  "VARIETY": "Chapagetti (South Korean)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 840,
			  "BRAND": "Chewy",
			  "VARIETY": "Stir Rice Vermicelli Singaporean Laksa",
			  "STYLE": "Tray",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 839,
			  "BRAND": "CJ CheilJedang",
			  "VARIETY": "Mild Bean Curd Stew",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 838,
			  "BRAND": "Sarimi",
			  "VARIETY": "Soto Koya Gurih",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 837,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Cucharealo Picante Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 836,
			  "BRAND": "Binh Tay",
			  "VARIETY": "Mi Chay Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 835,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 834,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Kriuuk Pedas",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 833,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 832,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Mee Goreng Dry Ramen Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 831,
			  "BRAND": "Vifon",
			  "VARIETY": "Instant Porridge Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 830,
			  "BRAND": "Seven-Eleven",
			  "VARIETY": "Seven & I Shoyu",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 829,
			  "BRAND": "Paldo",
			  "VARIETY": "Kko Kko Myun King Cup",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 828,
			  "BRAND": "Paldo",
			  "VARIETY": "Seolleongtangmyeon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 827,
			  "BRAND": "Paldo",
			  "VARIETY": "Rabokki",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 826,
			  "BRAND": "Paldo",
			  "VARIETY": "Namja",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 825,
			  "BRAND": "Paldo",
			  "VARIETY": "Shoyu",
			  "STYLE": "Cup",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 824,
			  "BRAND": "Paldo",
			  "VARIETY": "Bibim Men Cucumber",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 823,
			  "BRAND": "Paldo",
			  "VARIETY": "Kokomen Spicy Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 822,
			  "BRAND": "Paldo",
			  "VARIETY": "Speed King Bowl (Prototype)",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 821,
			  "BRAND": "Master Kong",
			  "VARIETY": "Potatoes & Stewed Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 820,
			  "BRAND": "Sunlee",
			  "VARIETY": "Tom Yum Shrimp Rice Stick",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 819,
			  "BRAND": "Maruchan",
			  "VARIETY": "Tempura Soba",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 818,
			  "BRAND": "SuperMi",
			  "VARIETY": "Sedaaap Mi Kuah Rasa Soto",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 817,
			  "BRAND": "Souper",
			  "VARIETY": "Bowl Ramen Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 816,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Oh! Ricey Phnom Penh Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 815,
			  "BRAND": "Chencun",
			  "VARIETY": "Stewde Chicken Of Mushroom",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 814,
			  "BRAND": "Indomie",
			  "VARIETY": "Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 813,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Spicy Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 812,
			  "BRAND": "Master Kong",
			  "VARIETY": "Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 811,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 810,
			  "BRAND": "ABC",
			  "VARIETY": "Selera Pedas Mi Goreng Hot Chicken Lemon",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 809,
			  "BRAND": "Nongshim",
			  "VARIETY": "Neoguri Mild (South Korea)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 808,
			  "BRAND": "Kim's Bowl",
			  "VARIETY": "Vegetarian Tom Yum",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 807,
			  "BRAND": "SuperMi",
			  "VARIETY": "Super Rasa Ayam Bawang",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 806,
			  "BRAND": "Ohsung",
			  "VARIETY": "Hot Spicy Bowl With Soy Peptide",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 805,
			  "BRAND": "Acecook",
			  "VARIETY": "Super Big Ramen Soy Sauce",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 804,
			  "BRAND": "Little Cook",
			  "VARIETY": "Abalone Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 803,
			  "BRAND": "Master Kong",
			  "VARIETY": "Premium Taste Roasted Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 802,
			  "BRAND": "Sarimi",
			  "VARIETY": "Isi 2 Mi Goreng Rasa Ayam Kecap",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 801,
			  "BRAND": "Gau Do",
			  "VARIETY": "Hot Sour Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 800,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 799,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Savory Chicken (New)",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 798,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "South Korean Style Pork",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 797,
			  "BRAND": "Golden Mie",
			  "VARIETY": "Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "Dubai",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 796,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Kingcook Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 795,
			  "BRAND": "Master Kong",
			  "VARIETY": "Red Oil Dan Dan",
			  "STYLE": "Tray",
			  "COUNTRY": "China",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 794,
			  "BRAND": "Sarimi",
			  "VARIETY": "Soto Koya Jeruk Nipis",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 793,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 792,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Spicy Chicken (New)",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 791,
			  "BRAND": "Acecook",
			  "VARIETY": "Super Big Ramen Tonkotsu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 790,
			  "BRAND": "GreeNoodle",
			  "VARIETY": "Shiitake & Soy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 789,
			  "BRAND": "SuperMi",
			  "VARIETY": "GoKar",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 788,
			  "BRAND": "Uni-President",
			  "VARIETY": "100 Beef With Sauerkraut",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 787,
			  "BRAND": "Emart",
			  "VARIETY": "Ramen E Ramen White Broth",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 786,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 785,
			  "BRAND": "Sarimi",
			  "VARIETY": "Isi 2 Rasa Soto",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 784,
			  "BRAND": "Hankow",
			  "VARIETY": "Cai Lin Ji Dry Noodles",
			  "STYLE": "Tray",
			  "COUNTRY": "China",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 783,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Salsa Picante Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 782,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Savory Shrimp (New)",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 781,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Kingcook Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 780,
			  "BRAND": "Ottogi",
			  "VARIETY": "Jin Ramen (Mild) (Import)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 779,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Kriuuk Ayam",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 778,
			  "BRAND": "Mamee",
			  "VARIETY": "Express Cup Curry",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 777,
			  "BRAND": "Mr. Noodles",
			  "VARIETY": "Oriental",
			  "STYLE": "Pack",
			  "COUNTRY": "Canada",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 776,
			  "BRAND": "Sarimi",
			  "VARIETY": "Isi 2 Rasa Kari spesial",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 775,
			  "BRAND": "JML",
			  "VARIETY": "Seafood",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 774,
			  "BRAND": "Indomie",
			  "VARIETY": "Rasa Sup Sayuran Vegan",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 773,
			  "BRAND": "Little Cook",
			  "VARIETY": "TVP Stewed Pork",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 772,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Hot & Spicy Beef (New)",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 771,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Mi Kuah Rasa Ayam Bawang",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 770,
			  "BRAND": "Kailo",
			  "VARIETY": "Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 769,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Shrimp Picante Style",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 768,
			  "BRAND": "Fashion Foods",
			  "VARIETY": "Oriental",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 767,
			  "BRAND": "Fashion Foods",
			  "VARIETY": "Mushroom Vegetarian",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 766,
			  "BRAND": "Fashion Foods",
			  "VARIETY": "Beef Pho",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 765,
			  "BRAND": "Super Bihun",
			  "VARIETY": "Kuah Rice Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 764,
			  "BRAND": "Sempio",
			  "VARIETY": "Seafood Noodle Cup",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 763,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Tricky Tomato",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 762,
			  "BRAND": "Long Kow",
			  "VARIETY": "Kimchi Pickle Bean Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 761,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Garlic Vegetable Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 760,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Roast Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 759,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Savory Lobster (New)",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 758,
			  "BRAND": "JML",
			  "VARIETY": "Artificial Stew Pork",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 757,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Vegan",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 756,
			  "BRAND": "Daikoku",
			  "VARIETY": "Bikkuchigekara Big Chige",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 755,
			  "BRAND": "Nongshim",
			  "VARIETY": "Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 754,
			  "BRAND": "Nongshim",
			  "VARIETY": "Ansungtangmyun (US Version)",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 753,
			  "BRAND": "Nongshim",
			  "VARIETY": "Soba",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 752,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Savory Tempura Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 751,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun Black Onion",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 750,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Spicy Kimchi (New)",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 749,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Chow Mein (New)",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 748,
			  "BRAND": "Hosoonyi",
			  "VARIETY": "Naengmyeon Combo",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 747,
			  "BRAND": "Nissin",
			  "VARIETY": "Spoon-it Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 746,
			  "BRAND": "JML",
			  "VARIETY": "Artificial Mushroom Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 745,
			  "BRAND": "Nongshim",
			  "VARIETY": "Jinjja Jinjja",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 744,
			  "BRAND": "Payless",
			  "VARIETY": "Instant Mami Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 743,
			  "BRAND": "Mamee",
			  "VARIETY": "Express Cup Tom Yum",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 742,
			  "BRAND": "Golden Mie",
			  "VARIETY": "chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Dubai",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 741,
			  "BRAND": "Wei Lih",
			  "VARIETY": "Good Good Eat Super Ramen Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 740,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Sate (Local)",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 739,
			  "BRAND": "JML",
			  "VARIETY": "Artificial Spicy Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 738,
			  "BRAND": "Nissin",
			  "VARIETY": "U.F.O. Yakiosoba",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 737,
			  "BRAND": "Gau Do",
			  "VARIETY": "Chicken Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 736,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Spicy Vegetable",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 735,
			  "BRAND": "Ottogi",
			  "VARIETY": "Odongtong Myon Seafood",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 734,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Rasa Ayam Panggang Jumbo (Local)",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 733,
			  "BRAND": "Indomie",
			  "VARIETY": "Rasa Soto Betawi",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 732,
			  "BRAND": "Indomie",
			  "VARIETY": "Curly Noodle With Chicken Chilli Paddi",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 731,
			  "BRAND": "Indomie",
			  "VARIETY": "Rasa Mi Kocok Bandung",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 730,
			  "BRAND": "Indomie",
			  "VARIETY": "Rasa Soto Banjar Limau Kulit",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 729,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Jumbo Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 728,
			  "BRAND": "Indomie",
			  "VARIETY": "Rasa Kari Ayam Medan",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 727,
			  "BRAND": "Indomie",
			  "VARIETY": "Rasa Empal Gentong",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 726,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Cakalang",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 725,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Instant Cup Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 724,
			  "BRAND": "Indomie",
			  "VARIETY": "Curly Noodle With Laksa Chilli",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 723,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Barbecue Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 722,
			  "BRAND": "Yamamoto",
			  "VARIETY": "Seafood Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 721,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Savory Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 720,
			  "BRAND": "Golden Mie",
			  "VARIETY": "Chicken Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "Dubai",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 719,
			  "BRAND": "Nissin",
			  "VARIETY": "Spoon-it Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 718,
			  "BRAND": "Ottogi",
			  "VARIETY": "Kiss Myon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 717,
			  "BRAND": "Nissin",
			  "VARIETY": "Ramen Bowl Spicy Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 716,
			  "BRAND": "Vifon",
			  "VARIETY": "Hu Tieu Ca Stewed Fish",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 715,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Rendang (Import)",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 714,
			  "BRAND": "Pulmuone",
			  "VARIETY": "Nature Is Delicious Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 713,
			  "BRAND": "Nissin",
			  "VARIETY": "Spoon-it Creamy Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 712,
			  "BRAND": "Four Seas",
			  "VARIETY": "Seaweed",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 711,
			  "BRAND": "Nongshim",
			  "VARIETY": "Hearty Rice Noodle Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 710,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Mixed Foods",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 709,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Spicy Chicken",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 708,
			  "BRAND": "Wu Mu",
			  "VARIETY": "Pork Flavor Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 707,
			  "BRAND": "Mee Jang",
			  "VARIETY": "Noodle Soup Spicy Beef Garlic Onion",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 706,
			  "BRAND": "Unif",
			  "VARIETY": "Man Han Feast Spring Onion Eel",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 705,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "South Korean Style Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 704,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Chinese Chicken Vegetable",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 703,
			  "BRAND": "Nissin",
			  "VARIETY": "Spoon-it Rich Hearty Beef Stew",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 702,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Black Garlic Oil Tonkotsu",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 701,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Lime Chili Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 700,
			  "BRAND": "Nissin",
			  "VARIETY": "Chikin Ramen (Local)",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 699,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Salsa Picante Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 698,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Orange Chicken",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 697,
			  "BRAND": "Nissin",
			  "VARIETY": "Spoon-it Rich Hearty Savory Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 696,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Spicy Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 695,
			  "BRAND": "JFC",
			  "VARIETY": "Japanese Style Noodle Curry",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 694,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Kingcook Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 693,
			  "BRAND": "Chewy",
			  "VARIETY": "Stir Rice Vermicelli Indonesian Gado Gado",
			  "STYLE": "Tray",
			  "COUNTRY": "China",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 692,
			  "BRAND": "Samyang",
			  "VARIETY": "Assorted Vegetable Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 691,
			  "BRAND": "Mamee",
			  "VARIETY": "Express Cup Vegetarian",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 690,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Savory Soy Sauce",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 689,
			  "BRAND": "Mee Jang",
			  "VARIETY": "Noodle Soup Sour Spicy Shrimp Tom Yum",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 688,
			  "BRAND": "Ohsung",
			  "VARIETY": "Hong Ramyun Soy Peptide Hot Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 687,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Xo Sauce Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 686,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Mi Segera Mi Goreng Perisa Sambal Goreng",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 685,
			  "BRAND": "Indomie",
			  "VARIETY": "Rasa Sup Buntut Oxtail Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 684,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Seafood",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 683,
			  "BRAND": "Nongshim",
			  "VARIETY": "Udon Garlic Teriyaki",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 682,
			  "BRAND": "Indomie",
			  "VARIETY": "Instant Cup Noodles Mi Goreng Satay",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 681,
			  "BRAND": "Nongshim",
			  "VARIETY": "Hearty Rice Noodle Black Bean Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 680,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Kingcook Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 679,
			  "BRAND": "Mamee",
			  "VARIETY": "Express Cup Fried Onion Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 678,
			  "BRAND": "Wang",
			  "VARIETY": "Kitsune Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 677,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 676,
			  "BRAND": "Indomie",
			  "VARIETY": "Spicy Coconut Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 675,
			  "BRAND": "Samyang",
			  "VARIETY": "Nagasaki Jjampong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 674,
			  "BRAND": "Paldo",
			  "VARIETY": "Kko Kko Myun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 673,
			  "BRAND": "Ohsung",
			  "VARIETY": "Hong Ramyun Soup Soy Peptide Mild",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 672,
			  "BRAND": "Mug Shot",
			  "VARIETY": "Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 671,
			  "BRAND": "Mug Shot",
			  "VARIETY": "Spicy Sweet & Sour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 670,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Artificial Chicken Rice Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 669,
			  "BRAND": "Nissin",
			  "VARIETY": "Gozen Tempura",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 668,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Vegetarian",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 667,
			  "BRAND": "Nissin",
			  "VARIETY": "Ramen Bowl Kimchi",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 666,
			  "BRAND": "Lishan",
			  "VARIETY": "Black Rooster Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 665,
			  "BRAND": "Mama",
			  "VARIETY": "Moo Nam Tok Rice Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 664,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Bangkok Curry Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 663,
			  "BRAND": "Paldo",
			  "VARIETY": "Jjajangmen Black Bean",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 662,
			  "BRAND": "Daikoku",
			  "VARIETY": "Shokuh Kitsune Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 661,
			  "BRAND": "Yamamoto",
			  "VARIETY": "Ponpoko Tempura Soba",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 660,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Beef Na Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 659,
			  "BRAND": "Nissin",
			  "VARIETY": "Ramen Bowl Spicy Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 658,
			  "BRAND": "Paldo",
			  "VARIETY": "Hwa King Cup",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 657,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Onion",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 656,
			  "BRAND": "Nissin",
			  "VARIETY": "Ramen Bowl Hot & Spicy",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 655,
			  "BRAND": "Cap Atoom Bulan",
			  "VARIETY": "Mie Telor Asli",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 654,
			  "BRAND": "Mee Jang",
			  "VARIETY": "Sour Spicy Chicken Tom Yum",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 653,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Pork Ribs",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 652,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Shio",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 651,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Mi Segera Mi Sup Perisa Kari Ayam",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 650,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 649,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Chicken & Mushroom",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 648,
			  "BRAND": "Nongshim",
			  "VARIETY": "Seafood Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 647,
			  "BRAND": "Sunlee",
			  "VARIETY": "Tom Yum Shrimp Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 646,
			  "BRAND": "Yamamoto",
			  "VARIETY": "Shoyu",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 645,
			  "BRAND": "Nongshim",
			  "VARIETY": "Oolongmen Artificial Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 644,
			  "BRAND": "Sura",
			  "VARIETY": "Knife Cut Rice Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 643,
			  "BRAND": "Wei Chuan",
			  "VARIETY": "Miso Vegetables",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 642,
			  "BRAND": "Little Cook",
			  "VARIETY": "Spicy Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 641,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Hao Hao Shrimp Onion",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 640,
			  "BRAND": "Master Kong",
			  "VARIETY": "Artificial Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 639,
			  "BRAND": "Nissin",
			  "VARIETY": "Gozen Kitsune Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 638,
			  "BRAND": "GreeNoodle",
			  "VARIETY": "Yakisoba",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 637,
			  "BRAND": "Snapdragon",
			  "VARIETY": "Chinese Mushroom Rice Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 636,
			  "BRAND": "Yamamori",
			  "VARIETY": "Tom Yam Ramen Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 635,
			  "BRAND": "Ottogi",
			  "VARIETY": "Buckwheat Bibim Ramyon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 1.1
			},
			{
			  "REVIEW_ID": 634,
			  "BRAND": "Baijia",
			  "VARIETY": "Sichuan Hot Pot Sweet Potato Thread",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 633,
			  "BRAND": "Mr. Udon",
			  "VARIETY": "Seafood Selection",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 632,
			  "BRAND": "Mr. Udon",
			  "VARIETY": "Japanese Miso",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 631,
			  "BRAND": "Fashion Foods",
			  "VARIETY": "XO Sauce",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 630,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung Fu Artificial Mushroom Pork",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 629,
			  "BRAND": "Master Kong",
			  "VARIETY": "Artificial Braised Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 628,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme La Paz Batchoy Beef Garlic",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 627,
			  "BRAND": "Omachi",
			  "VARIETY": "Spaghetti",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 626,
			  "BRAND": "Ottogi",
			  "VARIETY": "Yeul Hot Taste",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 625,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Bombay Bad Boy",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 624,
			  "BRAND": "Master Kong",
			  "VARIETY": "Artificial Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 623,
			  "BRAND": "Wei Wei",
			  "VARIETY": "A\" Series Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 622,
			  "BRAND": "Daikoku",
			  "VARIETY": "My Friend Vic Tanuki Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 621,
			  "BRAND": "Ottogi",
			  "VARIETY": "Jin Ramen Big Bowl (Hot)",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 620,
			  "BRAND": "Vifon",
			  "VARIETY": "Phu Gia Bamboo Shoot Artificial Pork Bean Thread",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 619,
			  "BRAND": "Yamamoto",
			  "VARIETY": "Ponpoko Tempura Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 618,
			  "BRAND": "Pulmuone",
			  "VARIETY": "Cold Noodles By Dad",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 617,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Sesame Oil Chicken Macaroni",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 616,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Thrillin' Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 615,
			  "BRAND": "Yamamori",
			  "VARIETY": "Tom Yam Prawn",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 614,
			  "BRAND": "Fuku",
			  "VARIETY": "Superior Soup Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 613,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Artificial Pork Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 612,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Spicy Chicken",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 611,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Low Fat Sweet Thai Chilli",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 610,
			  "BRAND": "Wei Wei",
			  "VARIETY": "A\" Series Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 609,
			  "BRAND": "Wei Wei",
			  "VARIETY": "A\" Series Artificial Hot Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 608,
			  "BRAND": "Koka",
			  "VARIETY": "Spicy Black Pepper",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 607,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Beef Tomato",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 606,
			  "BRAND": "Six Fortune",
			  "VARIETY": "U-Dong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 605,
			  "BRAND": "Little Cook",
			  "VARIETY": "Artificial Onion",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 604,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Low Fat Chicken Herb",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 603,
			  "BRAND": "Wei Lih",
			  "VARIETY": "Goog Good Eat Super Ramen Hot Chili",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 602,
			  "BRAND": "Nongshim",
			  "VARIETY": "Oolongmen Artificial Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 601,
			  "BRAND": "Wei Chuan",
			  "VARIETY": "Tomato Vegetables",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 600,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 599,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Pancit Canton Extra Hot Chili",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 598,
			  "BRAND": "Little Cook",
			  "VARIETY": "Vegetarian",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 597,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Sweet & sour",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 596,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Lemongrass Chili Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 595,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Spring Onion Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 594,
			  "BRAND": "Haioreum",
			  "VARIETY": "Asian Style Noodles Seafood",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 593,
			  "BRAND": "Nongshim",
			  "VARIETY": "Chapagetti Chajang",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 592,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Mild Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 591,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles To Go Chinese Space Rib",
			  "STYLE": "Bowl",
			  "COUNTRY": "UK",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 590,
			  "BRAND": "Mama",
			  "VARIETY": "Chand Clear Soup",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 589,
			  "BRAND": "Vifon",
			  "VARIETY": "South Korean Style Kim Chee",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 588,
			  "BRAND": "Vifon",
			  "VARIETY": "Tu Quy Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 587,
			  "BRAND": "Sunlight",
			  "VARIETY": "Steam Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.1
			},
			{
			  "REVIEW_ID": 586,
			  "BRAND": "Vedan",
			  "VARIETY": "Bah Kut Tea Noodle For Vegetarians",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 585,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Artificial Onion Flavor Bean Thread",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 584,
			  "BRAND": "Baijia",
			  "VARIETY": "Single Noble Black Bone Chicken Sweet Potato Thread",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 583,
			  "BRAND": "Vifon",
			  "VARIETY": "Phu Gia Cua Crab Bean Thread",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 582,
			  "BRAND": "Koyo",
			  "VARIETY": "Tofu & Miso",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 581,
			  "BRAND": "Koyo",
			  "VARIETY": "Mushroom",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 580,
			  "BRAND": "Baijia",
			  "VARIETY": "Hot & Sour Casserole Stewed Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 579,
			  "BRAND": "Baijia",
			  "VARIETY": "Sichuan Pickled Sweet Potato Thread",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 578,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun Black",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 577,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Chinese Chow Mein",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 576,
			  "BRAND": "Menraku",
			  "VARIETY": "Tempura Soba",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 575,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Barbecue Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 574,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Tricky Tomato",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 573,
			  "BRAND": "Noah Foods",
			  "VARIETY": "Phoya Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 572,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Tomato Basil",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 571,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Japanese Style Tokusen Sio",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 570,
			  "BRAND": "O Sung",
			  "VARIETY": "Keopnurungji Rice Snack",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 569,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Suc Song Artificial Pork",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 568,
			  "BRAND": "Paldo",
			  "VARIETY": "Gomtang",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 567,
			  "BRAND": "Goku Uma",
			  "VARIETY": "Soy Sauce",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 566,
			  "BRAND": "Foodmon",
			  "VARIETY": "DJ DOC Jjolmyeon",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 565,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles To Go Curry",
			  "STYLE": "Bowl",
			  "COUNTRY": "UK",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 564,
			  "BRAND": "Uni-President",
			  "VARIETY": "One More Cup Kimchi",
			  "STYLE": "Cup",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 563,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Duck",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 562,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Bacon",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 561,
			  "BRAND": "Sahmyook",
			  "VARIETY": "Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 560,
			  "BRAND": "Myojo",
			  "VARIETY": "Ippeichan Soy Sauce",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 559,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Quick Tom Yum Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 558,
			  "BRAND": "Long Kow",
			  "VARIETY": "Crystal Noodles Vegetables",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 557,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Souther Fried Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 556,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Mi Goreng Perisa Asli",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 555,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Chinese Chow Mein",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 554,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Shrimp Tom Yum Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 553,
			  "BRAND": "Samyang",
			  "VARIETY": "60 Ingredients",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 552,
			  "BRAND": "Super Bihun",
			  "VARIETY": "Kuah Rasa Baso Sapi Rice Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 551,
			  "BRAND": "Batchelors",
			  "VARIETY": "Super Noodles Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "UK",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 550,
			  "BRAND": "Nissin",
			  "VARIETY": "Taisho Fried Noodle Yakisoba",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 549,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Supreme Soto",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 548,
			  "BRAND": "Pot Noodle",
			  "VARIETY": "Original Curry",
			  "STYLE": "Cup",
			  "COUNTRY": "UK",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 547,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Pancit Canton Sweet Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 546,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 545,
			  "BRAND": "Golden Wheat",
			  "VARIETY": "South Korean Style Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 544,
			  "BRAND": "Unox",
			  "VARIETY": "Good Noodles Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Holland",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 543,
			  "BRAND": "Menraku",
			  "VARIETY": "Curry Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 542,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Mi SupArtificial Chicken Special",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 541,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 540,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 539,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 538,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Lomi Seafood Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 537,
			  "BRAND": "Mama",
			  "VARIETY": "Pad Kee Mao Drunken",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 536,
			  "BRAND": "Ottogi",
			  "VARIETY": "Yeul Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 535,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 0.9
			},
			{
			  "REVIEW_ID": 534,
			  "BRAND": "Mama",
			  "VARIETY": "Pho Ga",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.1
			},
			{
			  "REVIEW_ID": 533,
			  "BRAND": "Paldo",
			  "VARIETY": "Gomtang",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 532,
			  "BRAND": "Doll",
			  "VARIETY": "Spicy Tomkotsu",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 531,
			  "BRAND": "Yum Yum",
			  "VARIETY": "Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 530,
			  "BRAND": "Mee Jang",
			  "VARIETY": "Artificial Shrimp Tom yum",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 529,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Hot Spicy Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 528,
			  "BRAND": "Unox",
			  "VARIETY": "Good Noodles Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "Holland",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 527,
			  "BRAND": "Little Cook",
			  "VARIETY": "Wheat Gluten Stewed Duck Flavoured",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 526,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Soy Ginger Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 525,
			  "BRAND": "JML",
			  "VARIETY": "Artificial Spicy Hot Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 524,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Spicy Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 523,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Hot & Sour Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 522,
			  "BRAND": "Samyang",
			  "VARIETY": "Hot Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 521,
			  "BRAND": "Menraku",
			  "VARIETY": "Soy Sauce",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 520,
			  "BRAND": "Nan Hsing",
			  "VARIETY": "Vegetarian Rice Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 519,
			  "BRAND": "Snapdragon",
			  "VARIETY": "Beijing Vegetable Rice Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 518,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 517,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Thai Ginger Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 516,
			  "BRAND": "Wang",
			  "VARIETY": "Champong Spicy Seafood",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 515,
			  "BRAND": "Tradition",
			  "VARIETY": "Imitation Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 514,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Sanukiya Fresh Spicy Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 513,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Onion",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 512,
			  "BRAND": "Paldo",
			  "VARIETY": "Big Bowl Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 511,
			  "BRAND": "Menraku",
			  "VARIETY": "Miso",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 510,
			  "BRAND": "Snapdragon",
			  "VARIETY": "South Korean Kimchi Rice Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 509,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung Fu Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 508,
			  "BRAND": "Samyang",
			  "VARIETY": "Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 507,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Seafood",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 506,
			  "BRAND": "Nongshim",
			  "VARIETY": "Oolongmen Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 505,
			  "BRAND": "JML",
			  "VARIETY": "Artificial Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 504,
			  "BRAND": "Knorr",
			  "VARIETY": "Pizza",
			  "STYLE": "Pack",
			  "COUNTRY": "Pakistan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 503,
			  "BRAND": "GreeNoodle",
			  "VARIETY": "Miso",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 502,
			  "BRAND": "Sunlee",
			  "VARIETY": "Beef Rice Stick",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 501,
			  "BRAND": "Nongshim",
			  "VARIETY": "Neoguri Mild",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 500,
			  "BRAND": "Mexi-Ramen",
			  "VARIETY": "Soupless Ramen Shallot Teriyaki",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 499,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Artificial Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 498,
			  "BRAND": "Hsin Tung Yang",
			  "VARIETY": "Tiny Noodle With Oyster Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 497,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Seafood & Abalone Macaroni",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 496,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Shrimp",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 495,
			  "BRAND": "Ottogi",
			  "VARIETY": "Jin Ramen (Mild)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 494,
			  "BRAND": "Snapdragon",
			  "VARIETY": "Tomato Seafood Rice Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 493,
			  "BRAND": "Pulmuone",
			  "VARIETY": "Fresh Ramen Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 492,
			  "BRAND": "Noah Foods",
			  "VARIETY": "Phoya Rice Noodles Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 491,
			  "BRAND": "JML",
			  "VARIETY": "Artificial Stew Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 490,
			  "BRAND": "Foodmon",
			  "VARIETY": "DJ DOC Instant rice Ramen Topokki",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 489,
			  "BRAND": "JML",
			  "VARIETY": "Stew Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 488,
			  "BRAND": "Kailo",
			  "VARIETY": "Big Bowl Crab",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 487,
			  "BRAND": "Kailo",
			  "VARIETY": "Big Bowl Artificial Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 486,
			  "BRAND": "Kamfen",
			  "VARIETY": "Japanese U-Don Lobster Scallop",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 485,
			  "BRAND": "Ottogi",
			  "VARIETY": "Hot & Spicy Ramen",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 484,
			  "BRAND": "Ottogi",
			  "VARIETY": "Bekse Curry Myon",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 483,
			  "BRAND": "Itomen",
			  "VARIETY": "Yellow Buckwheat",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 482,
			  "BRAND": "Menraku",
			  "VARIETY": "Shio",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 481,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Roasted Garlic Rice Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 480,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Mushroom Rice Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 479,
			  "BRAND": "Nongshim",
			  "VARIETY": "Potato Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 478,
			  "BRAND": "Vedan",
			  "VARIETY": "Mushroom & Artificial Cuttlefish",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 477,
			  "BRAND": "Mr. Udon",
			  "VARIETY": "Malaysian Beef Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 476,
			  "BRAND": "Annie Chun's",
			  "VARIETY": "Teriyaki Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 475,
			  "BRAND": "Gefen",
			  "VARIETY": "Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 474,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Rice Noodle Shrimp Crab",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 473,
			  "BRAND": "Myojo",
			  "VARIETY": "Ramen-Desse Miso Soybean Paste",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 472,
			  "BRAND": "Thai Kitchen",
			  "VARIETY": "Spring Onion Rice Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 471,
			  "BRAND": "Koyo",
			  "VARIETY": "Lemongrass ginger",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 470,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Chicken Mushroom",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 469,
			  "BRAND": "Gefen",
			  "VARIETY": "Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 468,
			  "BRAND": "Paldo",
			  "VARIETY": "Snack Noodle slightly Hot",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 467,
			  "BRAND": "Vifon",
			  "VARIETY": "Tu Quy Sour Spicy Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 466,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Rice Noodle Artificial Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 465,
			  "BRAND": "Nissin",
			  "VARIETY": "Souper Meal Picante Shrimp Hot Spicy",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 464,
			  "BRAND": "Mama",
			  "VARIETY": "Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 463,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ppushu Ppushu Barbecue",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 462,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 461,
			  "BRAND": "Samyang",
			  "VARIETY": "Sutah Hot Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 460,
			  "BRAND": "Menraku",
			  "VARIETY": "Tempura Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 459,
			  "BRAND": "Gefen",
			  "VARIETY": "Imitation Chicken Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 458,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung Fu Artificial Beef Rice Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 457,
			  "BRAND": "Ibumie",
			  "VARIETY": "Harmee Mee goreng Prawn",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 456,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung Fu Artificial Szechuan Pork",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 455,
			  "BRAND": "Baijia",
			  "VARIETY": "Single Noble Pickled Radish & Duck",
			  "STYLE": "Cup",
			  "COUNTRY": "China",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 454,
			  "BRAND": "Koyo",
			  "VARIETY": "Asian Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 453,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Savory Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 452,
			  "BRAND": "Myojo",
			  "VARIETY": "Hyoubanya No Chukasoba Soy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 451,
			  "BRAND": "Myojo",
			  "VARIETY": "Ippeichan Soybean Paste",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 450,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ppushu Ppushu Tteobokki",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 449,
			  "BRAND": "Wu Mu",
			  "VARIETY": "Beef Flavor Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 448,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung Fu Artificial Sesame Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 447,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Little Prince Bacon",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 446,
			  "BRAND": "Sao Tao",
			  "VARIETY": "Noodle King Hong Koing Style Wonton",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 445,
			  "BRAND": "iNoodle",
			  "VARIETY": "Taiwan Style Chow Mein",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 444,
			  "BRAND": "Mr. Udon",
			  "VARIETY": "Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 443,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "N-Rich Chicken Tinola",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 442,
			  "BRAND": "Nongshim",
			  "VARIETY": "Kalguksoo",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 441,
			  "BRAND": "Ottogi",
			  "VARIETY": "Spice Seafood",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 440,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Hot spicy Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 439,
			  "BRAND": "Little Cook",
			  "VARIETY": "Tom Yum Seafood Creamy",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 438,
			  "BRAND": "Samyang",
			  "VARIETY": "Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 437,
			  "BRAND": "Nongshim",
			  "VARIETY": "Big Bowl Spicy Kimchi",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 436,
			  "BRAND": "Unif",
			  "VARIETY": "Artificial Beef With Sauerkraut",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 435,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Mie Sambal Goreng",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 434,
			  "BRAND": "Mi Sedaap",
			  "VARIETY": "Kari Spesial",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 433,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Bulalo",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 432,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Instant Bean Thread Seafood",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 431,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Chinese Onion Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 430,
			  "BRAND": "Quickchow",
			  "VARIETY": "Pancit Canton toyo Mansi",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 429,
			  "BRAND": "Quickchow",
			  "VARIETY": "Chicken Mami",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 428,
			  "BRAND": "Kamfen",
			  "VARIETY": "E Menm Chicken",
			  "STYLE": "",
			  "COUNTRY": "China",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 427,
			  "BRAND": "Koka",
			  "VARIETY": "Mi Hai Cua Crab Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 426,
			  "BRAND": "Vifon",
			  "VARIETY": "Tu quy Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 425,
			  "BRAND": "Chikara",
			  "VARIETY": "Shrimp Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 424,
			  "BRAND": "Q",
			  "VARIETY": "Noodle With Sesame Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 423,
			  "BRAND": "Noodle Time",
			  "VARIETY": "Shin Cup",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 422,
			  "BRAND": "Vifon",
			  "VARIETY": "Mi Lau Thai Thai Stle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 421,
			  "BRAND": "Myojo",
			  "VARIETY": "Kakesoba Desse Soy Sauce",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 420,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Beef Flavorc",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 419,
			  "BRAND": "Myojo",
			  "VARIETY": "Ramen Desse Shio",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 418,
			  "BRAND": "iNoodle",
			  "VARIETY": "Udon Noodle Soup Oriental",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 417,
			  "BRAND": "Vifon",
			  "VARIETY": "Tu Quy Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 416,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Chicken Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 415,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Artificial Classic Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 414,
			  "BRAND": "Doll",
			  "VARIETY": "Artificial Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 413,
			  "BRAND": "Souper",
			  "VARIETY": "Alimentary Paste Chow Mein",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 412,
			  "BRAND": "Maruchan",
			  "VARIETY": "Midori No Tanuki",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.125
			},
			{
			  "REVIEW_ID": 411,
			  "BRAND": "Sunlee",
			  "VARIETY": "Crab Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 410,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Instant Bulalo Bone Marrow",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 409,
			  "BRAND": "Payless",
			  "VARIETY": "Instant Mami Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 408,
			  "BRAND": "Gomex",
			  "VARIETY": "3 Mien Mi Tom Chua Cay Hot sour Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 407,
			  "BRAND": "Ottogi",
			  "VARIETY": "Snack Ramyon",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 406,
			  "BRAND": "Vifon",
			  "VARIETY": "Asian Style Instant Noodles Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 405,
			  "BRAND": "Ibumie",
			  "VARIETY": "Harmee Prawn",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 404,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Hao Hao Sate Onion",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 403,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Lime Flavor with Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 402,
			  "BRAND": "Sao Tao",
			  "VARIETY": "Noodle King Scallop Thick",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 401,
			  "BRAND": "Myojo",
			  "VARIETY": "Suudon Desse Soy Sauce",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 400,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Seafood Curry",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 399,
			  "BRAND": "Paldo",
			  "VARIETY": "Spicy Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 398,
			  "BRAND": "Paldo",
			  "VARIETY": "Bowl Noodle Beef With Vegetables",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 397,
			  "BRAND": "Quickchow",
			  "VARIETY": "Quickie Mami La Paz Batchoy",
			  "STYLE": "Cup",
			  "COUNTRY": "Philippines",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 396,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Bestcook Hot spicy Tom Yum Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 395,
			  "BRAND": "Ottogi",
			  "VARIETY": "Jin Ramen (Mild)",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 394,
			  "BRAND": "Paldo",
			  "VARIETY": "Hwa Cup Hot Spicy",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 393,
			  "BRAND": "Kamfen",
			  "VARIETY": "Dried Mix Noodles XO Sauce",
			  "STYLE": "Tray",
			  "COUNTRY": "China",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 392,
			  "BRAND": "Nissin",
			  "VARIETY": "Yakisoba Noodles Karashi",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 391,
			  "BRAND": "Myojo",
			  "VARIETY": "Hyoubanya No Chukasoba Oriental",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 390,
			  "BRAND": "Menraku",
			  "VARIETY": "Curry Soba",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 389,
			  "BRAND": "Mama",
			  "VARIETY": "Vegetarian Tom Yum",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 388,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Cheddar Cheese",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 387,
			  "BRAND": "Nissin",
			  "VARIETY": "Bowl Noodles Rich & Savory Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 386,
			  "BRAND": "US Canning",
			  "VARIETY": "Fu Chang Chinese Noodle Company Pork Seafood",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 385,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Hot Of Hots Artificial Black Peppered Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 384,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Tom Yam Goong Macaroni",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 383,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Chicken Na Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 382,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "N-Rich Artificial Chicken With Ginger",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 381,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Artificial Beef Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 380,
			  "BRAND": "Rhee Bros Assi",
			  "VARIETY": "Pho Vietnamese Noodle Soup",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 379,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Thai Peanut",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 378,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Hot Of Hots Artificial Satay Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 377,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Ho Fan Abalone Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 376,
			  "BRAND": "Sau Tao",
			  "VARIETY": "Noodle King Lobster Thick",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 375,
			  "BRAND": "Vifon",
			  "VARIETY": "Pho Bo Beef Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 374,
			  "BRAND": "Vifon",
			  "VARIETY": "Asian Style Instant Noodles Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 373,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Chicken Vegetable",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 372,
			  "BRAND": "Noodle Time",
			  "VARIETY": "Spicy Thai",
			  "STYLE": "Bowl",
			  "COUNTRY": "Canada",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 371,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Noodles Alfredo",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 370,
			  "BRAND": "Fuku",
			  "VARIETY": "Superior Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 369,
			  "BRAND": "Bon Go Jang",
			  "VARIETY": "Tofu Udon Dosirak",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 368,
			  "BRAND": "Knorr",
			  "VARIETY": "Chili Pork",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 367,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 366,
			  "BRAND": "Payless",
			  "VARIETY": "Pancit Shanghai",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 365,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Prawn",
			  "STYLE": "Cup",
			  "COUNTRY": "Singapore",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 364,
			  "BRAND": "Sao Tao",
			  "VARIETY": "Noodle King Beef Hong Kong Style",
			  "STYLE": "Bowl",
			  "COUNTRY": "Hong Kong",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 363,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Iccho Tonkotsu Macaroni",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 362,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Daily Hot & Sour With Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 361,
			  "BRAND": "Tayho",
			  "VARIETY": "Vermicelli With Pork",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 1.25
			},
			{
			  "REVIEW_ID": 360,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Hearty Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 359,
			  "BRAND": "Nissin",
			  "VARIETY": "Bowl Noodles Hot & Spicy Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 358,
			  "BRAND": "Doll",
			  "VARIETY": "Spicy Artificial Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 357,
			  "BRAND": "Payless",
			  "VARIETY": "Xtra Big Kalamansi Pancit Canton",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 356,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Roast Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 355,
			  "BRAND": "Nongshim",
			  "VARIETY": "Noodle Lite 275 Udon Mushroom",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 354,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Chicken 35% Less Sodium",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 353,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Chili",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 352,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Chili",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 351,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Picante Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 350,
			  "BRAND": "Nissin",
			  "VARIETY": "Souper Meal Tomato Garlic Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 349,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ramen Bokki",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 348,
			  "BRAND": "Paldo",
			  "VARIETY": "Bowl Noodle Kimchi",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 347,
			  "BRAND": "Sunny Maid",
			  "VARIETY": "Mi Chay Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 346,
			  "BRAND": "Paldo",
			  "VARIETY": "Bowl Noodle Spicy Artificial Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.125
			},
			{
			  "REVIEW_ID": 345,
			  "BRAND": "Myojo",
			  "VARIETY": "Charumera Shoyu",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 344,
			  "BRAND": "Paldo",
			  "VARIETY": "Stirfried Kimchi",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 343,
			  "BRAND": "Super Bihun",
			  "VARIETY": "Goreng Rice Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 342,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Big Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 341,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Daily Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 340,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Japanese Style Tokusen Shoyu",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 339,
			  "BRAND": "Payless",
			  "VARIETY": "Xtra Big Chilimansi Pancit Canton",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 338,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 337,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Creamy Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 336,
			  "BRAND": "Six Fortune",
			  "VARIETY": "Instant Noodles With Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 335,
			  "BRAND": "Goku Uma",
			  "VARIETY": "Hot & Spicy Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 334,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.125
			},
			{
			  "REVIEW_ID": 333,
			  "BRAND": "Nissin",
			  "VARIETY": "Big Cup Noodles Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 332,
			  "BRAND": "Nongshim",
			  "VARIETY": "Champong Oriental Noodles",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 331,
			  "BRAND": "Sunlee",
			  "VARIETY": "Crab Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 330,
			  "BRAND": "Vifon",
			  "VARIETY": "Phu Gia Instant Bean Thread Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 329,
			  "BRAND": "Mee Jang",
			  "VARIETY": "Artificial Beef Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 328,
			  "BRAND": "Nongshim",
			  "VARIETY": "Big Bowl Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 327,
			  "BRAND": "Gomex",
			  "VARIETY": "3 Mien Mi Tom Hum Lobster",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 326,
			  "BRAND": "Little Cook",
			  "VARIETY": "TVP Curry Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 325,
			  "BRAND": "Mee Jang",
			  "VARIETY": "Artificial Pork",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 324,
			  "BRAND": "Nongshim",
			  "VARIETY": "Big Bowl Spicy Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 323,
			  "BRAND": "Ottogi",
			  "VARIETY": "Jin Ramen (Hot)",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 322,
			  "BRAND": "Unif",
			  "VARIETY": "Shrimp Fish",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 321,
			  "BRAND": "Little Cook",
			  "VARIETY": "TVP Spicy Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 320,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Spicy Picante Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 319,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Oriental",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 318,
			  "BRAND": "Unif",
			  "VARIETY": "Super Bowl Artificial Pickled Chilli Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 317,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Cheddar Cheese",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 316,
			  "BRAND": "Unif",
			  "VARIETY": "Super Bowl Artificial Stewed Pork Chop",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 315,
			  "BRAND": "Unif",
			  "VARIETY": "Super Bowl Artificial Spicy Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 314,
			  "BRAND": "Paldo",
			  "VARIETY": "Dosirac Mushroom",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 313,
			  "BRAND": "Paldo",
			  "VARIETY": "Dosirac Shrimp",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 312,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Bulalo Artificial Bone Marrow",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 311,
			  "BRAND": "Vifon",
			  "VARIETY": "Tasty Mushroom",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 310,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "La Paz Batchoy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 309,
			  "BRAND": "Paldo",
			  "VARIETY": "Dosirac Beef",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 308,
			  "BRAND": "Tradition",
			  "VARIETY": "Imitation Chicken Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 307,
			  "BRAND": "Royal Umbrella",
			  "VARIETY": "Vegetarian Tom Yum",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 306,
			  "BRAND": "Rhee Bros Assi",
			  "VARIETY": "Rice Noodle Anchovy Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 305,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Special Beef Carne De Vaca",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 304,
			  "BRAND": "Mama",
			  "VARIETY": "Pho Bo Rice Noodle Artificial Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 303,
			  "BRAND": "Paldo",
			  "VARIETY": "Dosirac Artificial Chicken",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 302,
			  "BRAND": "Samyang",
			  "VARIETY": "Bowl Noodle Picante Beef",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 301,
			  "BRAND": "Dragonfly",
			  "VARIETY": "Guilin Style Rice Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "China",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 300,
			  "BRAND": "Wu Mu",
			  "VARIETY": "Steam Spinach Ramen With Onion",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 299,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Sotanghon Artificial Chicken Vermicelli",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 298,
			  "BRAND": "Nongshim",
			  "VARIETY": "Hearty Rice Noodle Spicy Veggie Consomme",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 297,
			  "BRAND": "Rhee Bros Assi",
			  "VARIETY": "Rice Noodle Hot & Spicy Kimchi",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 296,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Crab",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 295,
			  "BRAND": "Tablemark",
			  "VARIETY": "Soybean Paste",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 294,
			  "BRAND": "Paldo",
			  "VARIETY": "South Korean Seafood",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 293,
			  "BRAND": "Tiger",
			  "VARIETY": "Onion Flaver Rice Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 292,
			  "BRAND": "Paldo",
			  "VARIETY": "South Korean U Dong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 291,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 290,
			  "BRAND": "Doll",
			  "VARIETY": "Spicy Artificial Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 289,
			  "BRAND": "Paldo",
			  "VARIETY": "South Korean Broad Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 288,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Artificial Beef Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 287,
			  "BRAND": "Paldo",
			  "VARIETY": "King Cup Lobster",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 286,
			  "BRAND": "Myojo",
			  "VARIETY": "Hyoubanya No Yakisoba Oriental",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 285,
			  "BRAND": "Doll",
			  "VARIETY": "Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 284,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 283,
			  "BRAND": "Paldo",
			  "VARIETY": "King Cup Kimchi Pot Stew",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 282,
			  "BRAND": "Doll",
			  "VARIETY": "Pickled Vegetable",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 281,
			  "BRAND": "Mama",
			  "VARIETY": "Oriental Kitchen Hot Spicy",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 280,
			  "BRAND": "Rhee Bros Assi",
			  "VARIETY": "Rice Noodle Katsuo",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 279,
			  "BRAND": "Rhee Bros Assi",
			  "VARIETY": "Rice Noodles Seafood",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 278,
			  "BRAND": "Fortune",
			  "VARIETY": "Udon Mushroom",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 277,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Oh! Ricey Beef Rice Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 276,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Chili Paste Tom Yum",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 275,
			  "BRAND": "Mama",
			  "VARIETY": "Cup Shrimp Tom Yum Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 274,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung Fu Artificial Soybean Paste",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 273,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Minced Pork Tom Yum",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 272,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Mi Lau Thai Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 271,
			  "BRAND": "Paldo",
			  "VARIETY": "South Korean Noodle Kimchi Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 270,
			  "BRAND": "Wu Mu",
			  "VARIETY": "Dried Noodle With BBQ Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 269,
			  "BRAND": "Paldo",
			  "VARIETY": "Spicy Shrimp Bowl",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 268,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Spicy Chile Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 267,
			  "BRAND": "Mama",
			  "VARIETY": "Pork",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 266,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Mi Lau Thai Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 265,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 264,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Hao Hao Sour Hot Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 263,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Kung Pao Chicken",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 262,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Daily Beef Ball",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 261,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Oh! Ricey Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 260,
			  "BRAND": "Nissin",
			  "VARIETY": "Bowl Noodles Hot & Spicy Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 259,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Mi Lau Thai Seafood",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 258,
			  "BRAND": "Royal Umbrella",
			  "VARIETY": "Tom Yum Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 257,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Beef",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 256,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 255,
			  "BRAND": "Mama",
			  "VARIETY": "Oriental Kitchen Spicy Seafood",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 254,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Daily Hot & Spicy Tom Yun",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 253,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Spicy Seafood",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 252,
			  "BRAND": "Fortune",
			  "VARIETY": "Udon Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 251,
			  "BRAND": "Fortune",
			  "VARIETY": "Udon Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 250,
			  "BRAND": "Wu Mu",
			  "VARIETY": "Steamed Noodle Sesame Oil",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 249,
			  "BRAND": "Unif",
			  "VARIETY": "100 Artificial Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 248,
			  "BRAND": "Koka",
			  "VARIETY": "Tomato",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 247,
			  "BRAND": "Myojo",
			  "VARIETY": "Udon Mushroom",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 246,
			  "BRAND": "Mama",
			  "VARIETY": "Artificial Pork Jumbo",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 245,
			  "BRAND": "Six Fortune",
			  "VARIETY": "Broad Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 244,
			  "BRAND": "Nissin",
			  "VARIETY": "Karashi Mayo Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 243,
			  "BRAND": "Myojo",
			  "VARIETY": "Udon Hot & Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 242,
			  "BRAND": "Fashion Foods",
			  "VARIETY": "Tom Klong",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 241,
			  "BRAND": "Fu Chang Chinese Noodle Company",
			  "VARIETY": "Hot & Spicy Beef",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 240,
			  "BRAND": "Sanyo Foods",
			  "VARIETY": "Aunt Mentaiko Durum Spaghetti",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 239,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ppushu Ppushu Sweet & Sour",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 238,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Noodles Tomato Basil",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 237,
			  "BRAND": "Koka",
			  "VARIETY": "Spicy Seafood Marinara",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 236,
			  "BRAND": "Koka",
			  "VARIETY": "Spicy Sesame",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 235,
			  "BRAND": "Koka",
			  "VARIETY": "Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 234,
			  "BRAND": "Myojo",
			  "VARIETY": "Udon Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 233,
			  "BRAND": "Koka",
			  "VARIETY": "Tom Yum Rice Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 232,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Jumbo Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 231,
			  "BRAND": "Indomie",
			  "VARIETY": "Onion Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 230,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Instant Mami Noodles With Free Crackers",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 229,
			  "BRAND": "Myojo",
			  "VARIETY": "Udon Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 228,
			  "BRAND": "Vifon",
			  "VARIETY": "Pho Ga Instant rice Noodle",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 227,
			  "BRAND": "Quickchow",
			  "VARIETY": "Bihon Guisado Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 226,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Noodles Cheddar Cheese",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 225,
			  "BRAND": "Ottogi",
			  "VARIETY": "Snack Ramyon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 224,
			  "BRAND": "Mama",
			  "VARIETY": "Instant Bowl Noodles Artificial Pork",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 223,
			  "BRAND": "Koka",
			  "VARIETY": "Laksa Singapura",
			  "STYLE": "Bowl",
			  "COUNTRY": "Singapore",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 222,
			  "BRAND": "Myojo",
			  "VARIETY": "Udon Crab",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 221,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 220,
			  "BRAND": "Wei Lih",
			  "VARIETY": "Good Good Eat Super Ramen Original",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 219,
			  "BRAND": "Six Fortune",
			  "VARIETY": "Tom Yam Instant soup Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 218,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Sweet & Sour Chicken",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 217,
			  "BRAND": "Samyang",
			  "VARIETY": "Bowl Noodle Kimchi",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 216,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Roast Chicken Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 215,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Chicken",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 214,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Teriyaki Beef",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 213,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Spicy Artificial Lobster",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 212,
			  "BRAND": "Maruchan",
			  "VARIETY": "Yakisoba Roast chicken",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 211,
			  "BRAND": "Vina Acecook",
			  "VARIETY": "Kingcook Tomato Sauce Pork",
			  "STYLE": "Tray",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 210,
			  "BRAND": "Rocket Brand",
			  "VARIETY": "Satoimo Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 209,
			  "BRAND": "Nissin",
			  "VARIETY": "Souper Meal Beef Flavor Minestrone",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 208,
			  "BRAND": "Sao Tao",
			  "VARIETY": "Ramen King Scallop Seafood",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 207,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Original Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 206,
			  "BRAND": "Bon Go Jang",
			  "VARIETY": "Deuchi Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 205,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 204,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Spicy Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 203,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Hot & Spicy",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 202,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Cabbage Kimchi",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 201,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Beef Ginger",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 200,
			  "BRAND": "Nongshim",
			  "VARIETY": "Bowl Noodle Spicy Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 199,
			  "BRAND": "Samyang",
			  "VARIETY": "Chinese Soybean Paste",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 198,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Sanukiya Somen",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 197,
			  "BRAND": "Rhee Bros Assi",
			  "VARIETY": "Rice Noodle With Spicy Flavored Soup",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 196,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Pani Puri",
			  "STYLE": "Cup",
			  "COUNTRY": "India",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 195,
			  "BRAND": "Myojo",
			  "VARIETY": "Chukazanmai Served Cool Sesame Flavored Rice Vinegar Sesame",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 194,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Instant Rice Noodles Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 193,
			  "BRAND": "Boss",
			  "VARIETY": "Shrimp Tom Yum Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 192,
			  "BRAND": "Paldo",
			  "VARIETY": "Soy Flavor Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 191,
			  "BRAND": "Wu Mu",
			  "VARIETY": "Steamed Noodle Chinese Herbs",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 190,
			  "BRAND": "Maggi",
			  "VARIETY": "Perencah Tom Yam",
			  "STYLE": "Pack",
			  "COUNTRY": "Malaysia",
			  "STARS": 2.9
			},
			{
			  "REVIEW_ID": 189,
			  "BRAND": "Nissin",
			  "VARIETY": "Cup Noodles Manchurian",
			  "STYLE": "Cup",
			  "COUNTRY": "India",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 188,
			  "BRAND": "Nongshim",
			  "VARIETY": "Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 187,
			  "BRAND": "Paldo",
			  "VARIETY": "Hwa Ramyun Soy Peptide",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 186,
			  "BRAND": "Paldo",
			  "VARIETY": "Teumsae Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 185,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Sanukiya Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 184,
			  "BRAND": "Myojo",
			  "VARIETY": "Chukazanmai Soy Sauce",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 183,
			  "BRAND": "Nissin",
			  "VARIETY": "Bowl Noodles Hot & Spicy Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 182,
			  "BRAND": "Myojo",
			  "VARIETY": "Chukazanmai Soy Sauce chili Oil",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 181,
			  "BRAND": "Kamfen",
			  "VARIETY": "Noodle King Thin Wonton",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 180,
			  "BRAND": "Myojo",
			  "VARIETY": "Hyobanya No Yakisoba Sauce Flavor",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 179,
			  "BRAND": "Mama",
			  "VARIETY": "Kimchi",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 178,
			  "BRAND": "Mama",
			  "VARIETY": "Oriental Style Clear Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 177,
			  "BRAND": "Vifon",
			  "VARIETY": "Hu Tieu Bo Kho An Lien Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 176,
			  "BRAND": "Paldo",
			  "VARIETY": "Dosirac Pork",
			  "STYLE": "Tray",
			  "COUNTRY": "South Korea",
			  "STARS": 4.125
			},
			{
			  "REVIEW_ID": 175,
			  "BRAND": "Samyang",
			  "VARIETY": "Cold Ramen With Ponytail Radish",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 174,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Sotanghon Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 0.25
			},
			{
			  "REVIEW_ID": 173,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Instant Bean Vermicelli Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 172,
			  "BRAND": "Mama",
			  "VARIETY": "Flat Noodle Tom Yum",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 171,
			  "BRAND": "Samyang",
			  "VARIETY": "Japanese Seafood Flavor Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 170,
			  "BRAND": "Myojo",
			  "VARIETY": "Chukazanmai Soybean Paste",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 169,
			  "BRAND": "Samyang",
			  "VARIETY": "Seafood Party",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 168,
			  "BRAND": "JFC",
			  "VARIETY": "Japanese Style Noodle Fresh Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 167,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Crab Instant Rice Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 166,
			  "BRAND": "Koyo",
			  "VARIETY": "Garlic Pepper",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 165,
			  "BRAND": "Doll",
			  "VARIETY": "Sesame Oil",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 164,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Artificial Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 163,
			  "BRAND": "Vifon",
			  "VARIETY": "Asian Style Instant Noodles Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 162,
			  "BRAND": "Myojo",
			  "VARIETY": "Chukazanmai Oriental",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 161,
			  "BRAND": "Paldo",
			  "VARIETY": "Green Tea Chlorella",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 160,
			  "BRAND": "Myojo",
			  "VARIETY": "Ramen Desse Soy Sauce",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 159,
			  "BRAND": "Mama",
			  "VARIETY": "Hot & Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 158,
			  "BRAND": "Mama",
			  "VARIETY": "Jok Cup Porridge Artificial Pork",
			  "STYLE": "Cup",
			  "COUNTRY": "Thailand",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 157,
			  "BRAND": "Nissin",
			  "VARIETY": "Sotanghon",
			  "STYLE": "Cup",
			  "COUNTRY": "Philippines",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 156,
			  "BRAND": "Maruchan",
			  "VARIETY": "Instant Lunch Cajun Style With chili Piquin Shrimp",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 155,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Pancit Canton",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4.75
			},
			{
			  "REVIEW_ID": 154,
			  "BRAND": "Nissin",
			  "VARIETY": "Creamy Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 153,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Shrimp Flavor",
			  "STYLE": "Cup",
			  "COUNTRY": "USA",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 152,
			  "BRAND": "Wu Mu",
			  "VARIETY": "Steamed Noodle Garlic & Sesame Oil",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 151,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Japanese Style Tokusen Miso",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 150,
			  "BRAND": "Chorip Dong",
			  "VARIETY": "Jjambbong Hot Spicy Seafood",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 149,
			  "BRAND": "Maruchan",
			  "VARIETY": "Akai Kitsune Udon",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 148,
			  "BRAND": "Myojo",
			  "VARIETY": "Okinawa Soba",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 147,
			  "BRAND": "Higashi",
			  "VARIETY": "Nagasaki Sara Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 146,
			  "BRAND": "Mama",
			  "VARIETY": "Pho Bo",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 145,
			  "BRAND": "Sakurai",
			  "VARIETY": "Vegetarian Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 144,
			  "BRAND": "Nongshim",
			  "VARIETY": "Kimchi Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 143,
			  "BRAND": "Mama",
			  "VARIETY": "Mamy Chand Clear Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 142,
			  "BRAND": "Nissin",
			  "VARIETY": "Chow Mein Teriyaki Beef",
			  "STYLE": "Tray",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 141,
			  "BRAND": "Six Fortune",
			  "VARIETY": "Seafood Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 140,
			  "BRAND": "Mama",
			  "VARIETY": "Mi Goreng",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 139,
			  "BRAND": "Kamfen",
			  "VARIETY": "Noodle King Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 138,
			  "BRAND": "Unif",
			  "VARIETY": "100 Furong Shrimp",
			  "STYLE": "",
			  "COUNTRY": "Taiwan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 137,
			  "BRAND": "Nissin",
			  "VARIETY": "Bowl Noodles Rich & Savory Chicken",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 136,
			  "BRAND": "Mama",
			  "VARIETY": "Shrimp Creamy Tom Yum",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 135,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Fresh Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 134,
			  "BRAND": "Global Inspiration",
			  "VARIETY": "Gyeong-Gi-Do Rice",
			  "STYLE": "Bowl",
			  "COUNTRY": "South Korea",
			  "STARS": 2.25
			},
			{
			  "REVIEW_ID": 133,
			  "BRAND": "Baijia",
			  "VARIETY": "Hot & Sour Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 132,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Artificial Peppered Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 131,
			  "BRAND": "Unif",
			  "VARIETY": "100 Artificial Shallot Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 130,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Miso Soybean Paste",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 129,
			  "BRAND": "Nongshim",
			  "VARIETY": "Mupama Tang Myun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 128,
			  "BRAND": "Mama",
			  "VARIETY": "Artificial PA-LO Duck",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 0.1
			},
			{
			  "REVIEW_ID": 127,
			  "BRAND": "Vifon",
			  "VARIETY": "Mi Chay Vegetarian",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.8
			},
			{
			  "REVIEW_ID": 126,
			  "BRAND": "Mama",
			  "VARIETY": "Tom Yam Koong Rice Vermicelli",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 125,
			  "BRAND": "Shirakiku",
			  "VARIETY": "Japanese Style Tokusen Karami",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 124,
			  "BRAND": "Nissin",
			  "VARIETY": "Yakisoba With Mayonnaise/Mustard Packet",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 123,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Minced Pork Soeng Kreung",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.7
			},
			{
			  "REVIEW_ID": 122,
			  "BRAND": "Doll",
			  "VARIETY": "Shrimp Wonton",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 121,
			  "BRAND": "Ottogi",
			  "VARIETY": "Bekse Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 120,
			  "BRAND": "Samyang",
			  "VARIETY": "Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 119,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Artificial Pork & Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.4
			},
			{
			  "REVIEW_ID": 118,
			  "BRAND": "Paldo",
			  "VARIETY": "Bibim Men",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 117,
			  "BRAND": "Ottogi",
			  "VARIETY": "Ramyonsari",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 116,
			  "BRAND": "Mama",
			  "VARIETY": "Nam Vang",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.6
			},
			{
			  "REVIEW_ID": 115,
			  "BRAND": "Ottogi",
			  "VARIETY": "Miso Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.8
			},
			{
			  "REVIEW_ID": 114,
			  "BRAND": "Samyang",
			  "VARIETY": "Kimchi",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.9
			},
			{
			  "REVIEW_ID": 113,
			  "BRAND": "Nongshim",
			  "VARIETY": "Hooroorook",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 112,
			  "BRAND": "Ottogi",
			  "VARIETY": "Jiajang Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 111,
			  "BRAND": "Ottogi",
			  "VARIETY": "Odongtongmyon Seafood Spicy",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 110,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 109,
			  "BRAND": "Mama",
			  "VARIETY": "Pad Thai",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3.1
			},
			{
			  "REVIEW_ID": 108,
			  "BRAND": "Teriyaki Time",
			  "VARIETY": "Ramen",
			  "STYLE": "Bowl",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 107,
			  "BRAND": "Ottogi",
			  "VARIETY": "Pow Crunch Teriyaki",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 1.1
			},
			{
			  "REVIEW_ID": 106,
			  "BRAND": "GreeNoodle",
			  "VARIETY": "Tom Yum",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 105,
			  "BRAND": "Indomie",
			  "VARIETY": "Special Fried Curly Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 104,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 103,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Vegetarian Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 102,
			  "BRAND": "Indomie",
			  "VARIETY": "Soto Mie",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 101,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Artificial Sesame Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 100,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Artificial Chinese Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.85
			},
			{
			  "REVIEW_ID": 99,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung Fu Artificial Onion",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 98,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Chah Chiang",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 97,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Mi Tom Chua Sour Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 96,
			  "BRAND": "Saigon Ve Wong",
			  "VARIETY": "Kung Fu Artificial Pork Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 95,
			  "BRAND": "Wei Lih",
			  "VARIETY": "Artificial Beef Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 94,
			  "BRAND": "Mama",
			  "VARIETY": "Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 93,
			  "BRAND": "Payless",
			  "VARIETY": "Xtra Big Original Pancit Canton",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 92,
			  "BRAND": "Fashion Food",
			  "VARIETY": "Tom Yum Seafood Creamy",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 91,
			  "BRAND": "Binh Tay",
			  "VARIETY": "Mi Chay Mushroom",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 90,
			  "BRAND": "Long Kow",
			  "VARIETY": "Crystal Noodle Six Kinds Of Mushrooms",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 2.3
			},
			{
			  "REVIEW_ID": 89,
			  "BRAND": "Unif",
			  "VARIETY": "100 Artificial Stewed Pork Chop",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.2
			},
			{
			  "REVIEW_ID": 88,
			  "BRAND": "Paldo",
			  "VARIETY": "South Korean Noodle Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 87,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Tom Yum Shrimp Cream Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 86,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Onion Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.65
			},
			{
			  "REVIEW_ID": 85,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Sesame",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 84,
			  "BRAND": "Samyang",
			  "VARIETY": "Kalgug-Su Assorted Clam",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 1.8
			},
			{
			  "REVIEW_ID": 83,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Spicy Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 82,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Miso",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 81,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Artificial Spicy Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 80,
			  "BRAND": "Unif / Tung-I",
			  "VARIETY": "Artificial Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 79,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Kitsune Udon",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 78,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Seafood",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 77,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Prawn",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.25
			},
			{
			  "REVIEW_ID": 76,
			  "BRAND": "Indomie",
			  "VARIETY": "Meatball Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 75,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Rendang",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 74,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Shoyu",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 73,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Five Spices Artificial Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 72,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Tonkatsu Artificial Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 71,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Satay",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 70,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen XO Sauce Seafood",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 69,
			  "BRAND": "Baijia",
			  "VARIETY": "Spicy Fei- Chang Sweet Potato Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 1.75
			},
			{
			  "REVIEW_ID": 68,
			  "BRAND": "Wei Lih",
			  "VARIETY": "Jah Jan Mien Instant Noodle With Fried Soybean Paste",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 67,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Lime Chili Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 66,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 65,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Oriental",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 64,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 63,
			  "BRAND": "Nissin",
			  "VARIETY": "Souper Meal Chicken Flavor With Vegetable Medley",
			  "STYLE": "Bowl",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 62,
			  "BRAND": "Maggi",
			  "VARIETY": "Rice Noodle Mania Lemon Masala",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 61,
			  "BRAND": "Maggi",
			  "VARIETY": "2 Minute Noodles Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 60,
			  "BRAND": "Maggi",
			  "VARIETY": "Vegetable Atta Noodles Masala",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 59,
			  "BRAND": "Maggi",
			  "VARIETY": "Chinese Noodles Lemon Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "India",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 58,
			  "BRAND": "Ve Wong",
			  "VARIETY": "A-One Bun Tom Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 57,
			  "BRAND": "Doll",
			  "VARIETY": "Instant Fried Noodles With Chili Sauce",
			  "STYLE": "Tray",
			  "COUNTRY": "Hong Kong",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 56,
			  "BRAND": "Doll",
			  "VARIETY": "Instant Noodles With Sesame Oil & Soup Base",
			  "STYLE": "Pack",
			  "COUNTRY": "Hong Kong",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 55,
			  "BRAND": "Hua Feng Noodle Expert",
			  "VARIETY": "Favoury Pork Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 54,
			  "BRAND": "Hua Feng Noodle Expert",
			  "VARIETY": "Spicy Seafood Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "China",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 53,
			  "BRAND": "Indomie",
			  "VARIETY": "Chicken",
			  "STYLE": "Cup",
			  "COUNTRY": "Indonesia",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 52,
			  "BRAND": "Indomie",
			  "VARIETY": "Chicken Curry",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 51,
			  "BRAND": "Indomie",
			  "VARIETY": "Curly Noodles With Grilled Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 50,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 49,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Pedas Hot",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 48,
			  "BRAND": "Indomie",
			  "VARIETY": "Shrimp Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 47,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Jumbo Barbecue Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 46,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Jumbo Meatball",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 45,
			  "BRAND": "Indomie",
			  "VARIETY": "Mi Goreng Sate",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 44,
			  "BRAND": "Indomie",
			  "VARIETY": "Special Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "Indonesia",
			  "STARS": 4.25
			},
			{
			  "REVIEW_ID": 43,
			  "BRAND": "Kim Ve Wong",
			  "VARIETY": "Jaopai Series: Vegetarian Instant Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Taiwan",
			  "STARS": 0
			},
			{
			  "REVIEW_ID": 42,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Kung-Fu Chicken Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.75
			},
			{
			  "REVIEW_ID": 41,
			  "BRAND": "Little Cook",
			  "VARIETY": "Pork Mustard Stem",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 0.5
			},
			{
			  "REVIEW_ID": 40,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Pancit Canton Chili Mansi",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 39,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Supreme Bulalo Flavor",
			  "STYLE": "Bowl",
			  "COUNTRY": "Philippines",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 38,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Pancit Canton Citrus Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 37,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Pancit Canton Hot Chili Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 36,
			  "BRAND": "Lucky Me!",
			  "VARIETY": "Itnok",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 35,
			  "BRAND": "Mama",
			  "VARIETY": "Chand Clear Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 34,
			  "BRAND": "Maruchan",
			  "VARIETY": "Ramen Noodle Soup Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 33,
			  "BRAND": "Koka",
			  "VARIETY": "Mi Hai Tom Prawn",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 32,
			  "BRAND": "Koka",
			  "VARIETY": "Mi Hai Cua Crab Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Singapore",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 31,
			  "BRAND": "Myojo",
			  "VARIETY": "Ippeichan Yakisoba",
			  "STYLE": "Tray",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 30,
			  "BRAND": "Myojo",
			  "VARIETY": "Special Duck",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 29,
			  "BRAND": "Mee Jang",
			  "VARIETY": "Tom Yum Shrimp",
			  "STYLE": "Bowl",
			  "COUNTRY": "Thailand",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 28,
			  "BRAND": "Nissin",
			  "VARIETY": "Chikin Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 27,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Curry Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 26,
			  "BRAND": "Nissin",
			  "VARIETY": "Soba Noodles With Mayo Mustard Squirt",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 25,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Spicy Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 24,
			  "BRAND": "Nissin",
			  "VARIETY": "Demae Ramen Spicy Seafood With Chili Pepper",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 23,
			  "BRAND": "Nissin",
			  "VARIETY": "Top Ramen Creamy Chicken",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 4.5
			},
			{
			  "REVIEW_ID": 22,
			  "BRAND": "Nongshim",
			  "VARIETY": "Ansungtangmyun Noodle Soup",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.75
			},
			{
			  "REVIEW_ID": 21,
			  "BRAND": "Nongshim",
			  "VARIETY": "Champong Oriental Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 20,
			  "BRAND": "Nongshim",
			  "VARIETY": "Neoguri (Seafood'n'Spicy)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 19,
			  "BRAND": "Nongshim",
			  "VARIETY": "Shin Ramyun",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 4
			},
			{
			  "REVIEW_ID": 18,
			  "BRAND": "Ottogi",
			  "VARIETY": "Jin Ramen (Hot Taste)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 17,
			  "BRAND": "Quickchow",
			  "VARIETY": "Pancit Palabok",
			  "STYLE": "Pack",
			  "COUNTRY": "Philippines",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 16,
			  "BRAND": "Samyang",
			  "VARIETY": "Kalgug-Su (Spicy)",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 15,
			  "BRAND": "Samyang",
			  "VARIETY": "Pojangmacha U-dong",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 14,
			  "BRAND": "Samyang",
			  "VARIETY": "Hot",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 13,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Chow Mein",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 5
			},
			{
			  "REVIEW_ID": 12,
			  "BRAND": "Sapporo Ichiban",
			  "VARIETY": "Shrimp Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Japan",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 11,
			  "BRAND": "Six Fortune",
			  "VARIETY": "Chicken Flavor Instant Soup Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "South Korea",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 10,
			  "BRAND": "Smack",
			  "VARIETY": "Vegetable Beef",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 1.5
			},
			{
			  "REVIEW_ID": 9,
			  "BRAND": "Sutah",
			  "VARIETY": "Cup Noodle",
			  "STYLE": "Cup",
			  "COUNTRY": "South Korea",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 8,
			  "BRAND": "Tung-I",
			  "VARIETY": "Chinese Beef Instant Rice Noodle",
			  "STYLE": "Pack",
			  "COUNTRY": "Taiwan",
			  "STARS": 3
			},
			{
			  "REVIEW_ID": 7,
			  "BRAND": "Ve Wong",
			  "VARIETY": "Mushroom Pork",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 6,
			  "BRAND": "Vifon",
			  "VARIETY": "Nam Vang",
			  "STYLE": "Pack",
			  "COUNTRY": "Vietnam",
			  "STARS": 2.5
			},
			{
			  "REVIEW_ID": 5,
			  "BRAND": "Vifon",
			  "VARIETY": "Hu Tiu Nam Vang [\"Phnom Penh\" style] Asian Style Instant Rice Noodles",
			  "STYLE": "Bowl",
			  "COUNTRY": "Vietnam",
			  "STARS": 3.5
			},
			{
			  "REVIEW_ID": 4,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Oriental Style Instant Noodles",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 1
			},
			{
			  "REVIEW_ID": 3,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Tom Yum Shrimp",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 2,
			  "BRAND": "Wai Wai",
			  "VARIETY": "Tom Yum Chili Flavor",
			  "STYLE": "Pack",
			  "COUNTRY": "Thailand",
			  "STARS": 2
			},
			{
			  "REVIEW_ID": 1,
			  "BRAND": "Westbrae",
			  "VARIETY": "Miso Ramen",
			  "STYLE": "Pack",
			  "COUNTRY": "USA",
			  "STARS": 0.5
			}
		  ];
		resolve(RAMEN_REVIEWS);
	});
}