// arrowFunction
let array= ["Fizz", "Buzz"]
let FizzBuzz=(num1,num2)=>{
    for(let i=0;i <=100; i++){
        if(i%num1== 0 && i%num2 == 0){
            console.log(array.join(" ")+ " "+ i);
        }
        else if(i%num1 == 0){
            console.log(array[0] + " "+ i);
        }else if(i%num2 == 0){
            console.log(array[1] + " "+ i);
        }else{
            console.log(i);
        }
    }   
}
FizzBuzz(2,3)