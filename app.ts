//  02

// let firstName = "Eric";
// console.log("Hello Eric would you like to learn some Python today?");

//  03

// let person_name: string = "Rao Muhammad Arsalan Iqbal";

// console.log(person_name.toUpperCase());
// console.log(person_name.toLowerCase());
// console.log(titleCase(person_name));

// // 04

// let famousQuote: string = "A Person Who Never Made a Mistake Never Tried Anything New";
// let authorName: string = "Albert Einstein "

// console.log(famousQuote);
// console.log(authorName);

// // 05

// const famousPerson = "Albert Einstein";
// const famousQuote = "A Person Who Never Made a Mistake Never Tried Anything New";
// const message_= `${famousPerson} once said, "${famousQuote}"`;

// console.log(message_);

// 06

// let nameWith_Whitespace = "\t  \n   Arsalaniqbal  \n  \t";
// console.log("Name with whitespace:", nameWith_Whitespace);

// let stripped_Name = nameWith_Whitespace.trim();
// console.log("Stripped name:", stripped_Name);

// 07 
// 08

// console.log(5+3);   // Add

// console.log(10-2);  // Subt

// console.log(4*2);   // Multip

// console.log(16/2);  // Divi

// 09

// let favoritenumber = 9;
// console.log(`My favourite number is ${favoritenumber}`);

// 10

//        Adding Comments   ///////

// 07 
// 08
// console.log(5+3);   // Add
// console.log(10-2);  // Subt
// console.log(4*2);   // Multip
// console.log(16/2);  // Divi

// 09
// let favorite_number = 9;
// console.log(`My favourite number is ${favorite_number}`);

// 11

// let friendsArray = ["Hamzah Syed", "Okasha", "Imran"];
// console.log(friendsArray);

// 12

// let friendsArray=["Hamzah Syed", "Okasha", "Imran"];
// for (let i = 0; i < friendsArray.length; i++) {
//     console.log(`Hello My Friend ${friendsArray[i]}, How Are You?`);
// }

// 13

// let transportation=["Car" , "Bike",];
// for (let i = 0; i < transportation.length; i++) {
//     console.log(`I would like to own a ${transportation[i]}.`);
// }

// 14

// let guestsListArray=["All Faimly Members" , "Old Friend Umair" , "Neighbour Adnan" , "Cousin Hamzah"];
// for (let i = 0; i < guestsListArray.length; i++) {
//     console.log(`Dear ${guestsListArray[i]}. I Am Inviting You To On a Dinner At My Home.`);
// }

// 15

// const guestsListArray=["All Faimly Members" , "Old Friend Umair" , "Neighbour Adnan" , "Cousin Hamzah"];
// const not_Coming="Neighbour Adnan";
// const coming_Guest="Cousin Hamzah"

// for (let i = 0; i < guestsListArray.length; i++) {
//     if (guestsListArray[i] === not_Coming) {
//         guestsListArray[i] = coming_Guest;
//       }
//     console.log(`Dear ${guestsListArray[i]}. I Am Inviting You To On a Dinner At My Home.`);
// }



//16


// const guestList = ["Grand Father", "Dad", "Old Friend Umer", "Neighbour Ali", "Cousin Khalid"];
// guestList.push("Jaffar", "Ghazanfar", "Shoaib");

// guestList.forEach(guest => {
//   console.log(`Dear ${guest}, I am inviting you to a dinner at my place. I request the honor of your presence.`);
// });

//     //A:

//     console.log("Quick Update! I found a bigger table for dinner.");
     
//     //B:

//     const guestLis = ["Grand Father", "Dad", "Old Friend Umer", "Neighbour Ali", "Cousin Khalid"];
//     guestLis.push("Jaffar", "Ghazanfar", "Shoaib");
//     guestLis.unshift("Rana");

//     guestLis.forEach(guest => {
//     console.log(`Dear ${guest}, I am inviting you to a dinner at my place. I request the honor of your presence.`);
//     });

//     //C:
//     const guestLi = ["Grand Father", "Dad", "Old Friend Umer", "Neighbour Ali", "Cousin Khalid"];
//     guestLi.push("Jaffar", "Ghazanfar", "Shoaib");
//     guestLi.unshift("Rana");
//     guestLi.splice(3, 0, "Shakeel")

//     guestLi.forEach(guest => {
//     console.log(`Dear ${guest}, I am inviting you to a dinner at my place. I request the honor of your presence.`);
//     });

// //17

//    //A 
   
//    const guestsLi = ["Grand Father", "Dad", "Old Friend Umer", "Neighbour Ali", "Cousin Khalid"];
//    guestsLi.push("Jaffar", "Ghazanfar", "Shoaib");
//    guestsLi.unshift("Rana");
//    guestsLi.splice(3, 0, "Shakeel")

