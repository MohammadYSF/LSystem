let cantoor;
let spanTag;

function setup() {
  //noCanvas();
  createCanvas(window.innerWidth,window.innerHeight/1.5);
  background(51);
  cantoor = new Cantoor();
  spanTag = createSpan(`نسل ${cantoor.n} : `);
  spanTag.class("generation-label");
  createSpan(cantoor.axiom);
  cantoor.turtle();
  var generateBtn = createButton('تولید');
  generateBtn.id("generateBtn");
  generateBtn.mousePressed(function () {
    let s = cantoor.generate();
    spanTag = createSpan(`نسل ${cantoor.n} : `);
    spanTag.class("generation-label");
    createSpan(s);
    createP();
    cantoor.turtle();
  }); 
}
