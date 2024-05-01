const accountId = 14453;
let accountEmail = "dfsdf@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;
// accountId = "234"; not allowed

accountEmail = "fsdf@.com";
accountPassword = "49203";
accountCity = "Dehradun";

/*Prefer not to use var 
because of issue in block and function scope*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);
