/* 
  nodejs 环境执行ts
  npm i @types/node --save-dev （node环境支持的依赖必装）
  npm i ts-node --g
*/

/* 
  一、Any类型
    1.没有强制限定哪种类型，随时切换类型都可以，我们可以对 any 进行任何操作，不需要检查类型
    2.声明变量的时候没有指定任意类型默认为any
    3.弊端如果使用any 就失去了TS类型检测的作用
 */
let anys:any = 123
anys = '123'
anys = true

/* 
  二、unknown类型
    1.TypeScript3.0中引入的 unknown 类型也被认为是 top type ，但它更安全。与 any 一样，所有类型都可以分配给unknown
    2.unknow类型比any更加严格当你要使用any 的时候可以尝试使用unknow
    3.unknow类型的对象不能直接调用它的属性和方法，any是可以的
*/
//unknown 可以定义任何类型的值
let value: unknown;
 
value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = null;             // OK
value = undefined;        // OK
value = Symbol("type");   // OK
 
//【这样写会报错unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型】
//unknown类型不能赋值给其他类型
// let names:unknown = '123'
// let names2:string = names
 
//这样就没问题 any类型是可以的
// let names:any = '123'
// let names2:string = names   
 
//unknown可赋值对象只有unknown 和 any
let bbb:unknown = '123'
let aaa:any= '456'
 
aaa = bbb