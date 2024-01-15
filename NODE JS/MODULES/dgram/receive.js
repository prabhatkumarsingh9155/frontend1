// dgram 
// socket communication 
// udp =>(user detagram protocal)


const dgram =require('dgram')
const socket =dgram.createSocket('udp4')
// node event 

socket.on('message',function(msg,err){

if(err)  console.log(err)
console.log('meassage=',msg.toString())

})
socket.bind(3000)