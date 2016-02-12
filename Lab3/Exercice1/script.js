
var valeurSaisie;
	
valeurSaisie = prompt("Entrez un nombre pour voir sa table de multiplication");
	
for(i=0; i<13; i++)
{
	produit = i * valeurSaisie;
	console.log(valeurSaisie + " x " + i + " = " + produit);
}
