let img;

let xoff = 0.0;
xoff = xoff + 0.01;

function setup() {
  noCanvas()
  let x = 10
  img = selectAll('.imgToSize')
  
}
function draw() {
    time1 = ((millis() /30 ) % 4000).toFixed(0)
    imgSizer()
    if(time1 % 400 ===0){
        img.shift()
        time1 = 0
    }
   // console.log(time1);
}

function imgSizer() {
  img.forEach(im => im.size(time1, time1))

  
}