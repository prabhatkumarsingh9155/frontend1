// dgram 
// socket communication 
// udp =>(user detagram protocal)


const dgram =require('dgram')
const socket =dgram.createSocket('udp4')

let msg =Buffer.from('welcome to mern')



socket.send(msg,3000,"localhost")
console .log('msg send succesfully')