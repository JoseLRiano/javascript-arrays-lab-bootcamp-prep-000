const app = "I don't do much."
var arr = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  arr.shift(name);
  return arr;
}
