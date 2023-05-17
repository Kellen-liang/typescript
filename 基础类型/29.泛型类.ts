//声明方法跟函数类似名称后面定义<类型>
//使用的时候确定类型new Sub<number>()
class Sub<T> {
  arr:T[] = []
  add(a:T):T[] {
    return [a]
  }
}

const s = new Sub<number>()
s.arr = [1,2,3,4]
console.log(s.add(12))

const str = new Sub<string>()
str.arr = ['1','2','3','4']
console.log(str.add('12'))