// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function voidFn(): void {
  console.log('test void')
  // return //不报错
  // return 1 //报错
}

//void 类型的用法，主要是用在我们不希望调用者关心函数返回值的情况下，比如通常的异步回调函数
//void也可以定义undefined 和 null类型
let u: void = undefined
let n: void = null;