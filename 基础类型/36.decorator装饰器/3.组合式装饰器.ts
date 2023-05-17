//就是可以使用多个装饰器
const watcher3 = (name: string):ClassDecorator =>{
  return (target: Function) => {
    target.prototype.getParams = <T>(params: T): T=> {
      return params
    }
    target.prototype.getName = ():string => {
      return name
    }
  }
}

const watcher4:ClassDecorator = (target: Function)=> {
  target.prototype.getOption = <T>(option: T): T => {
    return option
  }
}

//传入参数
@watcher4
@watcher3('kellen')
class DA3 {
  constructor() {

  }
}
const da3 = new DA3()
console.log((da3 as any).getOption('option'))
console.log((da3 as any).getParams('params'))
console.log((da3 as any).getName('name'))