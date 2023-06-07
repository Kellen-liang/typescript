// 抽象类不能被实例化
// 抽象类内的抽象方法能具体实现，需要通过派生类继承后具体实现
// 抽象类内的普通方法可以直接调用

// abstract 所定义的抽离类
// abstract 所定义的方法 都只能描述不能进行一个实现
// 抽象类无法被实例化

// 定义抽象类/基类
abstract class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
  //普通方法（具体实现）
  setName(name: string) {
    this.name = name
  }
  //抽象方法（只能描述）
  abstract getName(): string  
}

//派生类实现抽象类（需要实现抽象类的抽象方法）
class B extends A {
  constructor(name: string){
    super(name)
  }
  getName(): string  {
    return this.name
  }
}

let kellen = new B('kellen')
kellen.setName('Coco')
console.log(kellen.name)
