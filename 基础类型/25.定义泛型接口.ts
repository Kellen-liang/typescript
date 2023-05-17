//声明接口的时候 在名字后面加一个<参数>
//使用的时候传递类型
interface MyInter<T> {
  (arg: T): T
}
function fn<T>(arg: T): T {
  return arg
}
let result: MyInter<number> = fn
result(123)