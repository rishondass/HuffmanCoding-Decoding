

var list = [];
var circles = [];

var elem = document.querySelector(".graph2");
var canvas = document.querySelector(".graph").getBoundingClientRect();
var two = new Two().appendTo(elem);
var graphCircles = two.makeGroup();


function drawGraph2(data){
    console.clear();
    
    if(data != null){
        list = [];
        clearGraph();
        readData(data,data);
        //parseData(data);
        
        //print(data);
        print(circles.length);
        print(list);
        //print(list[(list.length-1)/2]);
        //print(list.reverse());
    }else{
        clearGraph();
        print(circles.length);
    }
}
let parseData = (rootNode) => {
	// make a queue array
	let queue = [];
	// populate it with the node that will be the root of your search
	queue.push(rootNode);

	// search the queue until it is empty
	while (queue.length > 0) {
	// assign the top of the queue to variable currentNode
		let currentNode = queue[0];
        list.push(currentNode);

		// if currentNode is the node we're searching for, break & alert
		

		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(currentNode.left);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(currentNode.right);
		}
		// remove the currentNode from the queue.
		queue.shift();	
    }
}

function readData(root,parent){

    
    if(root.left == null && root.right == null){
        list.push(root);
        //make leaf circle here by checking if c is in the left or right node.
        makeCircle(root,parent,'leaf');
        print('return c: ' + root.c + " p: " + parent.data + ' ' + parent.c);
        return;
    }
    if(root.left != null){
        list.push(root);
        //make left circle here
        makeCircle(root,parent,'leaf');
        print('left c: '+ root.c + " p: " + parent.data + ' ' + parent.c);
        readData(root.left,root);
    }
    if(root.right != null){
        //make right circle: nvm
        // print('right c: '+ root.c+ " p: " + parent.data + ' ' + parent.c);
        readData(root.right,root);
    }

}

function clearGraph(){
    
    two.clear();
    two.release;
    print(two.scene);
    circles = [];
    two.update();
    two.render();
}




function makeCircle(root,parent,side){
    if(root===parent){

        var group = two.makeGroup();

        var circle = two.makeCircle(canvas.width/2,30,10);
        circle.fill = '#FF8000';
        circle.stroke = 'orangered';
        circle.linewidth = 5;

        var text = two.text(root.data+"\n"+root.c,)


        circles.push(circle);
        print('root circle');
    }
    else if(side === 'leaf'){
        
        if(root.c == parent.left.c && root.data == parent.left.data){
            var circle = two.makeCircle(canvas.width/2,30,10);
            circle.fill = '#FF8000';
            circle.stroke = 'orangered';
            circle.linewidth = 5;

            c


            circles.push(circle);
            print('left leaf circle');
            print(circles.reverse()[0] );
        }else{
            var circle = two.makeCircle(canvas.width/2,30,10);
        circle.fill = '#FF8000';
        circle.stroke = 'orangered';
        circle.linewidth = 5;
        circles.push(circle);
            print('right leaf circle');
        }

    }
    
    two.update();
}