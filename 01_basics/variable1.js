const accountId = "RajaRam"
let accountEmail = "RajaRam123@gmail.com"
var accountPassword = "RAmRaj123"
accountCity = "Darbhanga"
let accountState;


// accountId = SiyaRam // /* Not allowed  */

accountEmail = "SiyaRam321@gamil.com"
accountPassword = "SiyaRam321" 
accountCity = "NarayanpurBazar"

console.log(accountId);
/*  prefer not to use var 
because of issue in block scope & functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
