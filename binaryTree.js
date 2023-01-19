function BinaryTree(){
	/* 
		variables : F , G
		terminals : [ , ] , + , -
		axiom(start) : F
		rules :
			G ----> GG
            F ----> G+[f-]F			
	*/
  
	this.axiom = "F";
	this.sentence = this.axiom;
	this.rules = [
		{
			predecessor :"G",
			successor : "GG"
		},
		{
			predecessor :"F",
			successor : "G[+F]-F"

		}
	];
    this.angle = radians(45.0);
	this.n = 1;
    this.len = window.innerHeight / 2;
	this.generate = function (){
      
      this.len /= 2;
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
      background(51);
      resetMatrix();
      translate(width/2, height);
      stroke(255,180);
      strokeWeight(2);
      for (let i = 0 ; i < this.sentence.length ; i ++) {
        let current = this.sentence.charAt(i);
        switch(current){
          case "G":{
            
            line(0 , 0 , 0 , -this.len);
            translate(0,-this.len);
            break;
          }
          case "F":{
            
            line(0 , 0 , 0 , -this.len);
            translate(0,-this.len);
            break;
          }
          case "+":{
            
            rotate(this.angle);
            break;
          }
          case "-" :{
            
            rotate(-this.angle);
            break;
          }
          case "[":{
            
            push();
            break;
          }
          case "]":{
            
            pop();
            break;
          }
        }
        
      }
      
      
    }
}