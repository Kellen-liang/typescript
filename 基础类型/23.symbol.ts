//symbol类型的值是通过Symbol构造函数创建的。可以传递参做为唯一标识 只支持 string 和 number类型的参数

// ① 声明
let sym1 = Symbol(1);
let sym2 = Symbol("key"); // 可选的字符串key

// ② 用作对象二等属性的键
let obj = {
    [sym2]: "value"
};
console.log(sym2)
console.log(obj[sym2]); // "value"

// ③ 使用symbol定义的属性，不能通过常规的遍历方式去获取属性
const symbol1 = Symbol('666')
const symbol2 = Symbol('777')
const obj1= {
   [symbol1]: '小满',
   [symbol2]: '二蛋',
   age: 19,
   sex: '女'
}
// 1 for in 遍历
for (const key in obj1) {
   // 注意在console看key,是不是没有遍历到symbol1
   console.log(key)
}
// 2 Object.keys 遍历
Object.keys(obj1)
console.log(Object.keys(obj1))
// 3 getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj1))
// 4 JSON.stringfy
console.log(JSON.stringify(obj1))

// ④ 获取symbol的值
// 1 拿到具体的symbol 属性,对象中有几个就会拿到几个
Object.getOwnPropertySymbols(obj1)
console.log(Object.getOwnPropertySymbols(obj1))
// 2 es6 的 Reflect 拿到对象的所有属性
Reflect.ownKeys(obj1)
console.log(Reflect.ownKeys(obj1))