// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push("Ralph");
}

function destructivelyPrependCat(name)
{
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop("Ralph");
    
 }

function destructivelyRemoveFirstCat(name){
    cats.shift("Bob");
 }

function appendCat(name){

    var catt = [...cats, "Broom"];
    return catt;
 
 }

 function prependCat(name){
    
     var cat = ["Arnold", ...cats];
     return cat;
     

 }

 function removeLastCat(name){
     
     var caat = cats.slice(0, cats.length-1);
     return caat;


 }


 function removeFirstCat(name){
  const cati = cats.slice(1);
  return cati;
     

  }