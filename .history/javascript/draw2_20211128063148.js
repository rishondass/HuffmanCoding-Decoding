function drawGraph2(data){
    list = readData(data,[]);

    
}

function readData(root,list){
    readData(root.left,list.push(root));
    readData(root.right,list.push())

}



function makeCircle(){

}