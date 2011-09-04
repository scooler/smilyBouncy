(function(window, undefined){
  getCanvas = function(){
    var canvas = window.document.getElementById("canvas");
    return function(){
      return canvas;
    }
  }();
  getContext = function(){
    var context
    if (getCanvas().getContext){  
     context = getCanvas().getContext("2d");  
    } else {  
      alert("No canvas support make canvas app a dull app :P");
    }  
    return function(){
      return context;
    }
  }();

  init = function(){
    var context = getContext();
    ctx.beginPath();  
    ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle  
    ctx.moveTo(110,75);  
    ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)  
    ctx.moveTo(65,65);  
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye  
    ctx.moveTo(95,65);  
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye  
    ctx.stroke(); 
  };

  sB.getCanvas = getCanvas;
  sB.getContext = getContext;
  sB.init = init;
})(this)