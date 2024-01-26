// 1 .   Password Validator Program
function validatePassword() {
   var password = prompt("Enter your password:");

   var confirmedPassword = prompt("Confirm your password:");

   if (password === confirmedPassword) {
       console.log("Password Matched. Password validation Successful.");
   } else {
       console.log("Password didn't match. Password validation unsuccessful");
   }
}

validatePassword();


// 2. 
// Calculator Function
function calculator(num1, num2, operator) {
   let result;

   switch (operator) {
       case '+':
           result = num1 + num2;
           break;
       case '-':
           result = num1 - num2;
           break;
       case '*':
           result = num1 * num2;
           break;
       case '/':
           if (num2 !== 0) {
               result = num1 / num2;
           } else {
               console.log("Error: Division by zero");
               return; 
           }
           break;
       default:
           console.log("Invalid operator");
           return; 
   }

   console.log(`Result: ${result}`);
}

calculator(5, 3, '+');  // Result: 8
calculator(7, 2, '-');  // Result: 5
calculator(4, 6, '*');  // Result: 24
calculator(8, 2, '/');  // Result: 4
calculator(10, 0, '/'); // Error: Division by zero
calculator(5, 3, '%');  // Invalid operator


// 3. 
// Color Mixer Function
function mixColors(color1, color2) {
   let resultColor;

   switch (true) {
       case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
           resultColor = "purple";
           break;
       case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
           resultColor = "orange";
           break;
       case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
           resultColor = "green";
           break;
       default:
           console.log("Invalid color combination");
           return; 
   }

   console.log(`Resulting Color: ${resultColor}`);
}

mixColors("red", "blue");    
mixColors("red", "yellow");  
mixColors("blue", "yellow"); 
mixColors("green", "red");   



// 4.
let marks = [85, 92, 78, 95, 89];

let highestMarks = marks.reduce((max, current) => (current > max ? current : max), marks[0]);

console.log(`The highest marks scored by a student: ${highestMarks}`);



// 5. 
// Function to capitalize the first letter of a string
function capitalizeFirstName(name) {
   
   return name.charAt(0).toLowerCase() === name.charAt(0)
       ? name.charAt(0).toUpperCase() + name.slice(1)
       : name;
}

let userName = "john";
let modifiedName = capitalizeFirstName(userName);
console.log(`Original Name: ${userName}`);
console.log(`Modified Name: ${modifiedName}`);


// 6. 
// Function to count vowels in a string
function countVowels(name) {
   name = name.toLowerCase();

   let vowelCount = 0;

   for (let i = 0; i < name.length; i++) {
       if (['a', 'e', 'i', 'o', 'u'].includes(name.charAt(i))) {
           vowelCount++;
       }
   }

   return vowelCount;
}

let personName = "John Doe";
let numberOfVowels = countVowels(personName);
console.log(`Number of vowels in ${personName}: ${numberOfVowels}`);


// 7.
// Function to remove duplicate items from a shopping cart
function removeDuplicates(cart) {
   let uniqueItems = new Set();

   for (let item of cart) {
       uniqueItems.add(item);
   }

   let cartWithoutDuplicates = Array.from(uniqueItems);

   return cartWithoutDuplicates;
}


let shoppingCart = ["item1", "item2", "item1", "item3", "item2"];
let cartWithoutDuplicates = removeDuplicates(shoppingCart);

console.log("Original Cart:", shoppingCart);
console.log("Cart without Duplicates:", cartWithoutDuplicates);


// 8. 
// Function to print inverted right-angled triangle pattern
function printInvertedTriangle(i) {
   for (let row = i; row >= 1; row--) {
       let rowPattern = "";
       for (let space = i - row; space > 0; space--) {
           rowPattern += " ";
       }
       for (let asterisk = 1; asterisk <= row; asterisk++) {
           rowPattern += "*";
       }
       console.log(rowPattern);
   }
}

let i = 6;
printInvertedTriangle(i);



// 9.
// Function to check for divisibility by 3 but not by 2
function checkDivisibility(numbers) {
   for (let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 === 0) {
           continue;
       }

       if (numbers[i] % 3 === 0) {
           console.log(numbers[i]);
       }
   }
}

let numberArray = [1, 2, 3, 4, 5, 6, 9, 12, 15];
console.log("Numbers divisible by 3 but not by 2:");
checkDivisibility(numberArray);


