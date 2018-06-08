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
    
  function onKeyDownHandler(e) {
  var key = e.key;

      // check if key is equal to current value of index in code array
      // then loop through the array if conditions match

    if (key === codes[index]) {
        // if yes, increment index by 1
        index++;

        // if still in the loop, check if index is equal to code array length
      if (index === codes.length - 1) {
          // reset the index counter
          index = 0;
          // if yes, you passed, congrats!
        alert("KONAMI CODE!");
      }

    // if key doesn't match current index in code array, then reset the index to zero
    } else {
      index = 0;
    }
  });
}
}
