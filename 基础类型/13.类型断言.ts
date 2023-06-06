//语法：值 as 类型: value as string
//　   <类型>值:  <string>value

////这样写是有警告时因为B的接口上面是没有定义run这个属性的
/* 
interface A {
  run: string
}
interface B {
  build: string
}
const assertFn = (type: A | B): string => {
  return type.run
}
*/

//可以使用类型断言来推断他传入的是A接口的值
interface A {
  run: string
}

interface B {
  build: string
}

const assertFn = (type: A | B): string => {
  return (type as A).run
}

//显示赋值断言 :  !:
//TypeScript 2.7引入了一个新的控制严格性的标记 --strictPropertyInitialization，确保每个实例的属性都会初始值
//显示赋值断言,为值设置为已初始化,
class Test {
  type!: boolean
}
class Test2 {
  type: boolean | undefined
}