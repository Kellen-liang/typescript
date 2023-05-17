//语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如我这儿写了T
//当我们使用这个函数的时候把参数的类型传进去就可以了 （也就是动态类型）

// 1.函数泛型
// ① 当定义一个函数，还不确定它传入参数的类型时，可以定义一个泛型
function Add<T>(a: T, b: T): Array<T> {
  return [a, b]
}

Add<number>(1,2)
Add<string>('1','2')
//简写：类型推论
Add(1,2)
Add('1','2')

// ② 也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
function Sub<T , U>(a: T, b: U):Array<T | U> {
  let arr:Array<T | U> = [a, b]
  return arr
}
Sub<Boolean, number>(false, 1)


