
let computerGenerated = Math.round(Math.random()*10) // Computer generates a number between 1-10 via this.
let userAttempts = 0  // Calculate user tried attempts.

function onSubmit(){
    let userInput = document.getElementById('userInput').value
    userInput = Number(userInput)
    userAttempts += 1

    if(userInput>10 || userInput < 1 || isNaN(userInput)){  // Checks if user input is valid.
        window.alert('Invalid input!')
    }
    else if(userInput>computerGenerated){
        document.getElementById('result').textContent = 'Too high.' // You guess wrong it executes.
    }
    else if(userInput === computerGenerated){
        document.getElementById('result').textContent = `You have won in ${userAttempts} attempts. Reload to play again.` // You win you get this code executed.
    }
    else{
        document.getElementById('result').textContent = 'Too low.' // You guess wrong it executes.
    }
}