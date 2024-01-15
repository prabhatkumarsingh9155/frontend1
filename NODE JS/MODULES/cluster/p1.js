// cluster module

// node js single thread
// isMaster => if it is true =single thread
// isWorker => if it is true=multi thread


const cluster =require('cluster')
if(cluster.isMaster){
console.log('node js is running in single thread')



}else{


    console.log('no action')
}