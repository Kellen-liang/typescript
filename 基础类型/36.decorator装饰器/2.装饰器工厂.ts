//其实也就是一个高阶函数 【外层的函数接受值】 【里层的函数最终接受类的构造函数】

const watcher2 = (name: string):ClassDecorator =>{
  return (target: Function) => {
    target.prototype.getParams = <T>(params: T): T=> {
      return params
    }
    target.prototype.getName = ():string => {
      return name
    }
  }
}

//传入参数
@watcher2('kellen')
class DA2 {
  constructor() {

  }
}
const da2 = new DA2()
console.log((da2 as any).getName()); //获取到@watcher2('kellen')传入的参数
console.log((da2 as any).getParams('Coco'));

//多个函数同时使用同一个修饰器
@watcher2('你好')
class Demo {
  // constructor(){}
}
const demotest = new Demo()
console.log((demotest as any).getName()); 