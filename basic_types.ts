//boolean

let flag: boolean = true;
console.log("Value assigned to flag is:" +flag);

//number
let num: number = 6;
console.log("Value assigned to num is:" +num);

//string
let hello: string = "Hello Louis";
console.log("Value assigned louis is" +hello);

//array
let array: number[] = [1,2,3];
console.log("Value assinged to array is:" +array);

//tuple
let x: [string, number];
x = ["I am", 21];
console.log(x[0].substr(1));


//enum
enum Colour{Red, Green, Blue} 
let c: Colour = Colour.Blue;