const log = console.log;

//1.Unicode
log("\u0061");              //a

//两个字节的unicode:
log("\uD842\uDFB7");        //𠮷

//如果直接写成十六进制，默认识别是一个字节+后续:\u20BB + 7
log("\u20BB7");

//对这种情况ES6新增点码加大括号的语法：
log("\u{20BB7}");           //𠮷

log("\u{50}\u{51}\u{52}");  //PQR

//2.字符串遍历 for of
{
    for (let codePoint of 'MaskIsland') {
        log(codePoint);
    }
    //of可以识别码点，直接for循环取下标会把两个字节或三个字节的unicode拆开

    let str = "𠮷𠮷𠮷𠮷";
    for (let i = 0; i < str.length; i++) {
        log(str[i]);
    }

    for (const char of str) {
        log(char);
    }
}

//3.字符 === 字符的转义形式

log('中'==='\u4e2d');

/*5个字符不能再字符串直接使用，必须使用转义形式：
u005C   反斜杠
u000D   回车
u2028   行分隔符    //JSON允许直接使用，不必使用转义
u2029   段分隔符    //JSON允许直接使用，不必使用转义
u000A   换行符
*/


//4.模板字符串
{
    let productName = 'iPhoneX';
    let count = 20;

    let output = 'Product Name:' + productName + '.\nStoke:'+count + '.';
    log(output);

    //模板字符串优化了这种写法
    let sameOutput = `Product Name:${productName}.\nStoke:${count}.`;
    log(sameOutput);

    //a.如果字符串中出现`需要转义\`
    //b.模板中的空格换行都会被保留
    let withBlank = `
        String 
            with 
                line 
                    feed\`
    `;
    log(withBlank);
}

//5.标签模板
{
    //模板字符串放在函数名后，该函数会被调用来处理这个模板字符串。

    // alert`123`

    //如果模板字符串有变量，会将模板字符串转成多个参数，再调用

    function tag(stringArr , value1, value2) {

        log(1);
    }

    let a = 5;
    let b = 10;

    tag`Hello ${ a + b } world ${ a * b }`;
    
}
