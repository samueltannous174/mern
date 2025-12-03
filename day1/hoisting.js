console.log(hello);
var hello = 'world';

var hello;
console.log(hello); 
hello = 'world';

//undefined


var needle = 'haystack';
test();

function test() {
  var needle = 'magnet';
  console.log(needle);
}


var needle = 'haystack';
function test() {
  var needle;
  needle = 'magnet';
  console.log(needle); 
}
test();


//magnet


var brendan = 'super cool';
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);


var brendan = 'super cool';
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan); 


//super cool




var food = 'chicken';
console.log(food);
eat();
function eat() {
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}



var food = 'chicken';
function eat() {
  var food;                
  food = 'half-chicken';
  console.log(food);       
  food = 'gone';
}
console.log(food);         
eat();



//chicken
//half-chicken




mean();
console.log(food);
var mean = function() {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
}
console.log(food);




var mean;               
mean();                
console.log(food);
mean = function() {
  var food;
  food = "chicken";
  console.log(food);
  food = "fish";
  console.log(food);
};
console.log(food);



//Uncaught TypeError: mean is not a function



console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);




var genre;
function rewind() {
  var genre;           
  genre = "rock";
  console.log(genre);   
  genre = "r&b";
  console.log(genre);   
}
console.log(genre);    
genre = "disco";
rewind();
console.log(genre);     





// undefined
// rock
// r&b
// disco




dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);


dojo = "san jose";
function learn() {
  var dojo;            
  dojo = "seattle";
  console.log(dojo);   
  dojo = "burbank";
  console.log(dojo);   
}
console.log(dojo);     
learn();
console.log(dojo);     



// san jose
// seattle
// burbank
// san jose


