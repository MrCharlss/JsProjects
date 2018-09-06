
/* let impVeces = function(veces){
    let pir = " "
    for (let i = 0; i < veces;i++){
        pir += "#";
        console.log(pir);
    }
}

impVeces(7); */

let totalNumber = 1000;

let fizzBuzz = function(totalNumber){
    for (let i = 0; i <= totalNumber; i++){
        if (i % 3 == 0 && i % 5 ==0){
            console.log(i + " is FizzBuzz");
        }else if (i % 3 == 0){
            console.log(i + " is Fizz");
        }else if (i % 5 == 0){
            console.log(i + " is Buzz");
        }else {
            console.log(i);
        }
    }
}
fizzBuzz(totalNumber);

    


