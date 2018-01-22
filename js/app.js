



function loadPage(){
	setTimeout(function () { $(".div1").fadeOut(2000); }, 1000);
	setTimeout(function () { $(".div2").fadeIn(5000); }, 1000);
	$("#search-input").keyup(filterRestaurants);
	paintNearRestaurants(restaurants);
	
};

var restaurants = [
	{
		name: 'ROSETTA',
		adress: 'bbbshdwh',
		rating: '$$'

	},
	{
		name: 'VIPS',
		adress: 'bbbshdwh',
		rating: '$'

	},
	{
		name: 'FRANCA',
		adress: 'bbbshdwh',
		rating: '$$$'

	},
	{
		name: 'LOLA',
		adress: 'bbbshdwh',
		rating: '$$'

	},
]


//esta funcion filtra los restaurantes
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
/*var filterContacts = function() {
    //Esta funcion debe de filtrar la data segun el valor que el usuario ingrese en el input de busqueda
    var searchContact = $("#searcher").val().toLowerCase();
    if($("#searcher").val().trim().length > 0){
      var filteredContacts = contactArray.filter(function(contact) {
        return contact.name.toLowerCase().indexOf(searchContact) >= 0;
      });
      $("#publish-contacts").empty();
      filteredContacts.forEach(function(contact) {
        paintContactsInHTML(contact);
      });
    } else{
      $("#publish-contacts").empty();
      contactArray.forEach(function(contact) {
        paintContactsInHTML(contact);
      });
    }
  };*/
var filterRestaurants = function (e) {
	e.preventDefault();
	var findRestaurant = $('#search-input').val().toLowerCase();
	var locateRestaurant = restaurants.filter(function(obj) {
			return restaurants.name.toLowerCase().indexOf(findRestaurant) >= 0;
			paintNearRestaurants(locateRestaurant);
		})
}

//poner prevent default, solo la funcion filtro 

/*function  filterRestaurants () {
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
}*/
/*
var filterRestaurants =function() {
	var findRestaurant = $('#search-input').val().toLowerCase();
	for(var i = 0; i < restaurants.length; i++) {
	} if($('#search-input').val().trim().length > 0) {
		var restaurantName = restaurants[i].name;
		locateRestaurant = restaurants.filter(function(restaurantName) {
			return restaurantName.name.toLowerCase().indexOf(findRestaurant) >= 0;
		}
	} 

	}
}*/


/*var userSearch = $("#search-input").val().toLowerCase();
var input = $("#search-input");
var data = restaurantes;

var filterRestaurants = function(){
	for(var i = 0; i<restaurantes.length; i++){
		var r = restaurantes[i];
		if (r.indexOf.filter > -1){
			console.log('si');
		}
	}
}*/
/*
function filterRestaurants(obj){
	if('nombre' in obj === $("#search-input").val().toLowerCase()){
		return true;
	}else{
		return false;
	}
}

var restaurantesfilter = restaurantes.filter(filterRestaurants);

*/


/* Función que crear elementos con DOM html de los restaurantes cercanos en la main view */
var paintNearRestaurants = function(restaurantName) {

	for( var i=0; i<restaurants.length; i++){
    var $nearRestaurant = $('<div/>',{'class':'restaurant'});
   	var $restaurantName = $('<h4/>',{'class':'name'});
    //var $restaurantAdress =$('<p/>',{'class':'adress'});
    //var $restaurantRating =$('<p/>',{'class':'rating'});
    var $btnMore = $('<button type="button"/>');
    var $btnIcon = $('<i/>', {'class':'fa'});

	$restaurantName.text(restaurants[i].name);
	//$restaurantAdress.text(restaurants[i].adress);
	//$restaurantRating.text(restaurants[i].rating);
	$btnMore.attr("data-toggle", "modal");
	$btnMore.attr("data-target", "#Mymodal" );
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
}


//$btnMore.modal(); 








$(document).ready(loadPage);
