const fs =require('fs')

for (let i= 0; i<500; i++){
fs.writeFileSync('big.text',`Hello world= ${i} \n`,{flag:'a'})



}
console.log('file write completed')