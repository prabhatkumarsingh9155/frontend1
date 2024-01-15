const fs= require ('fs')

const stream =fs.createReadStream('./big.txt')


// data => handles the response from the file

stream.on('data',(res)=>{


    
})