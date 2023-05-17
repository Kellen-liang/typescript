// ① 一般的定义模式
var arr1: number[] = [1, 2, 3]; //数字类型的数组
var arr2: string[] = ["1", "2"]; //字符串类型的数组
var arr3: any[] = [1, "2", true]; //任意类型的数组

// ② 数组泛型定义
// 规则：Array<类型>
let arr4:Array<number> = [1,2,3,4,5]

// ③ 用接口表示数组（一般用来描述类数组 ）
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5]
//表示：只要索引的类型是数字时，那么值的类型必须是数字。

// ④ 多维数组
let data:number[][] = [[1,2], [3,4]];

// ⑤ arguments类数组
function Arr1(...args:any): void {
  console.log(arguments)
  //错误的arguments 是类数组不能这样定义
  // let arr:number[] = arguments
}
Arr1(111, 222, 333)

function Arr2(...args:any): void {
  console.log(arguments) 
  //ts内置对象IArguments 定义
  let arr:IArguments = arguments
}
Arr2(111, 222, 333)

//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
// interface IArguments {
// [index: number]: any;
// length: number;
// callee: Function;
// }

// ⑥ any 在数组中的应用：一个常见的例子数组中可以存在任意类型
let list: any[] = ['test', 1, [],{a:1}]