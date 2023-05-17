/* 
  回三个参数
    对于于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    参数成员的名字。
    参数在函数参数列表中的索引。
*/

const params:ParameterDecorator = (...args) => {
  console.log(args)
}

class Params {
  constructor(){}
  setParam (@params name: string = '11') {}
}

const param = new Params()