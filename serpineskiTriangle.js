function SerpineskiTriangle(){
	/* 
		variables : G , F
		terminals : + , -
		axiom(start) : F-G-G
		rules :
			F ----> F-G+F+G-F
            G ----> GG		
	*/
  
	this.axiom = "F-G-G";
	this.sentence = this.axiom;
	this.rules = [
		{
			predecessor :"F",
			successor : "F-G+F+G-F"
		},
		{
			predecessor :"G",
			successor : "GG"

		}
	];
    this.angle = radians(120.0);
	this.n = 1;
    this.len = window.innerHeight/2;
	this.generate = function (){
      
     
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
      this.len /=2;
      this.n += 1;
      this.sentence = nextSentence;
      return this.sentence;
	}
    
    this.turtle=function(){
      background(51);
      resetMatrix();
      translate(100, height - 100);
      stroke(255 , 150);
      strokeWeight(1);
      for (let i = 0 ; i < this.sentence.length ; i ++) {
        let current = this.sentence.charAt(i);
        switch(current){
          case "F":{
            
            line(0 , 0 , 0 , -this.len);
            translate(0,-this.len);
            break;
          }
          
          case "G":{
            line(0 , 0 , 0 , -this.len);
            translate(0,-this.len);
            break;
          }
          case "+":{
            
            rotate(-this.angle);
            break;
          }
          case "-" :{
            
            rotate(+this.angle);
            break;
          }
          
        }
        
      }
      
      
    }
}