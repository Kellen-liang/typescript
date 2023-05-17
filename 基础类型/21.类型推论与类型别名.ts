// 1. 类型推论
// 什么一个没有类型的变量，TS自动推论出它的类型

// 2. 类型别名
// type 关键字（可以给一个类型定义一个名字）多用于符合类型

// ① 定义类型别名
type str1 = string
let s1:str1 = "kellen"
console.log(s1);

// ② 定义函数别名
type str2 = () => string
let s2: str2 = () => "kellen"
console.log(s2);

// ③ 定义联合类型别名
type str3 = string | number
let ss: str3 = 123
let ss1: str3 = '123'
console.log(ss,ss1);

// ④ 定义值的别名
//变量sss的值  只能是上面value定义的值
type value = boolean | 0 | '123'
let sss1:value = true
let sss2:value = 0
let sss3:value = '123'