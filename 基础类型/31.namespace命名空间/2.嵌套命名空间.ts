namespace namespaceC {
  export namespace b {
      export class Vue {
          parameters: string
          constructor(parameters: string) {
              this.parameters = parameters
          }
      }
  }
}

let v = namespaceC.b.Vue

new v('1')