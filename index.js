var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(){
  kitten.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kitten.shift();
  return kittens
}
// Add your functions and code here
