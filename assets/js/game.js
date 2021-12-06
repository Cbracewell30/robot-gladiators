var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 10;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

var promptfight =  window.prompt ( "Would you like to FIGHT Or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

if (promptfight === "fight" || promptfight === "FIGHT" ) {
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // checking enemy health
        if (enemyHealth <= 0) {
            window.alert (enemyName + " has died!");
            }
            else {
                window.alert( enemyName + " still has " + enemyHealth + " health left.");
            }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth-enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attcked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player health
  if (playerHealth <= 0) {
    window.alert (playerName + " has died!");
    }
    else{
        window.alert( playerName + " still has " + playerHealth + " health left.");
    }
// if player choses to skip 
} else if (promptfight === "skip" || promptfight === "SKIP" ) {
    // Confirm player wants to skip
var confirmskip= window.confirm (" Are you sure you want to quit?");

// if yes, leave fight
if (confirmskip){
    window.alert (playerName + " has decided to skip this fight. Goodbye!");
  // subtract players money
    playerMoney = playerMoney - 2 ;
    // Log a players money loss.
    console.log ( playerName + " has decided to skip this battle, " + playerName + " now has " + playerMoney+ " remaining. "

    )
}
    else {
        fight()
    }

} else {
    window.alert ( "You need to choose a valid option. Try again!");
}
};

fight();