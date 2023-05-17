//开启选项： "experimentalDecorators": true,
//装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。

//② 定义一个类装饰器函数 他会把DA的[构造函数]传入你的watcher函数当做[第一个参数]
const watcher:ClassDecorator = (target: Function) =>{
  target.prototype.getName = <T>(name: T): T => {
    return name
  }
}

//① 首先定义一个类
//③ 使用的时候 直接通过@函数名使用
@watcher
class DA {
  constructor() {

  }
}
const da = new DA()
console.log((da as any).getName('kellen'));
