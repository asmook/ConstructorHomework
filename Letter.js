function Letter(letter){
	this.letter = letter;
	this.guessed = false;
	this.guess = function(userGuess){
		if (this.letter === userGuess){
			this.guessed = true;
		}
	}
	this.getSolution = function(){
		return this.letter;
	}
}
// inside letter function, one more method, called toString. inside of that check to see if guessed is true
// return this.letter, else return _

module.exports = Letter