//可以使用es6的Object.assign 合并多个对象
//此时 people 会被推断成一个交差类型 Name & Age & sex;
interface Name {
  name: string
}
interface Age {
  age: number
}
interface Gander {
  gander: string
}

const people1: Name = { name: 'kellen'}
const people2: Age = { age: 18 }
const people3: Gander = { gander: '男' }

//合并对象,返回一个新的对象
const people =  Object.assign(people1, people2, people3)