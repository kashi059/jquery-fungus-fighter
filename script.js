$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
function onReady() {



    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    $ ('.arcane-scepter').on('click', arcaneScepterAttack)
    $ ('.entangle').on('click', entangleAttack)
    $ ('.dragon-blade').on('click', dragonBladeAttack)
    $ ('.star-fire').on('click', starFireAttack)

    // 🧠 Remember
    // - Handle events that ->

}

let funkyFungusHP = 100;
let heroAp = 100;
let changedApValue = 0;
let changedHpValue = 0;
function arcaneScepterAttack(){

    changedApValue = -12;
         
    changedHpValue = -14;
    updateHealthAndAP();


}
function entangleAttack(){
    changedApValue = -23;
    changedHpValue = -9;
    updateHealthAndAP();

}
function dragonBladeAttack(){
    changedApValue = -38;
    changedHpValue = -47;
    updateHealthAndAP();

}
function starFireAttack(){
    changedApValue = -33;
    changedHpValue = -25;
    updateHealthAndAP();

}



function updateHealthAndAP() {
    $('.hp-text').text(funkyFungusHP + changedHpValue);
    $('.ap-text').text(heroAp + changedApValue);
    console.log('updateHealthAndAP is running');
}






    // - Updates state which is ->
    
    
    
    
    
    
    // - Rendered to the DOM









//     **Handle click events:** 

// When you click an attack button:

// -  update _state_ variable(s) to make the Freaky Fungus lose hit points (HP), and to reduce your attack points (AP). 
// - See [Attacks](#attacks) below, for the AP and HP values of each attack
// - State may be held in one our more variables of your choosing
// - HP and AP values may not be negative (set to zero, if they would otherwise be negative)


// **Render state changes to the DOM**

// - Update the text above the attack buttons (eg, "100 AP")
// - Update the text above the enemy fungus (eg, "100 HP")
// - If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the `walk` class with a `dead` class on the freaky-fungus element, to make them fall over and die.
// - If you run out of AP, the monster wins and humanity is doomed 😢 Replace the `walk` class with a `jump` class on the freaky-fungus element, to make them jump for the glory of the fungal race.
//   - You may no longer attack, if AP is `0`. Give all of the attack buttons a [`disabled`](https://www.w3schools.com/tags/att_button_disabled.asp) attribute, so they may no longer be used. 

