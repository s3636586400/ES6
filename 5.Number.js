//二进制表示：前缀0b 0B
console.log(0b11 == 3);//true
//八进制表示：前缀0o 0O
console.log(0o11 == 9);//true

Number.isFinite('111');
Number.isNaN(NaN);

Number.EPSILON

if (0.1 + 0.2 == 0.3) {
    1;
}else {
    2;
}

if (0.1 + 0.2 - 0.3 < Number.EPSILON) {
    1;
}else {
    2;
}