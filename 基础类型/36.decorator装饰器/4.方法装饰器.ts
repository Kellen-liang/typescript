/* 
  返回三个参数
    对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    成员的名字。
    成员的属性描述符。
*/
const met:MethodDecorator =  (...args) => {
  console.log(args)
}

class Methods {
  constructor() {}
  @met
  getName():string {
    return 'kellen'
  }
}

const method = new Methods()