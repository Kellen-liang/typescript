//infer (推论、推断)
//infer 是TypeScript 新增到的关键字 充当占位符
//我们来实现一个条件类型推断的例子
//定义一个类型 如果是数组类型 就返回 数组元素的类型 
//否则 就传入什么类型 就返回什么类型

type Infer<T> = T extends Array<any> ? T[number]: T
type demo1 = Infer<(string | number)[]>
type demo2 = Infer<boolean>

//使用inter 修改
type Infer2<T> = T extends Array<infer U> ? U : T
type demo3 = Infer2<(string | Symbol)[]>

type numberPromise = Promise<number>;
type n = numberPromise extends Promise<infer P> ? P : never; // number


type getIntersection<T> = T extends (a: infer P,b: infer P) => void ? P : never;
type Intersection = getIntersection<(a: string, b: number)=> void> // string & number
