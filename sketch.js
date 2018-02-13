var img;
function preload() {
  img = loadImage('./fa-logo.png');
}

var steps = 100;
var drones = [];

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height)
  image(img, 0, 0);
  loadPixels();
  // var d = pixelDensity();

  //     idx = 4 * ((y * d + j) * width * d + (x * d + i));

  for(var i=0; i< img.height; i++) {
    drones[i] = [];
    for(var j =0; j < img.width; j++) {
      var idx = 4 * (i * img.width + j); 
      drones[i][j] = {
        r: pixels[idx],
        g: pixels[idx+1],
        b: pixels[idx+2],
        a: pixels[idx+3],
        origY: i,
        origX: j,
        xOffset: Math.floor((Math.random()-.5) * steps),
        yOffset: Math.floor((Math.random()-.5) * steps)
      }
    }
  }  

  // for(var i=0; i < drones.length; i++) {
  //   for(var j=0; j < drones[i].length; j++) {
  //     var randX = Math.floor(Math.random() * drones[0].length);
  //     var randY = Math.floor(Math.random() * drones.length);
  //     var temp = drones[randY][randX];
  //     drones[randY][randX] = drones[i][j];
  //     drones[i][j] = temp;
  //   }
  // }

  for(var i=0; i< drones.length; i++) {
    for(var j =0; j < drones[i].length; j++) {
      // var randX = Math.floor(Math.random() * drones[0].length);
      // var randY = Math.floor(Math.random() * drones.length);
      var px = drones[i][j];
      var currX = px.origX + px.xOffset;
      var currY = px.origY + px.yOffset;
      var idx = 4 * (currY * width + currX); 
      pixels[idx] = px.r
      pixels[idx+1] = px.g
      pixels[idx+2] = px.b
      pixels[idx+3] = px.a
    }
  }  

  updatePixels();

}

function draw() {
  // put drawing code here
  if(steps != 0) {
    steps--;
  }
  for(var i=0; i< drones.length; i++) {
    for(var j =0; j < drones[i].length; j++) {
      // var randX = Math.floor(Math.random() * drones[0].length);
      // var randY = Math.floor(Math.random() * drones.length);
      var px = drones[i][j];
      px.xOffset = Math.floor((Math.random()-.5) * steps),
      px.yOffset = Math.floor((Math.random()-.5) * steps)
      var currX = px.origX + px.xOffset;
      var currY = px.origY + px.yOffset;
      var idx = 4 * (currY * width + currX); 
      pixels[idx] = px.r
      pixels[idx+1] = px.g
      pixels[idx+2] = px.b
      pixels[idx+3] = px.a
    }
  }  
  updatePixels();
}