let serpineskiTriangle;
let spanTag;


function setup() {
  //noCanvas();
  createCanvas(window.innerWidth,window.innerHeight/1.5);
  background(51);
  serpineskiTriangle = new SerpineskiTriangle();
  spanTag = createSpan(`نسل ${serpineskiTriangle.n} : `);
  spanTag.class("generation-label");
  createSpan(serpineskiTriangle.axiom);
  serpineskiTriangle.turtle();
  var generateBtn = createButton('تولید');
  generateBtn.id("generateBtn");
  generateBtn.mousePressed(function () {
    let s = serpineskiTriangle.generate();
    spanTag = createSpan(`نسل ${serpineskiTriangle.n} : `);
    spanTag.class("generation-label");
    createSpan(s);
    createP();
    serpineskiTriangle.turtle();
  }); 
}
