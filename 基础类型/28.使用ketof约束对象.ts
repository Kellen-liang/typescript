/* 
  使用keyof 约束对象其中使用了TS泛型和泛型约束。
  首先定义了T类型并使用extends关键字继承object类型的子类型，
  然后使用keyof操作符获取T类型的所有键，它的返回 【类型是联合类型】，
  最后利用extends关键字约束 K类型必须为keyof T联合类型的子类型
 */
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let obj = {a: 1, b: true, c:'kellen'}

prop(obj,'a') //返回number类型值
prop(obj,'b') //返回boolean类型值
prop(obj,'c') //返回string类型值