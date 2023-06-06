/* 
  重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
  如果参数类型不同，则参数类型应设置为 any。
  参数数量不同你可以将不同的参数设置为可选。
*/
//重载函数:该函数遵循的两套规则
function fn(params: number): void
function fn(params: string, params2: number): void
//执行函数:该函数实际执行的逻辑
function fn(params: any, params2?: any): void {

  console.log(params)

  console.log(params2)

}

fn(123)

fn('123', 456)

let arr11:number[] = [1,2,3,4]
function findNum(id: number): number[] //如果传入了id就是单个查询
function findNum(): number[] //如果没有传入东西就是查询全部
//执行/实现函数
function findNum(ids?:number | number[]):number[] {
  if(typeof ids == 'number'){
    return arr11.filter(v=>v == ids)
  }
  else if(Array.isArray(ids)){arr11.push(...ids) // 再加一个逻辑：如果传入的是一个数组，就添加传入数组的新元素
    return arr11
  } 
  else {
    return arr11
  }
}
