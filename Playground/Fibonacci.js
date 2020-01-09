function Fibonacci(n) {
    if (n <= 1) return 1;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function logFibonacci(n) {
    for (let index = 0; index < n; index++) {
        console.log(Fibonacci(index));        
    }
}

logFibonacci(10);