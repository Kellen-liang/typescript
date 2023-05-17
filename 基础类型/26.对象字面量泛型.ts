let foo: { <T>(arg: T): T }
foo = function <T>(arg: T):T {
  return arg
}

console.log(foo('你好'))
