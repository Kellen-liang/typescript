

function promise():Promise<number> {
  return new Promise<number>((resolve,rejects) =>{
    resolve(1)
  })
}

promise().then((res)=>{
  console.log(res);
})