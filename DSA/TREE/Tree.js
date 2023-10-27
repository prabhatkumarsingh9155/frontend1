// key=this is key of the node
// value=the value
// parent =the parent node(null-> only when their is no leaf nodes)

class Node{

    constructor(key,value=key,parent=null){
        this.key=key;
        this.value=value;
        this.parent=parent;
        this.children=[];

    }
    // isLeaf =>check and return the leaf node
    get isLeaf(){
return this.children.length===0;


    }
    // hasChildren =>check and return the child nodes if exists

    get hasChildren(){


        return ! this.isLeaf;
    }


}

class Tree{

constructor(key,value=key){
this.root=new Node(key,value);



}
 // generator function
 // traverse the tree by recursively traversing each node

*preOrderTraversal(node=this.root){

    yield node;
    if(node.children.length){
for(let child of node.children){


    yield* this.preOrderTraversal(child);
}


    }                                                                                                                                                                    )
}


//
*posOrderTraversal(node= this.root){
if(node.children.length){
for(let child of node.children){

    yield this.posOrderTraversal(child)
}

}
yield node

}
 // 
 insert(parentNodeKey,key ,value=key){
for (let node of this.preOrderTraversal() ){
if(node.key===parentNodeKey){
node.children.push(new Node(key,value,node));
return true


}


}
return false

 }
  

 remove(key){                  



    for(let node of this.preOrderTraversal()){
const filtered=node.children.filter(item=>item.key !==key);

if(filtered.length!==node.children.length){
node.children=filtered;
return true

} 


    }
    return false
 }
// find 

}