// 10. 
// Function to correct the bug by doubling the quantity of each item in the cart
function doubleCartItemQuantities(cart) {
   let correctedCart = [];

   for (let i = 0; i < cart.length; i++) {
       let originalItem = cart[i];
       let correctedItem = { ...originalItem, quantity: originalItem.quantity * 2 };
       correctedCart.push(correctedItem);
   }

   return correctedCart;
}

let originalCart = [
   { item: "Product A", quantity: 3 },
   { item: "Product B", quantity: 5 },
   { item: "Product C", quantity: 2 }
];

let correctedCart = doubleCartItemQuantities(originalCart);
console.log("Original Cart:", originalCart);
console.log("Corrected Cart:", correctedCart);



// 11.
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
   // Use the conversion formula
   let fahrenheit = (celsius * 9 / 5) + 32;
   return fahrenheit;
}
let celsiusTemperature = 25;
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`Temperature in Celsius: ${celsiusTemperature}°C`);
console.log(`Temperature in Fahrenheit: ${fahrenheitTemperature}°F`);

// 12.
// Function to calculate rental cost
function calculateRentalCost(daysRented, carType) {
   const rentalCosts = {
       "Economy": 4000,
       "Midsized": 15000,
       "Luxury": 20000
   };

   if (rentalCosts.hasOwnProperty(carType)) {
       let totalCost = rentalCosts[carType] * daysRented;
       return totalCost;
   } else {
       return "Invalid car type";
   }
}

let daysRented = 5;
let carType = "Economy";
let rentalCost = calculateRentalCost(daysRented, carType);

console.log(`Number of days rented: ${daysRented}`);
console.log(`Car type: ${carType}`);
console.log(`Total rental cost: Rs. ${rentalCost}/-`);



// 13.
// Function to calculate the total bill and individual shares
function calculateBill(costPerDish, numberOfPeople) {
   let totalBill = costPerDish.reduce((sum, cost) => sum + cost, 0);
   let billPerPerson = totalBill / numberOfPeople;
   return {
       totalBill: totalBill,
       billPerPerson: billPerPerson
   };
}

let costPerDish = [25, 35, 15, 20];
let numberOfPeople = 4; 

let result = calculateBill(costPerDish, numberOfPeople);

console.log(`Total Bill: Rs. ${result.totalBill}/-`);
console.log(`Bill per Person: Rs. ${result.billPerPerson}/-`);



// 14. 
// Arrow function to calculate the final order price
const calculateFinalOrderPrice = (cart) => {
   const totalCost = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

   return totalCost;
};
const customerCart = [
   { itemName: "Product A", unitPrice: 25, quantity: 2 },
   { itemName: "Product B", unitPrice: 30, quantity: 3 },
   { itemName: "Product C", unitPrice: 15, quantity: 1 }
];

const finalOrderPrice = calculateFinalOrderPrice(customerCart);

console.log("Customer Cart:", customerCart);
console.log("Final Order Price: Rs. " + finalOrderPrice + "/-");


// 15.
// Arrow function to calculate the percentage of discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
   const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
   const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;

   return roundedDiscountPercentage;
};

const originalPrice = 1000;
const discountedPrice = 750;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

console.log("Original Price: Rs. " + originalPrice + "/-");
console.log("Discounted Price: Rs. " + discountedPrice + "/-");
console.log("Discount Percentage: " + discountPercentage + "%");


// 16.
// Self-invoking arrow function to generate a random number
const generateRandomNumber = (() => {
   const randomNumber = Math.floor(Math.random() * 100) + 1;

   console.log("Generated Random Number:", randomNumber);
   return randomNumber;
})();


// 17.
// Sample customer account object
const customerAccount = {
   name: "John Doe",
   balance: 1000
};

const displayBalance = (account) => {
   console.log(`Account Holder: ${account.name}`);
   console.log(`Current Balance: Rs. ${account.balance}/-`);
};

const deposit = (account, amount) => {
   account.balance += amount;
   console.log(`Deposited Rs. ${amount}/- into the account.`);
   displayBalance(account);
};

const withdraw = (account, amount) => {
   if (amount <= account.balance) {
       account.balance -= amount;
       console.log(`Withdrawn Rs. ${amount}/- from the account.`);
       displayBalance(account);
   } else {
       console.log("Insufficient funds. Withdrawal canceled.");
   }
};

displayBalance(customerAccount); 
deposit(customerAccount, 500);
withdraw(customerAccount, 200); 
withdraw(customerAccount, 1500); 






