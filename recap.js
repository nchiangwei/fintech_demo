// highlight all ctr + / to quick highlight all

//let x = 12.0;

//x = "Dixant";

//console.log ("Mah Message");

//console.log(x);

//console.log(`Value of x : ${x}`);

// condition statement
//let age = 1;
//if(age >18){
 //   console.log("You can vote!");
//}else {
//    console.log("You cannot vote right now!");
//}

//*another example
//let x = 12;
//let y = 3;

//console.log(
//  "Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = ",
//  +(x / y)
//);

//console.log(`Value of x: ${x}, Value of y: ${y}, and ${x}/${y} = ${x / y}`);

//Functions
//function print_sum(a,b){
 //   console.log(`a:${a}`);
  //  console.log(`b:${b}`);

   // console.log(`a+b = ${a+b}`);
//}

//print_sum(2,3);

//more functions example

//function add(a,b){
  //  return a+b;
//}
//var sum = add(2,3);
//console.log(`Sum = ${sum}`);

// anonymous functions
// var function_to_print_sum = function (a,b){
//     console.log("a+b =" + (a+b));
// }

// console.log(function_to_print_sum);

// Arrow functions
// var function_to_print_sum = (a,b) => {
//     console.log("a+b =" +(a+b));
// }
// function_to_print_sum(4,4);

function print_after_operation(a,b,operation){
    var result = operation(a,b);
    console.log("Results:" + result);
}

function add(a,b){
    return a+b;
}
function product (a,b){
    return a*b;
}

print_after_operation(3,4,add);
print_after_operation(3,4,product);
print_after_operation(3,4,(a,b)=>{ // no function therefore return 3-4
    return a-b;
});
