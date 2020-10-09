function filterCategory(input) {
    // Change if categories change
    var categories = ["Professional Societies", "Graduate Student Organizations","Competition Teams", "Project-based Teams", "Global Community Outreach",
            "Wellness and Mental Health", "Design, Make, Hack", "Entrepreneurship", "Fraternities/Sororities", "Local Community Outreach", "Honor Societies" ];

    // Declare variables
    var filter, cat;
    filter = categories[input];
    cat = document.getElementsByClassName("category")


    // Loop through all list items, and hide those who don't match the search query
    for (var category of cat) {
    	if ($(category).find(".title").text() == filter) {
    		$('html,body').animate({
		        scrollTop: $(category).offset().top - 180},
		        'slow');
    	}
    }
}
