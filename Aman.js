function isPrime(num){
    if(num == 1)
        return false;
    for(let i=2; i<=num/2; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

function findNthPrime(n){
    if(n < 1)
        return -1;
    let count = 0;
    for(let i=2; i<=10000; i++){
        if(isPrime(i))
            count++;
        if(count == n)
            return i;
    }
}

console.log(findNthPrime(5));
console.log(findNthPrime(3));
console.log(findNthPrime(10));
console.log(findNthPrime(12));
console.log(findNthPrime(1000));