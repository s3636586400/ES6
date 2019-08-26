/*
1.String.fromCodePoint

String.fromCharPoint 不能识别码点大于OxFFFF的字符
String.fromCodePoint 可以..

注意 这俩货是类方法


2.String.raw()

转义字符串中的斜杠

3.
codePointAt()
charCodeAt()
charAt()

注意1 codePointAt返回的是编码值，charAt返回的是字符.

codePointAt的下位是charCodeAt，charAt的上位目前只知道一个for of

注意2 codePointAt的参数仍然是字节索引，不是字符索引

注意3 这俩货是实例方法

let s = '𠮷a';

codePointAt(0)//𠮷
codePointAt(3)//a index不是2.

4.normalize()

识别Unicode字符合成的方法，略


5.includes() startsWith() endsWith()
略

6.repeat()

'Go'.repeat(3) //GoGoGo


*/