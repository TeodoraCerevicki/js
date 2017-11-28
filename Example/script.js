// Domaci 22. novembar

//1. Napisati kod koji će za svaki broj od 1 do 10 ispisati da li je paran ili neparan

for(var i=1; i <= 10; i++ ){
	if(i % 2 == 0) {
		console.log( i + "broj je paran");
	} else {
		console.log(i + "broj je neparan");
	}
}



//2. Izračunati sumu prvih N prirodnih brojeva (npr. za broj 3 bi bilo 1 + 2 + 3 = 6 ). 
//N  je ceo nenegativan broj

function broj(br) {
	var rezultat = 0;

	for(var i = 0; i <= br; i++){
		rezultat += i;
	}
	console.log(rezultat);
}
broj(5);






//3. Izračunati faktorijel zadatog broja (faktorijel broja 5 je 1 * 2 * 3 * 4 * 5 = 120)

function broj(br) {
	var rezultat = 1;

	for(var i = 1; i <= br; i++){
		rezultat *= i;
	}
	console.log(rezultat);
}
broj(5);



//4. Izračunati koliko komada proizvoda možemo da kupimo ako znamo koliko para imamo na 
//računu i koliko košta jedan proizvod (stanje na računu: 325 din, cena proizvoda 14 din)

var racun = 325;
var cena = 14;
var komada = Math.floor(racun / cena);

console.log(komada);



// Domaci 25. novembar

//1. Naći najveći element niza i ispisati u konzoli: "Najveći element niza je: ".
//Npr. [23, 43, -8, 77, 0, 23, 15] > Najveći element niza je: 77

niz = [23, 43, -8, 77, 0, 23, 15];
max = 0;

for(var i=0; i <= niz.length; i++){
	if( max < niz[i]){
		max = niz[i];
	}
}

console.log(max);



//2. Dupliranjem elemenata niza napraviti drugi niz.
//Npr:
  //var prviNiz = [7, 15, 45, 78, 20, 9]; 
  //drugi niz bi trebalo da sadrži vrednosti 14, 30, 90, 156, 40, 18

var prviNiz = [7, 15, 45, 78, 20, 9]; 
var drugiNiz = [];

for(var i = 0; i < prviNiz.length; i++){
	drugiNiz.push( 2*prviNiz[i]);
}

console.log(drugiNiz);



//3. Razvrstati elemente niza prema parnosti i smestiti ih u posebne nizove
//Primer:
//          var niz = [16, 23, 3, 78, 9, 14, 17];
  //    Na kraju nam treba:
    //      var parni = [16, 78, 14];
      //    var neparni = [23, 3, 9, 17];

      var niz = [16, 23, 3, 78, 9, 14, 17];
      var parni = [];
      var neparni = [];

      for( var i=0; i < niz.length; i++){
      	if(niz[i] % 2 == 0){
      		parni.push(niz[i]);
      	} else {
      		neparni.push(niz[i]);

      	}
      }

      console.log(parni);
      console.log(neparni);


// domaci 25. novembar broj 2

var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30]
var pdv = [];
var trosak = 0;

for(var i = 0; i < cene.length; i++){
	if(cene[i] < 50){
		pdv.push(cene[i] + ((18 / 100)* cene[i]));
		
	}
	else{
		pdv.push(cene[i] + ((8 / 100)* cene[i]));
		

	}
}

for(var i = 0; i < pdv.length; i++){
	trosak += pdv[i];
}
console.log(pdv);
console.log(trosak);





//Napisati program koji će za unetu reč proveriti da li je palindrom. 
//Palindromi su reči koje se mogu čitati i sa leva na desno i sa desna na levo sa istim značenjem. 

function palindrom(name){
	newName = name.split("").reverse().join("");
	if(name === newName){
		console.log("rec je palindrom");
	} else {
		console.log("rec nije palindrom");

	}
}

palindrom(ana);


// Vezbe 26. novembar 

//1. Napisati funkciju koja prima broj od 1-10. Unutar funkcije 
//generisati nasumičan broj (Math.random) od 1-10 i ispisati korisniku 
//da li je pogodio broj ili ne.

function broj (br){
	random = Math.random();

	if(br > 0 && br < 11 && random > 0 && random < 11){
		if(br === random){
			console.log("pogodili ste");
		}else
		console.log("niste pogodili");
	}
}
broj(5);


//2. Napisati funkciju koja prima 4 broja, posebno sabira pozitivne,
//posebno negativne i vraća njihov proizvod (pozitivni * negativni)

function sabiranje(niz){
	var pozitivni = 0;
	var negativni = 0;
	var proizvod;

	for(var i=0; i < niz.length; i++){
		if(niz[i] > 0){
			pozitivni += niz[i];
			console.log(pozitivni);
		} else {
			negativni+= niz[i];
		}
	}

	if(pozitivni > 0 && negativni < 0){
		proizvod = pozitivni*negativni;
	} else if (pozitivni > 0 && negativni === 0) {
		proizvod = pozitivni;

	}  else {
		proizvod = negativni;

	}
	console.log(proizvod);
}

sabiranje( [4, 2, -6, 66]);

//3. Napisati funkciju koja prima niz kao parameter i sabira prvi i 
//poslednji element niza. Funkcija treba da podržava niz bilo koje veličine. 
//Hint: iskoristiti length.

function arrey(niz){
	zbir= niz[0] + niz[niz.length - 1];
	console.log(zbir);
}

arrey([2, 5, 6, 8]);

//4. Napisati funkciju koja prima niz brojeva i sabira poslednja tri. 
//Funkcija treba da podržava niz bilo koje veličine.




///5. Napisati funkciju koja prima niz i dva broja koji predstavljaju indexe. 
//Zameniti vrednosti u nizu na datim indexima. Primer: ako su indexi 3 i 10  
//potrebno je zameniti vrednosti niz[3] i niz[10]


//6. Napisati funkciju koja prima niz i vraća drugi niz sa obrnutim redosledom 
//elemenata, tako da je poslednji element u prvom nizu bude prvi element u 
//poslednjem nizu, pretposlednji drugi, itd... 
//Primer: [15, 3, 9, 69, 100] > [100, 69, 9, 3, 15]

var niz = [15, 3, 9, 69, 100];
var noviNiz = niz.split("").reverse().join("");

console.log(noviNiz);


//7. Napisati funkciju koja prima tri parametra. Prvi parametar treba da bude niz 
//brojeva, drugi parametar početni index i drugi krajnji index. Sabrati elemente niza
 //od početnog do krajnjeg indexa.
 
//Primer ulaznih podataka [10, 33, 77, 50, 9, 17, 3, 120], 2, 5 > sabrati brojeve 
//od 2. do 5. indexa uključujuci i 2. i 5.
 
//Primer izlaznih podataka: 153

function triParametra(niz, prviIndex, drugiIndeks){
var zbir = 0;
for(var i = 0; i < niz.length; i++){
	zbir += niz[i];
}

for(var i = prviIndex; i <= drugiIndeks; i++){
	zbir += i;
}
console.log(zbir);
}

triParametra([10, 33, 77, 50, 9, 17, 3, 120], 2, 5);