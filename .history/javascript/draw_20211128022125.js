function drawGraph(data){
    var elem = document.querySelector(".graph");
    var two = new Two().appendTo(elem);
    var mouseX = -1;
    var mouseY = -1;
    document.onmousemove = function(event){
        print(event.pageX+", "+event.pageY);
        mouseX = event.pageX;
        
    }
    var circle = two.makeCircle(mouseX,mouseY,10);

    circle.fill = '#FF8000';
    // And accepts all valid CSS color:
    circle.stroke = 'orangered';
    circle.linewidth = 5;
    two.update();
    
}
