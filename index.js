// Write your solution here!
//assign values  "Milo", "Otis", "Garfield"  to array cats
const cats =["Milo", "Otis", "Garfield"]

//add element at the end of the array
function destructivelyAppendCat(name){
    cats.push(name)
}
//add element at the beginning of the array
function destructivelyPrependCat(name){
    cats.unshift(name)
}
//removes last cat from the array
function destructivelyRemoveLastCat(){
    cats.pop()
}
//removes first cat from the cats array
function destructivelyRemoveFirstCat(){
    cats.shift()
}
// append cats array to new array leaving cats array unchanged
function appendCat(name){
    const newcats = [...cats];
    newcats.push(name);
    return newcats
}
function prependCat(name){
    const newcats = [...cats];
    newcats.unshift(name)
    return newcats;
}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
 function removeLastCat(){
     const newcats= [...cats]
     newcats.pop()
     return newcats;
 }
 //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged:
function removeFirstCat(){
    const firstCat=[...cats]
    firstCat.shift()
    return firstCat;
}



