/* 
  返回两个参数
    对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    属性的名字。
*/
const pro:PropertyDecorator = (...args) => {
  console.log(args);
}

class proDecorator {
  @pro
  name: string
  constructor() {}
}

const property = new proDecorator()