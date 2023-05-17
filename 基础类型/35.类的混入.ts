// ① 首先声明两个mixins类(混入类) （严格模式要关闭不然编译不过）
class ClassAa {
  public isA!: boolean;
  public funcA() {}
}
class ClassBb {
  public isB!: boolean;
  public funcB() {}
}


// ② 下面创建一个类，结合了这两个mixins(实现类)
//首先应该注意到的是，没使用extends而是使用implements。 把[类当成了接口来实现]
//我们可以这么做来达到目的，为将要mixin进来的属性方法创建出【占位属性】。 
//这告诉编译器这些成员在运行时是可用的。 这样就能使用mixin带来的便利，虽说需要提前定义一些占位属性

class ClassAB implements ClassAa, ClassBb {
  public isA: boolean = false;
  public isB: boolean = false;
  constructor() {}
  public funcA!: () => void;
  public funcB!: () => void;  //编译后这些属性和方法会挂载到原型上
}

//③ 最后，创建这个帮助函数，帮我们做混入操作。 它会遍历mixins上的所有属性，并复制到目标上去，把之前的占位属性替换成真正的实现代码
//Object.getOwnPropertyNames()可以获取对象自身的属性，除去他继承来的属性，
//对它所有的属性遍历，它是一个数组，遍历一下它所有的属性名

//参数：实现对象(目标对象);混入对象数组(混入类)
function mixins(base: any, from: any[]) {
  from.forEach(fromItem => {
    Object.getOwnPropertyNames(fromItem.prototype).forEach(key => {
      console.log(key);
      base.prototype[key] = fromItem.prototype[key];
    });
  });
}

mixins(ClassAB, [ClassAa, ClassBb]);
const ab = new ClassAB();
console.log(ab); // ClassAB {isA: false, isB: false}
