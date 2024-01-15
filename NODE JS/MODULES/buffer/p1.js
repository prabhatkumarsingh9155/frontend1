// buffer module
// memory allocation

const buf =Buffer.alloc(4)
console.log('safe memory=',buf) // not have any garbage value

const buf1 =Buffer.allocUnsafe(3);
console .log('unsafe memory=',buf1)// can have garbage vaalue

const buf2 =Buffer.from("hello")
console.log('from=',buf2)
console.log('string=',buf2.toString())


// concat two buffer value

let a1 =Buffer.from('welcome to')
let a2 =Buffer.from('node js server script')

let res=[a1,a2]

let out=Buffer.concat(res)

console .log('output=',out)
console.log('string=',out.toString())