var apikey = 'beaf274258358eb4e4880d1b1bfdf6bfaf69d4c9'; 

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
    console.log(results);
    for(var i=0; i< results.length; i++){
		$('.container').append('<div class="resultsDiv"></div>');
		$('.resultsDiv').append('<p>Title: ' + results[i].name + '</p>');
		$('.resultsDiv').append('<img src=' + results[i].image.medium_url + '>');
	}
}

$(document).ready(function() {
	$("body").on('click', '.submitButton', function(){
		var $inputs = $('#searchInput :input');
		var videoGamesObject = {};
		$inputs.each(function(){
			videoGamesObject[this.name] = $(this).val();
		});
		
		search($inputs);
	// Start the search here!
	});
	//$('#searchInput')[0].reset();
	$("body").on('click', '.resultsDiv', function(){
		$('.resultsDiv').append('<p>Description: ' +  + '</p>');
		$('.resultsDiv').append('<p>Release Date: ' +  + '</p>');
		$('.resultsDiv').append('<p>Platform: ' +  + '</p>');
	});
});


// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});

}
