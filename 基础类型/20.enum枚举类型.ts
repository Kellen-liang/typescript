//在javaScript中是没有枚举的概念的TS帮我们定义了枚举这个类型
//例如有一个需求：红绿蓝 Red = 0 Green = 1 Blue= 2 分别代表红色0 绿色为1 蓝色为2
//使用js的写法:
const ColorNum1 = (val) => {
  if (val === 'Red'){
    return 0
  }
  if (val === 'Green'){
    return 1
  }
  if (val === 'Blue'){
    return 2
  }
}

const ColorNum2 = {
  'Red' : 0,
  'Green' : 1,
  'Blue' : 2,
}

//① 数字枚举
//默认就是从0开始的 可以不写值
enum ColorNum3 {
  Red,  //0
  Green,  //1
  Blue  //2
}
//调用
console.log(ColorNum3.Red);
console.log(ColorNum3.Green);
console.log(ColorNum3.Blue);

//② 增长枚举
enum ColorNum4 {
  Red = 1,  //1
  Green,  //2
  Blue  //3
}

//③ 字符串枚举
/* 
  由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 
  换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，
  这个值通常是很难读的 - 它并不能表达有用的信息，字符串枚举允许
  你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。
*/
enum ColorNum5 {
  Red = 'Red', 
  Green = 'Green',  
  Blue = 'Blue' 
}

//④ 异构枚举
//枚举可以混合字符串和数字成员
enum Types1{
  No = "No",
  Yes = 1,
}
enum Types2{
  Yes,  // 0
  No = "No",
}

//⑤ 接口枚举
enum Color{
  Red,
  Green
}
interface A {
  red: Color.Red
}
let obj: A = { 
  red: Color.Red
}

//⑥ const枚举
/* 
  let  和 var 都是不允许的声明只能使用const
  大多数情况下，枚举是十分有效的方案。 然而在某些情况下需求很严格。 
  为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，
  我们可以使用 const枚举。 常量枚举通过在枚举上使用 const修饰符来定义
*/
//区别：const 声明的枚举会被编译成常量；普通声明的枚举编译完后是个对象
const enum Types{
  No = "No",
  Yes = 1,
}

//⑦ 反向映射
//它包含了正向映射(通过键获取值)（ name -> value）和反向映射(通过值获取键)（ value -> name）
//不会为【字符串】枚举成员生成反向映射。
enum ENUM {
  fall  //这个实际是fall: 0
}
const a = ENUM.fall
console.log(a)  //0
const nameOf = ENUM[a]
console.log(nameOf) //fall