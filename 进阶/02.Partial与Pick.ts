//1.Pertial源码 (Pertial:部分)
/**
 * Make all properties in T optional
  将T中的所有属性设置为可选
 
  type Partial<T> = {
    [P in keyof T]?: T[P];
};

*/
/* 
  -keyof 是干什么的？
  -in 是干什么的？
  -? 是将该属性变为可选属性
  -T[P] 是干什么的？

  1 keyof我们讲过很多遍了 将一个接口对象的全部属性取出来变成联合类型
  2 in 我们可以理解成for in P 就是key 遍历  keyof T  就是联合类型的每一项
  3 ？这个操作就是将每一个属性变成可选项
  4 T[P] 索引访问操作符，与 JavaScript 种访问属性值的操作类似
*/

type Person = {
  name: string,
  age: number,
  gander: string,
  text: string,
  address: string
}

//【本来Person的类型是必备类型，通过Pertial改变成可选类型】
type p = Partial<Person>

const man:p = {
  name: 'kellen'
}
console.log(man)


//2.Pick源码  (Pick：挑选)
/*  
  type Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };
*/

//通过Ex挑选出Person想要的约束类型
type Ex = "text" | "age" 
type A = Pick<Person,Ex>