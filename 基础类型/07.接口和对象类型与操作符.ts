//在typescript中，我们【定义对象】的方式要用关键字interface（接口），
//使用interface来定义一种约束，让数据的结构满足约束的格式。定义方式如下：

//① 指定的接口，调用是接口的属性数量要一致
//② 同名接口会属性和方法会合并
//③ 也可以使用extends关键字继承接口
interface Human {
  name: string,
  age: number
}
interface Person extends Human{
  gander: string
}
const person: Person = {
  name: 'kellen',
  age: 18,
  gander: '男'
}


//④ 可选操作符：？
//可选属性的含义是该属性可以不存在
interface Food {
  meat?:string,
  fruit:string
}
const eat: Food = {
  fruit: 'Apple'
}

//⑤ 任意属性[propName: string]
//⑥ 只读属性readonly
interface Fruit {
  name: string,
  category: string,
  readonly area: string 
  [propName: string]: any
}
const apple: Fruit = {
  name: '苹果',
  category: '果',
  area: '北方',
  demo: 'demo'
}
//只读属性不能修改
// apple.area = '改'

console.log(apple);