//    guestsLi.forEach(guest => {
//    console.log(`Dear ${guest}, We are really sorry but for some emergency we have to shrink our guests`);
//    });

//    //B
//    const guestsL = ["Grand Father", "Dad", "Old Friend Umer", "Neighbour Ali", "Cousin Khalid", "Jaffar", "Ghazanfar"];

//    while (guestsL.length > 2) {
//    const removedGuest = guestsL.pop();
//    console.log(`Sorry ${removedGuest}, we won't be able to invite you to dinner.`);
//    }

//    //C
//     guestsL.forEach(guest => {
//     console.log(`Dear ${guest}, you're still invited to dinner. See you soon!`);
//     });

//     //D
//     guestsL.length = 0;

//     console.log(guestsL);

//  //18
 
//     //A
//     const placesToVisit=["Saudi" , "Dubai" , "London" , "USA"];

//     //B
//     console.log(placesToVisit);

//     //C
//     const sortedlist = placesToVisit.slice().sort();
//     console.log(sortedlist);

//     //D
//     console.log("Orinal Array " + placesToVisit);
//     console.log("Arranged Array " + sortedlist);

//     //E
//     const revList =placesToVisit.slice().reverse();
//     console.log(revList);

//     //F
//     console.log(placesToVisit);

//     //G
//     placesToVisit.reverse();
//     console.log("Reversed Array:", placesToVisit);

//     //H

//     placesToVisit.reverse();
//     console.log("Original Array:", placesToVisit);

//     //I
//     placesToVisit.sort();
//     console.log("Sorted Array: " , placesToVisit)
  
    //J

    //• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//19
 

// console.log(`Number of people invited to dinner: ${guestsL.length}`);
//console.log("I Am Inviting All Of My Family Members On a Dinner At My Home IN SHA ALLAH.");


// 20

// let array = ["mountain K-2", "River Sindh", "KSA", "Madina", "Arabic"];
// console.log(array);


// 21

// interface Movies {
//     title: string;
//     director: string;
//     year: number;
//   }
  
//   const Movies: Movie[] = [
//     {
//       title: 'Titanic',
//       director: 'James Cameron',
//       year: 1997
//     },
//     {
//       title: 'Rambo',
//       director: 'Sylvester Stallone',
//       year: 1982
//     },
//     {
//         title: 'Minions',
//         director: 'Pierre Coffin',
//         year: 2015
//     },

//   ];
//     console.log(Movies);

// 22

// let name = "Pakistan";

// //console.log(Pakistan);  // error 
// console.log("Pakistan"); // withut error

// 23

//let mobile = "samsung" ;

// console.log("mobile == samsung ? It's true");
// console.log(mobile == "samsung");

// console.log("mobile != samsung ?  It's false");
// console.log(mobile != "samsung");

// console.log("mobile <= samsung ?  It's true");
// console.log(mobile <= "samsung");

// console.log("mobile =< samsung ?  It's false");
// console.log(mobile === "samsung");

// console.log("mobile === samsung ?  It's false");
// console.log(mobile === "Samsung");

// console.log("mobile !== samsung ?  It's true");
// console.log(mobile == "Samsung");

// console.log("mobile > samsung ?  It's false");
// console.log(mobile > "Samsung");

// console.log("mobile <= samsung ?  It's true");
// console.log(mobile <= "samsung");

// console.log("mobile == samsung ?  It's false");
// console.log(mobile == "Samsung");

// console.log("mobile < samsung ?  It's true");
// console.log(mobile < "samsung");


//24

//Tests for equality and inequality with strings

// let starter = "Soup";
// let maincourse = "Biryani";
// let dessert = "Icecream";

// console.log("starter is the Soup ? I predict it true");
// console.log(starter == "Soup");

// console.log("maincourse is the Icecream ? I predict it false");
// console.log(maincourse == "Icecream");

// console.log("dessert is the Biryani ? I predict it true");
// console.log(dessert != "Biryani");


// //Tests using the lower case function

// let x = "ABBAS" ;
// let y = "ali" ;

// console.log("x = ABBAS is in upperCase ? I predict it false");
// console.log(x.toLowerCase() == "ABBAS");

// console.log("x = ABBAS is in upperCase ? I predict it true");
// console.log(x.toLowerCase() != "ABBAS");

// console.log("y = ali is in lowerCase ? I predict it true");
// console.log(y.toLowerCase() === "ali");

// //Numerical tests
// let a = 2;
// let b = 4;

// console.log( "a == b ?  I predict it false");
// console.log(a == b);

// console.log( "a < b ?  I predict it true");
// console.log(a < b);

// console.log( "a => b ?  I predict it false");
// console.log(a >= b);

// console.log( "a <= b ?  I predict it true");
// console.log(a <= b);

// console.log(" a+b == 6 ,  I predict it true");
// console.log(a+b == 6);

