
function loadPage(){
	setTimeout(function () { $(".div1").fadeOut(2000); }, 3000);
	setTimeout(function () { $(".div2").fadeIn(5000); }, 3000);
	//paintNearRestaurants(restaurants);
	$("#search-input").keyup(filterRestaurants);
};





/*var filterRestaurants = function() {
	var searchedRestaurant = $('#search-input').val().toLowerCase(); 
	//console.log(searchedRestaurant);
	restaurants.forEach(function(obj){
		var name = obj.name;
		//console.log(name);
		if(name.toLowerCase().indexOf(searchedRestaurant)!=-1){
			 $(".restaurants-container").show();
		}else{
			 $(".restaurants-container").hide();
		}
	})
}*/


//esta función filtra los restaurantes
function  filterRestaurants () {
	var findRestaurant = $('#search-input').val().toLowerCase();
	if($('#search-input').val().trim().length > 0) {
		for(var i = 0; i<restaurants.length; i ++) {
			var restaurantName = restaurants[i].name;
			console.log(restaurantName);
			var locateRestaurant = restaurants.filter(function(restaurantName) {
				return restaurantName.name.toLowerCase().indexOf(findRestaurant) >= 0;
			});
		}
			$('.restaurants-container').empty();
			locateRestaurant.forEach(function(restaurantName) {
				paintNearRestaurants(restaurantName);
			});
	} else {
		$('.restaurants-container').empty();
		restaurants.forEach(function(restaurantName) {
			paintNearRestaurants(restaurantName);
		});
	}
}

//Función que crea elementos dinámicamente con DOM 
var paintNearRestaurants = function(restaurantName) {
   
    var $nearRestaurant = $('<div/>',{'class':'restaurant'});
   	var $restaurantName = $('<h4/>',{'class':'name'});
    //var $restaurantAdress =$('<p/>',{'class':'adress'});
    //var $restaurantRating =$('<p/>',{'class':'rating'});
    var $btnMore = $('<button type="button"/>');
    var $btnIcon = $('<i/>', {'class':'fa'});

	$restaurantName.text(restaurantName.name);
	//$restaurantAdress.text(restaurants[i].adress);
	//$restaurantRating.text(restaurants[i].rating);
	//$nearRestaurant.text(restaurantName.name);

	$btnMore.attr({
		"data-toggle" : "modal",
		"data-target" : "#myModal" 
	});

	/*$btnMore.attr("data-toggle", "modal");
	$btnMore.attr("data-target", "#Mymodal" );*/
	$btnMore.addClass("btn"); 
	$btnMore.addClass("btn-outline-secondary"); 
	$btnMore.addClass("btn-more"); 
	$btnIcon.addClass("fa-plus"); 
	$btnIcon.attr("aria-hidden","true");

	
	$btnMore.append($btnIcon);
    $nearRestaurant.append($restaurantName);
   	//$nearRestaurant.append($restaurantAdress);
    //$nearRestaurant.append($restaurantRating);
    $nearRestaurant.append($btnMore);
    $(".restaurants-container").prepend($nearRestaurant);
    
	 
}


$(document).ready(loadPage);
