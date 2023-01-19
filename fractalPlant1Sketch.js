let plant;
let spanTag;


function setup() {
  //noCanvas();
  createCanvas(window.innerWidth,window.innerHeight/1.5);
  background(51);
  plant = new FractalPlant1();
  spanTag = createSpan(`نسل ${plant.n} : `);
  spanTag.class("generation-label");
  createSpan(plant.axiom);
  plant.turtle();
  var generateBtn = createButton('تولید');
  generateBtn.id("generateBtn");
  generateBtn.mousePressed(function () {
    let s = plant.generate();
    spanTag = createSpan(`نسل ${plant.n} : `);
    spanTag.class("generation-label");
    createSpan(s);
    createP();
    plant.turtle();
  }); 
}
