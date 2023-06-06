//① 一般函数
const fn1 = (name:string, age:number):string => {
  return name + age
}

//② 可选参数(参数默认值)
// const fn2 = (name: string , age:number = 18):any => {
const fn2 = (name: string , age?:number ):any => {
  return name + age
}

//③ 剩余参数
const fn3 = (array:number[],...items:any[]):any[] => {
  console.log(array,items)
  return items
}
let a:number[] = [1,2,3]
fn3(a,'4','5','6')


//④ 参数是一个对象
interface User{
  name: string;
  age: number;
}
function getUserInfo(user: User): User {
  return user
}
const user = getUserInfo({name:'kellen', age:18})
console.log(user);


// 对函数的增强
// ⑤ 函数this类型
interface Obj {
  num: number[],
  add: (this: Obj, val: number) => void
}
//ts 可以定义this 的类型 在js中无法使用，且定义时必须时第一个参数this的类型
let obj11:Obj = {
  num: [1, 2, 3],
  add(this:Obj, val: number){
    this.num.push(val)
  }
}

//⑥ 接口定义函数
//定义参数 num 和 num2 : 后面定义返回值的类型
interface Add {
  (num:  number, num2: number): number
}

const fn4: Add = (num: number, num2: number): number => {
  return num + num2
}
fn4(5, 5)