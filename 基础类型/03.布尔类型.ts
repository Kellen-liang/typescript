// 注意，使用构造函数 Boolean 创造的对象不是布尔值：
// 这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象 
// let createdBoolean: boolean = new Boolean(1)
let createdBoolean: Boolean = new Boolean(1)  //true
let booleand: boolean = true //可以直接使用布尔值
let booleand2: boolean = Boolean(1) //也可以通过函数返回布尔值