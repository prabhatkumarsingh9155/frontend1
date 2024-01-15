const http= require('http')
const part=4540


// req =>acceptes incoming data from ui
// res => sending response to ui

const server =http.createServer(function(req,res){


console .log('url=',res.url)
if(res.url=== "page/home"){

return res.end(`<div>Home page</div>`)


}
else if(req.url=== "/page/about"){


    return res.end('<div>About page</div>')
}
else{


    
}

})


