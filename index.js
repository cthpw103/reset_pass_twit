var Nightmare = require('nightmare'),
  nightmare = Nightmare({show:true});
console.log('tURN OFF PLAYSTATION');
console.log('TURN OFF PLAYSTATION');
step1("Bren00x");
function step1(user){
  var loggedIn;
  //please do not judge me thansk
  console.log('kid very smart');
  nightmare.goto('https://twitter.com/account/begin_password_reset')
    .wait(2000)
    .insert('.Form-textbox', user)
    .click('form[action*="https://twitter.com/account/begin_password_reset"] [value=Search]')
    .wait(2000)
    .title()
    .end()
    yield nightmare.then(function(result){
      loggedIn = (result === 'done');
    })
    return loggedIn
}