// // Tests using "and" and "or" operators

// var age = 43;

// console.log("Age is 43? I predict it's true.");
// console.log(age >= 20 && age <= 50);

// console.log("Age is 43? I predict it's false.");
// console.log(age >= 50 || age <= 20);


// // Test whether an item is in a array

// let buddies = ["Abbas", "Salman", "Affan", "Shoaib"];

// console.log(buddies.indexOf('Saleem') !== -1);
// console.log(buddies.indexOf('Affan') !== -1);

// // Test whether an item is not in a array

// console.log(buddies.indexOf('Saleem') !== -1);
// console.log(buddies.indexOf('Affan') !== -1);



// //25

// var alien_color = "green" ;

// if (alien_color = "green"){
//   console.log("Player just earned 5 points");
// }


// //
// var alien_color = "yellow" ;

// if (alien_color = "green"){
//   console.log("Player just earned 5 points");
// }


// //26

// var alien_color = "yellow" ;

// if (alien_color = "green"){
//   console.log("Player just earned 5 points");
// }
// else(alien_color = "yellow");{
//   console.log("Player just earned 10 points");
// }

// // B unable to do


// //27

// //1st
// var alien_color = "yellow" ;

// if (alien_color = "green"){
//   console.log("Player just earned 5 points");
// }
// else if (alien_color = "red"){
//   console.log("Player just earned 10 points");
// }
// else(alien_color = "yellow");{
//   console.log("Player just earned 15 points");
// }

// //2n
// var alien_color = "green" ;

// if (alien_color = "green"){
//   console.log("Player just earned 5 points");
// }
// else if (alien_color = "red"){
//   console.log("Player just earned 10 points");
// }
// else(alien_color = "yellow");{
//   console.log("Player just earned 15 points");
// }

// //3rd
// var alien_color = "red" ;

// if (alien_color = "green"){
//   console.log("Player just earned 5 points");
// }
// else if (alien_color = "red"){
//   console.log("Player just earned 10 points");
// }
// else(alien_color = "yellow");{
//   console.log("Player just earned 15 points");
// }


// 28

// var age=22

// if (age >= 0 && age < 2) {
//   console.log("The person is a baby");

// } else if (age >= 2 && age < 4) {
//   console.log("The person is a toddler");

// } else if (age >= 4 && age < 13) {
//   console.log("The person is a  kid");

// } else if (age >= 13 && age < 20) {
//   console.log("The person is a  teenager");

// } else if (age >= 20 && age < 65) {
//   console.log("The person is a  adult");

// } else {
//   console.log("The person is a  elder");
// }


// 29

// const fruits = ['banana', 'mango', 'strawberry'];

// if (fruits.indexOf('apple') !== -1) {
//   console.log("I like apples!");
// }

// if (fruits.indexOf('banana') !== -1) {
//   console.log("I  love bananas!");
// }

// if (fruits.indexOf('mango') !== -1) {
//   console.log("I always eat mangoes!");
// }

// if (fruits.indexOf('strawberry') !== -1) {
//   console.log("I  like strawberries!");
// }

// if (fruits.indexOf('pineapple') !== -1) {
//   console.log("I can eat pineapples!");
// }


// 30

// let users = ["Alex", "Sam", "Paul", "Michael" ,"Admin"];

// for (let i = 0; i < users.length; i++) {
//   let username = users[i];
//   console.log(`Hello ${username} , thank you for logging in again.`);

//   if (username === "Admin") {
//     console.log("Hello admin, welcome back! Would you like to see a status report?");
//   }
// }


// 31

// let userss = ["Admin", "Alex", "Sam", "Paul", "Michael"];

// if (userss.length === 0) {
//   console.log("We need to find some users!");
// }
//  //

//  let userz = [ ];

// if (userz.length === 0) {
//   console.log("We need to find some users!");
// }


// 32

// let currentUsers = ["Austin", "Alex", "Sam", "Paul", "Michael" , "John"];
// let newUsers = ["Adam", "Ana", "Samuel", "Peter", "Winston"];

// for (let i = 0; i < newUsers.length; i++) {
//   let newUsername = newUsers[i];
  
//   if (currentUsers.indexOf(newUsername) !==-1) {
//     console.log(`Oops, the username '${newUsername}' is already taken. Try a new username.`);
//   } else {
//     console.log(`Congratz The username '${newUsername}' is available.`);
//   }
// }


// 33

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   let number = numbers[i];
//   let ordinal;

//   if (number === 1) {
//     ordinal = 'st';
//   } else if (number === 2) {
//     ordinal = 'nd';
//   } else if (number === 3) {
//     ordinal = 'rd';
//   } else {
//     ordinal = 'th';
//   }

//   console.log(`${number}${ordinal}`);
// }


// 34

