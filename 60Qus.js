// 79. Make a nested object and access a nested property.

// Input: const user = { name: "Alice", address: { city: "NY" } };
// Output:"NY"

let user = { name: "Alice", address: { city: "NY" } }

let {name ,address: {city:userCity}}= user

console.log(userCity)

