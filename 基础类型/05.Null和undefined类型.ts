let un: undefined = undefined;//定义undefined
let nu: null = null;//定义null

// void 和 undefined 和 null 最大的区别
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：
//这样写会报错 void类型不可以分给其他类型
/* 
  let test: void = undefined
  let num2: string = "1"
  
  num2 = test
*/

//这样是没问题的
let test: null = null
let num2: string = "1"
 
num2 = test
 
//或者这样的
// let test: undefined = undefined
// let num2: string = "1"
 
// num2 = test