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
    context.lineTo(10, 10);
  };

  sB.getCanvas = getCanvas;
  sB.getContext = getContext;
  sB.init = init;
})(this)