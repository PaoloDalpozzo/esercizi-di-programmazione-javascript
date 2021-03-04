/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/


var menu = 7;
var one = 'Tiramisù';
var two = 'Torta della nonna';
var three = 'Cheesecake alla nutella';
var four = 'Macedonia';
console.log('MENU:');
console.log('1.'+one);
console.log('2.'+two);
console.log('3.'+three);
console.log('4.'+four);
if(menu==1){
  console.log('Hai scelto il dolce '+one);
}
if(menu==2){
  console.log('Hai scelto il dolce '+two);
}
if(menu==3){
  console.log('Hai scelto il dolce '+three);
}
if(menu==4){
  console.log('Hai scelto il dolce '+four);
}
if(menu>4){
  console.log('Dolce n.'+menu+' non disponibile');
}

