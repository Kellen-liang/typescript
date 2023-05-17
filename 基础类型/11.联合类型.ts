//定义变量
let myPhone: number | string  = '010-820'

//函数使用联合类型
//传入的值可以是0，1，true，false；返回true或false
const fnResalt = (something: number | boolean):boolean => {
  return !!something
}

console.log(fnResalt(0))  //false
console.log(fnResalt(1))  //true
console.log(fnResalt(true)) //true
console.log(fnResalt(false))  //false

/* 
  !0 = true
  !1 = false
  !!0 = false
  !!1 = true
  !!true = true
  !!false = false
*/