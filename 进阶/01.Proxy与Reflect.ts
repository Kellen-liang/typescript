type Person = {
  name: string,
  age: number,
  text: string
}

const proxy = (object: any, key: any) => {
  return new Proxy(object, {
      get(target, prop, receiver) {
          console.log(`get key======>${key}`);
          return Reflect.get(target, prop, receiver)
      },

      set(target, prop, value, receiver) {
          console.log(`set key======>${key}`);

          return Reflect.set(target, prop, value, receiver)
      }
  })
}

const logAccess = <T>(object: T, key: keyof T): T => {
  return proxy(object, key)
}

let man: Person = logAccess({
  name: 'kellen',
  age: 18,
  text: '描述'
},'age')

console.log(man)