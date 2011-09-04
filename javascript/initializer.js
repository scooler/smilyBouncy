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
    context.beginPath();  
    context.arc(75,75,50,0,Math.PI*2,true); // Outer circle  
    context.moveTo(110,75);  
    context.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)  
    context.moveTo(65,65);  
    context.arc(60,65,5,0,Math.PI*2,true);  // Left eye  
    context.moveTo(95,65);  
    context.arc(90,65,5,0,Math.PI*2,true);  // Right eye  
    context.stroke(); 
  };

  sB.getCanvas = getCanvas;
  sB.getContext = getContext;
  sB.init = init;
})(this)