namespace namespaceD  {
  export namespace B {
      export const C = 1
  }
}
import X = namespaceD.B.C
console.log(X);