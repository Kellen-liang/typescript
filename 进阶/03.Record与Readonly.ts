// 1.Readonly
/* 
  源码：
  type Readonly<T> = {
      readonly [P in keyof T]: T[P];
  };

  -keyof 是干什么的？
  -in 是干什么的？
  -Readonly 是将该属性变为只读
  -T[P] 是干什么的？

  1 keyof我们讲过很多遍了 将一个接口对象的全部属性取出来变成联合类型
  2 in 我们可以理解成for in P 就是key 遍历 keyof T 就是联合类型的每一项
  3 Readonly 这个操作就是将每一个属性变成只读
  4 T[P] 索引访问操作符，与 JavaScript 种访问属性值的操作类似

*/

type Phone = {
  name: string,
  price: number
}

//变成自读属性
type P = Readonly<Phone>

// 2.Record (Record：记录)
/* 
  源码：
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };

1 【keyof any 返回 string number symbol 的联合类型】
2 in 我们可以理解成for in P 就是key 遍历 keyof any 就是string number symbol类型的每一项
3 extends来约束我们的类型
4 T 直接返回类型
做到了约束 对象的key 同时约束了 value

*/

//K:接收的类型只能是string number symbol(传入作为第一个参数，作为新类型B的键)
//第二个参数是约定的value类型，作为值的类型
type K = number | string| symbol
type K2 = 1 | "A"| 'B'
type B = Record<K, Phone>
type B2 = Record<K2, Phone>

const symbol  = Symbol('shouji')
const obj1:B = {
  Nokia: {
    name: 'Nokia',
    price: 1669
  },
  1: {
    name: 'readme',
    price: 1889
  },
  [symbol]: {
    name: 'huawei',
    price: 2889
  }
}

const obj2:B2 = {
  1: {
    name: 'Nokia',
    price: 1669
  },
  A: {
    name: 'readme',
    price: 1889
  },
  B: {
    name: 'huawei',
    price: 2889
  }
}

console.log(obj1);
console.log(obj2);
