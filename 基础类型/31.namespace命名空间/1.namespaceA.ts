/* 
我们在工作中无法避免全局变量造成的污染，TypeScript提供了namespace 避免这个问题出现:
  ① 内部模块，主要用于组织代码，避免命名冲突。
  ② 命名空间内的类默认私有
  ③ 通过 export 暴露
  ④ 通过 namespace 关键字定义
TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。
相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）
*/

// 1.简单例子
// 命名空间中通过export将想要暴露的部分导出
// 如果不用export 导出是无法读取其值的
namespace namespanceA {
  export const Time: number = 1000
  export const fn = <T>(arg: T): T => {
      return arg
  }
  fn(Time)
}
namespace namespanceB {
  export const Time: number = 1000
  export const fn = <T>(arg: T): T => {
     return arg
 }
 fn(Time)
}
console.log(namespanceA.Time);
console.log(namespanceB.Time);
 

