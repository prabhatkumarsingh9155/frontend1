const http =require('http')
const port =5100

const server =http.createServer(function(req,res){


switch(req.url){

case "/":
    req.end(`<div>
    <nav>
    <a href= "/">home</a>
    <a href= "/about">about</a>
    <a href= "/contact">contact</a>
    <a href= "/login">login</a>
    
   
    </nav>
    <h1> home page</h1>
    
    
    
    
    </div>`)
    break;
    case "/about":
        res.end(`<div>
        
        
        <nav>
        <a href= "/">home</a>
        <a href= "/about">about</a>
        <a href= "/contact">contact</a>
        <a href= "/login">login</a>
        
       
        </nav>
        <h1> about page</h1>
        </div>`)

        break;
        case "/contact":
            res.end(`
            <div>
        
        
        <nav>
        <a href= "/">home</a>
        <a href= "/about">about</a>
        <a href= "/contact">contact</a>
        <a href= "/login">login</a>
        
        
        </nav>
        <h1> contact page</h1>
        </div>
            
            `)
            break;
            default:
                res.end(`<div>
        
        
                <nav>
                <a href= "/">home</a>
                <a href= "/about">about</a>
                <a href= "/contact">contact</a>
                <a href= "/login">login</a>
                
                
                </nav>
                
                <h1>  page not found</h1>
                </div>`)

}







})

server.listen(port,function(){
console.log(`server is running @ http://Localhost:${port}`)


})