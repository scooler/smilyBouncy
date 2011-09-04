sB.smiley = (function(window, undefined){
  var doc = window.document,
    board = doc.getElementById("board");
  return function(id){
    canvas = function(){
      var canvas = doc.createElement("canvas");
      canvas.width = 150;
      canvas.height = 150;
      canvas.id = "canvas_"+id
      board.appendChild(canvas); 
      return function(){
        return canvas;
      }
    }();
    context = function(){
      var context
      if (canvas().getContext){  
       context = canvas().getContext("2d");  
      } else {  
        alert("No canvas support make canvas app a dull app :P");
      }  
      return function(){
        return context;
      }
    }();

    var draw = function(){
      var ctx = context();
      ctx.beginPath();  
      var radgrad2 = ctx.createRadialGradient(75, 75, 40, 75, 75, 50);  
      radgrad2.addColorStop(0, '#FFFF00');  
      radgrad2.addColorStop(0.4, '#EEEE00');  
      radgrad2.addColorStop(0.8, '#BBBB00');  
      radgrad2.addColorStop(1, '#999900');  
      ctx.fillStyle = radgrad2;
      ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle  
      ctx.fill();
      ctx.closePath();
      
      ctx.fillStyle = "black"; 
      ctx.beginPath();  
      ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle  
      ctx.moveTo(110,75);  
      ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)  
      ctx.moveTo(65,65);  
      ctx.stroke(); 
      ctx.closePath();

      ctx.save();
      ctx.scale(0.3, 1);
      ctx.beginPath();
      ctx.arc(200, 65, 15, 0, Math.PI*2, false);  //left eye
      ctx.arc(300, 65, 15, 0, Math.PI*2, false);  //right eye
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }

    return {
      draw: draw  
    }
  }
}(window));