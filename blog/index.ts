const question : string = "What's your age?";   // Variable called 'question' that is declared as type string

let answer : number = 23;     // Variable called 'answer' that is declared as type number




answer = 24;    // Valid type assignment








answer = "24";  // Invalid type assignment


interface MultiplyFunction {
    (input: number): number;
}



const multiply: MultiplyFunction = (input: number) => {
    return input * 2;
}