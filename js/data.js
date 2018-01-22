
/*var nearRestaurants = {
	'restaurants': [{name:'Rosetta',rating:'$$', adress:'fwefhuwhefiu'}
					{name:'Casa Franca',rating:'$$$', adress:'fwefhuwhefiu'}
						{name:'Vips',rating:'$', adress:'fwefhuwhefiu'}]
}*/

var restaurantes = [
	{
		nombre: 'rosetta',
		direccion: 'bbbshdwh'
	},
	{
		nombre: 'vips',
		direccion: 'bbbshdwh'
	},
	{
		nombre: 'franca',
		direccion: 'bbbshdwh'
	},
	{
		nombre: 'lola',
		direccion: 'bbbshdwh'
	},
]


var entradasInvalidas = 0;
// Si el elemento tiene un atributo id, y su valor correspondiente es un numero
// Y no es el valor NaN, entonces es una entrada válida
function filtrarPorID(obj) {
  if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    entradasInvalidas++;
    return false;
  }
}

var arrPorID = arr.filter(filtrarPorID);



function filterr(obj){
	if('nombre' in obj ==== $("#search-input").val().toLowerCase()){
		return true;
	}else{
		return false;
	}
}

var restaurantesfilter = restaurantes.filter(filterr);





     var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var userSearch = $("#search-input").val().toLowerCase();
var input = $("#search-input");
var data = restaurantes;

var filterRestaurants = function(){
	for(var i = 0; i<restaurantes.length; i++){
		var r = restaurantes[i];
		if (r.indexOf(filter) > -1){
			console.log('si');
		}
	}
}


var filterRestaurants = function(){
	for(var i = 0; i<restaurantes.length; i++){
		var r = restaurantes[i];
		if(r === vips{
			alert('si')
		}
	}
			
};
filterRestaurants();



