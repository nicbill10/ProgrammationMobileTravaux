rnd = Math.floor((Math.random() * 20) + 0);
console.log(rnd);
trouve = false;

do{
	nombre = prompt("Devinez le nombre généré entre 0 et 20");
	
	if(nombre == rnd)
	{
		alert("Vous avez trouvé le bon nombre")
		trouve = true;
	}
	else if(nombre < rnd)
	{
		alert("Votre nombre est trop petit!")
	}
	else
	{
		alert("Votre nombre est trop grand")
	}
}while(trouve === false);

	
	


	