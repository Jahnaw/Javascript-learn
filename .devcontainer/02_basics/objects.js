// object literals

const jsUser = {
    name: "Jahnawi",
    age: 19,
    location: "Uttar Pradesh",
    email: "jahnawi123@gmail.com",
    isLoggedIn: false
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);


jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());

console.log(jsUser.greeting2());