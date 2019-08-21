//1.let 声明的变量仅在let所在的代码块内有效（var 全局 let局部）

var alpha = "Alpha";

{
    var beta = "Beta";
    let omega = "Omega";
}

console.log(alpha);
console.log(beta);
// console.log(omega); //ReferenceError: omega is not defined


//2.块作用域 ES5没有块作用域

var a = [];
for (var index = 0; index < 10; index++) {
    a[index] = function () {
        console.log(index);
    };   
}

a[6](); //10

//let声明index的话，log 6.


//3.let不存在变量提升 & 暂时性死区

//变量提升：var声明的变量可以在声明之前使用。目前先理解为，会将声明提前到进入声明所在的作用域开始时。

//暂时性死区：块级作用域内let/const声明的变量会绑定这个区域，不受外部影响。

//再加上let/const不存在变量提升。let/const 所在的块级作用域的开始到let/const 声明的区间内，不可获取和使用这个变量。

//进到当前作用域，变量就已经存在，但是不可获取。

var date = new Date();

function logDate() {
    console.log(date);

    if(false) {
        var date = 'Changed';
    }
}

console.log(date);

logDate();

console.log(date);



//4.ES6中6种声明方法：
//var function
//let const import class


//5.顶层对象
//顶层对象：浏览器环境指window对象。在Node指global对象

//ES5中，顶层对象的属性和全局变量是等价的。

window.a = 1;
a // 1

a = 2;
window.a //2

//ES6中，var和function声明的全局变量，仍是顶层对象的属性。let const class声明的全局变量不属于顶层对象的属性
let b = 1;

window.b // undefined


//globalThis

//浏览器中顶层对象是window，self指向顶层对象。
//Node 没有window和self，对应的是global和this