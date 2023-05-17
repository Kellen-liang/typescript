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


//④ 接口定义函数
//定义参数 num 和 num2 : 后面定义返回值的类型
interface Add {
  (num:  number, num2: number): number
}

const fn4: Add = (num: number, num2: number): number => {
  return num + num2
}
fn4(5, 5)


interface User{
  name: string;
  age: number;
}
function getUserInfo(user: User): User {
  return user
}
const user = getUserInfo({name:'kellen', age:18})
console.log(user);
