//我们期望在一个泛型的变量上面，获取其length参数，但是，有的数据类型是没有length属性的
// 传入的值必须带有length属性
interface Len {
  length: number
}
function getLength<T extends Len>(arr: T): number {
  return arr.length
}

console.log(getLength('123asd'));
// getLength(1) error
