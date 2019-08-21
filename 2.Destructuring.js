//解构赋值


//1.数组的解构赋值
//按照一定模式，从数组和对象中提取值，对变量进行赋值。
//等号右边不是可遍历的结构，会报错。
{
    let [a, b, c] = [1, 2, 3];
    let [j,[k],l] = [1, [2], 3];
    let [x, , y] = [1, 2, 3];
}

//2.对象的解构赋值
//变量名和属性名相同时

{
    let {name, age} = {name:'Damon',age : 24};
    let {log, sin, cos} = Math;
}

{
    const {log} = console;
    log('Use log as console.log');
}

//变量名和属性名不同时，必须写成
{
    let {zero : zeroZone} = {zero : '0', one : '1', two : '2'};
}

//默认值
{
    let [foo = true] = [];
    foo //true
    
    let [m, n = 'b'] = ['a']; //x = 'a', y = 'b'
    
    let [o = 1] = [undefined];
    
    let [p = 1] = [null];
    
    //数组成员严格等于undefined时默认值才生效(===)
}

//注：
{
    let x;
    /*
    {x} = {x : 1};
    //Erorr.{x}会被认为是是一个代码块
    */
    ({x} = {x : 1});  //加个括号，避免大括号出现在行首

    // 解构赋值允许等号左边的模式中不放任何变量名
    ({} = [1,2]);
    ({} = []);
}

//3.字符串的解构赋值
{
    //字符串解构
    const [a, b, c, d] = 'HERO';

    //字符串的length属性解构
    let {length : l} = 'HERO';
}


//4.数值和布尔值的解构赋值
//规则：只要右边不是对象或者数组，就先其转成对象。undefined和null无法转成对象，所以不能解构赋值


//5.函数参数的解构赋值
{
    function add([x, y]) {
        return x + y;
    }

    let sum = add([1, 2]); // [x ,y] = [1, 2]解构

    // add();  //TypeError. 没有参数等于解构 [x, y] = undefined

    function move({x = 0,y = 0} = {}) {
        console.log('x = ' + x + ', y = ' + y);
        return[x, y];
    }

    move({x : 3, y : 4});   //3, 4
    move({x : 3});          //3, 0
    move({});               //0, 0
    move();                 //0, 0 
}

//6.解构赋值时，模式中尽量不放圆括号
//变量声明时，解构赋值不能用圆括号
//函数声明时，解构赋值不能用圆括号
//赋值语句的pattern里不能用圆括号

//7.使用解构赋值的几个场景
{
    //1.交换变量的值
    let x = 10;
    let y = 20;
    [x, y] = [y , x];

    //2.函数返回多个值
    function tmp() {
        return [1, 1, 2, 3];
    }
    let [a, b, c, d] = tmp();

    //3函数参数定义

    function funWithIndexedArg([x, y, z]) {
        //参数是数组
    }

    funWithIndexedArg([1,2,3]);

    function funWithArg({x, y, z}) {
        //参数是集合
    }

    funWithArg({z : 3, x : 1, y : 2});

    //4.提取json数据
    let json = {
        status: 0,
        productId : 12321,
        data : [224, 561]
    };

    let {status, productId, data} = json;
    //0 , 12321, [224, 561]

    //5.参数默认值

    //6.遍历Map
    const map = new Map();

    map.set('mobile' , '18888888888');
    map.set('name', 'Jane Joe');

    for (let [key, value] of map) {
        console.log(key + ':' + value);
    }

    //7.输入模块的指定方法
    // const {functionName, anotherFunctionName} = require('module-name');

}