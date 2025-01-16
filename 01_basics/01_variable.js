const accountId = 144553
let accountEmail = "ayushshaw220@gmail.com"
var accountPassword = "12345" /*prefer not to use var because of isssues in block scope and functional scope*/ 
accountCity = "jaipur"
let accountstate;

// accountId = 2

accountEmail = "ayushshaw123@gmail.com"
accountPassword = "2121212121"
accountCity = "bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])