// let favPizza=["Pepproni" , "Cream Cheese" , "Fajita" , "Chicken Supreme"]
// for (let i = 0; i < favPizza.length; i++){
//   let pizzas = favPizza[i];

//   console.log(pizzas);
//   console.log(`I like ${pizzas}  pizza`)
// }

// console.log("I really likes pizza.\nIt is like one of my favourite snacks.\nI am always ready for having a pizza");


// 35

// let farmanimals = ["Horse", "Goat", "Cow"];

// for (let i = 0; i < farmanimals.length; i++) {
//   let farm = farmanimals[i];
   
//   if (farm === "Horse") {
//     console.log(`${farm} can be used for travelling`);
//   } else if (farm === "Goat") {
//     console.log("Goats can be used for milk and mutton");
//   } else if (farm === "Cow") {
//     console.log("Cows can be used for ploughing, milking, and meat");
//   } else {
//     console.log(`This ${farm} is a farm animal`);
//   }
// }
 
// console.log("All these animals are good for agriculture and farming")


//  36


// function make_shirt(size: number, message: string) {
//     console.log(`The shirt size is ${size} and the message printed on it is "${message}".`);
//   }
  
//   make_shirt(48, "Hello World!");
  

// 37


// function make_shirt_v2(size: number, message: string) {
//     console.log(`The shirt size is ${size} and the message printed on it is "${message}".`);
//   }
  
//   make_shirt_v2(50, "Hello World!");
  
  
// 38

// function describe_city(city: string, country: string) {
//     console.log(`${city} is in ${country}.`);
//   }
  
//   describe_city("Karachi", "Pakistan");
//   describe_city("London", "England");
//   describe_city("New York", "USA");


  // 39


  // function city_country(city: string, country: string):string{
  //   return `${city} is in ${country}`
  // }
  
  // console.log(city_country("Toronto", "Canada"));
  // console.log(city_country("New York", "USA")); 
  // console.log(city_country("London", "England"));
  

// 40


// interface Album {
//     artist: string;
//     album: string;
//     tracks?: number;
//   }
  
  // function make_album(artist: string, album: string, tracks?: number): Album {
  //   let album_dict: Album = {
  //       "artist": artist,
  //       "album": album
  //   };
  //   if (tracks) {
  //       album_dict["tracks"] = tracks;
  //   }
  //   return album_dict;
  // }
  
  // let album1 = make_album("Eminem", "Revival");
  // let album2 = make_album("Maria Cary", "Daydream",15);
  // let album3 = make_album("Beyonce", "Lemonade");
  // let album4 = make_album("Michael Jackson", "Ben", 10);
  
  // console.log(album1);
  // console.log(album2);
  // console.log(album3);
  // console.log(album4);
  

// 41

// let magicians: string[] = ['Kallu', 'Taklu', 'Shapar'];

// function show_magicians(magicians: string[]){
//     for(let i=0;i<magicians.length;i++){
//         console.log(magicians[i])
//     }
// }

// show_magicians(magicians)

//42

// function make_great(magicianz: string[]): void {
//   for (let i = 0; i < magicianz.length; i++) {
//       magicianz[i] = `the Great ${magicianz[i]}`;
//   }
// }

// function show_magicianz(magicianz: string[]): void {
//   for (let magician of magicianz) {
//       console.log(magician);
//   }
// }

// let magicianz: string[] = ['Kallu Jadugar', 'Taklu Jadugar', 'Shapar Jadugar'];
// make_great(magicianz);
// show_magicianz(magicianz);

//43

// const jadugar: string[] = ['Kallu Jadugar', 'Taklu Jadugar', 'Shapar Jadugar']

// function make_greater(names: string[]): string[] {
//     const greatNames: string[] = names.map(name => `Great ${name}`);
//     return greatNames;
// }

// function show_magicianss(names: string[]): void {
//     names.forEach(name => console.log(name));
// }

// const greatMagicians: string[] = make_greater([...jadugar]);
// show_magicianss(jadugar);
// show_magicianss(greatMagicians);


//44

// function pizza(...items: string[]) {
//   if (items.length === 0) {
//       console.log("You ordered a pizza.");
//       return;
//   }
//   console.log(`You ordered a pizza with ${items.join(", ")}.`);
// }

// pizza("chicken Lazania");
// pizza("smokey beef");
// pizza("Regular Ingr");

//45

// interface Car {
//   manufacturer: string;
//   model: string;
// }

// function create_Car(manufacturer: string, model: string, ...args: any[]): Car {
//   const car: Car = {
//       manufacturer,
//       model,
//   };

//   for (let i = 0; i < args.length; i += 2) {
//       const key = args[i];
//       const value = args[i + 1];
//       car[key] = value;
//   }

//   return car;
// }

// const Car = create_Car("KIA", "Sportage", "color", "black", "year", 2023);
// console.log(Car);


















  













































