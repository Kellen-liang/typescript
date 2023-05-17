// ① 元组就是数组的变种
// 元组（Tuple）是固定数量的不同类型的元素的组合。
// 元组与集合的不同之处在于，元组中的【元素类型可以是不同的，而且数量固定】。
// 元组的好处在于可以把多个元素作为一个单元传递。如果一个方法需要返回多个值，
// 可以把这多个值作为元组返回，而不需要创建额外的类来表示。

let arr:[number,string] = [1,'string']
// 出错
// let arr2:[number,string] = ['string',1]

// 当赋值或访问一个已知索引的元素时，会得到正确的类型：
// 数字是没有length的
// arr[0].length //error
arr[1].length //success
 
//② 越界元素
//对于越界的元素他的类型被限制为 联合类型（就是你在元组中定义的类型）
// arr.push(true)//error
arr.push('str')
arr.push(1)

//③ 使用场景定义execl返回的数据
let excel: [string, string, number, string][] = [
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
]