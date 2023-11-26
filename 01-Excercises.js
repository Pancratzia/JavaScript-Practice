//Print from 1 to 10, 3 by 3

for(let i = 1; i <= 10; i+=3){
    console.log(i);
}

//Print from 1 to -10, 3 by 3

for(let i = 1; i >= -10; i-=3){
    console.log(i);
}

//Acummulator of addition from 1 to 5

let sum = 0;
for(let i = 1; i <= 5; i++){
    sum += i;
}
console.log(sum);

let i = 1;
sum = 0;

while(i <= 5){
    sum += i;
    i++;
}
console.log(sum);

sum = 0;
i = 1;

do{
    sum += i;
    i++;
}while(i <= 5);
console.log(sum);


//Recursive Function - Print from 1 to 3

function funcionRecursiva(n){
    if(n === 1){
        console.log(n); //Caso base
    }
    else{
        console.log(n);
        funcionRecursiva(n-1);
    }
}

funcionRecursiva(3);