// isWorker =>if it is true=multi thread
// fork()=> individual fork method create indiviual thread



const cluster=require('cluster')

if(cluster.isWorker){
console.log('worker is running')

}else{


    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()

}