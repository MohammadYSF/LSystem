let binaryTree;
let spanTag;


function setup() {
  //noCanvas();
  createCanvas(window.innerWidth,window.innerHeight/1.5);
  background(51);
  binaryTree = new BinaryTree();
  spanTag = createSpan(`نسل ${binaryTree.n} : `);
  spanTag.class("generation-label");
  createSpan(binaryTree.axiom);
  binaryTree.turtle();
  var generateBtn = createButton('تولید');
  generateBtn.id("generateBtn");
  generateBtn.mousePressed(function () {
    let s = binaryTree.generate();
    spanTag = createSpan(`نسل ${binaryTree.n} : `);
    spanTag.class("generation-label");
    createSpan(s);
    createP();
    binaryTree.turtle();
  }); 
}
