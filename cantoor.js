function Cantoor(){
	/* 
		variables : A , B
		terminals : none
		axiom(start) : A
		rules :
			A ----> ABA
			B ----> BBB

	*/
  
	this.axiom = "A";
	this.sentence = this.axiom;
	this.rules = [
		{
			predecessor :"A",
			successor : "ABA"
		},
		{
			predecessor :"B",
			successor : "BBB"

		}
	];
	this.n = 1;
    this.len = window.innerWidth - 100;
    this.h = 30;
	this.generate = function (){
        this.len /= 3;
		let nextSentence = "";
		for (let i = 0; i < this.sentence.length;i++){
			let currentChar = this.sentence.charAt(i);
			// the reason why we declare 'found variable' is that it is possible that               there
			// is no none-identity rule for this character
			let found = false;
			for (let j = 0 ; j < this.rules.length ; j ++ ){
				if (currentChar == this.rules[j].predecessor){
					found = true;
					nextSentence += this.rules[j].successor;
					break;
				}
			}
			// so if found is false , that means there is no none-identitu rule for                 this
			//character
			if (!found){
				// we kepp the currentChar and go on
				nextSentence += currentChar;
			}
			
            
		}
      this.n += 1;
      this.sentence = nextSentence;
      return this.sentence;
	}
    
    this.turtle=function(){
      //background(51);
      resetMatrix();
      translate(50, 30 + this.h);
      stroke(255,200);
      strokeWeight(4);
      for (let i = 0 ; i < this.sentence.length ; i ++) {
        let current = this.sentence.charAt(i);
        if (current == "A"){
          line(0,0,this.len,0);
          translate(this.len , 0);
          
        }
        else if (current == "B"){
          translate(this.len , 0);
        }
      }
      this.h += 30;
      
    }
}