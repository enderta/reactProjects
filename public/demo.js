let checkName=((name,arrayName)=>{
   return arrayName.includes(name)?`${name} is in the array`:`${name} is not in the array`
})

console.log(checkName('mohamed',['mohamed','ali','ahmed']));