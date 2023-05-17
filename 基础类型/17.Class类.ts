// 1.类的定义
class Person1 {
  name: string
  age: number
  gander: string
  constructor(name: string, age: number) {
    this.name = name,
      this.age = age
  }
  fun() {
    console.log(this.name, this.age);
  }
}


// 2.类的修饰符
// 总共有三个 
// public: 公共属性
// private: 私有属性
// protected: 受保护的属性：变量私有的只能在内部和继承的子类中访问 不能在外部访问
class Person {
  public name:string
  private age:number 
  protected some:any
  constructor (name:string,ages:number,some:any) {
     this.name = name
     this.age = ages
     this.some = some
  }
  run () {

  }
}
class Man extends Person{
  constructor () {
      super("张三",18,1)
      console.log(this.some)
  }
  create () {
     console.log(this.some)
  }
}
let kellen = new Person('kellen',18,1)
let man = new Man()

// 3.静态属性和方法
/* 
  我们用static 定义的属性 不可以通过this 去访问 只能通过类名去调用
  static 静态函数 同样也是不能通过this 去调用 也是通过类名去调用
  如果两个函数都是static 静态的是可以通过this互相调用
*/
class Phone { 
  name: string
  static price: number
  constructor(name: string, price: number){
    this.name = name
  }
  static showPrice = ():void => {
    console.log(this.price)
  }
  static callMethod = ():void => {
    this.showPrice()
  }
}

//  4.interface定义类
// 通过接口做一些限制,定义类
// ts interface 定义类 使用关键字 mplements   
// 后面跟interface的名字，多个接口名用逗号隔开，继承还是用extends

 
interface PersonClass {
  get(type: boolean): boolean
}

interface PersonClass2{
  set():void,
  asd:string
}

class A {
  name: string
  constructor() {
      this.name = "123"
  }
}

class Person3 extends A implements PersonClass,PersonClass2 {
  asd: string
  constructor() {
      super()
      this.asd = '123'
  }
  get(type:boolean) {
      return type
  }
  set () {

  }
}