// ① 元组就是数组的变种
// 元组（Tuple）是【固定数量】的【不同类型的元素的组合】。
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

//④ 只读元素
const arr22: readonly [string, number] = ['str',1]
// arr22[0] = 'hah' //不能修改

//⑤ 其他
//const arr: readonly [x:number,y?:boolean] = [1] 是什么意思
// [x: number, y?: boolean] 定义的是一个元组类型，其中 x 和 y 都是元组中的成员变量。
// 具体来说，这里的 x 和 y 是元组的标识符，用来表示元组中每个成员变量的名称。而 number 和 boolean 则分别表示 x 和 y 的数据类型，它们使用了 TypeScript 中的类型注解语法。
// 在这个元组类型中，x 表示必选的第一个元素，它的值必须是数字类型。而 y 则是可选的第二个元素，它的值可以是布尔类型或者未定义（undefined）。
// 需要注意的是，这里的 ? 符号用来表示元组中第二个成员变量是可选的。如果没有使用 ? 符号，则表示该成员变量是必选的，
// 例如：[x: number, y: boolean]，这就要求在创建该元组时必须同时指定两个成员的值，并且它们的类型必须满足定义时所指定的类型。