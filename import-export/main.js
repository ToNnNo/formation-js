import { foo, array, bar, baz as Data, month } from "./Utils.js";
import * as other from "./Other.js";
import { User } from "./User.js";
import Company from "./Company.js";

console.log( foo(), array, bar(), Data(), month );

console.log( other.barbar(), other.foofoo() );

let user = new User('John');

console.log(user.name);

let company = new Company("Dawan");

console.log(company.name);
