function guessingGame() {
    const rand = Math.floor(Math.random() * 99);
    const tries = [];
    let won = false;
    return function(x){
        if(!won){
            if(x < rand){
                tries.push(x);
                return `${x} is too low!`
            }
            else if(x > rand){
                tries.push(x);
                return `${x} is too high!`
            }
            else{
                won = true;
                tries.push(x);
                return `You win! You found ${x} in ${tries.length} guesses.`
            }
        }
        return 'The game is over, you already won!'
    }
}

module.exports = { guessingGame };