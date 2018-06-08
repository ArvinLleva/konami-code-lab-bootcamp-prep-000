const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  
  var index = 0;
  
  var body = document.querySelector('body');
  
  body.addEventListener('keydown', function onKeyDownHandler(e){
    
  //this checks if the   
  var key = e.key;
  
  if(key === codes[index]){
  index++;
  
  if(index === codes.length){
    alert("Here's 30 Lives!");
    index = 0;
    
  }
  
  }else{
    index = 0;
  }
  })
  
}
