let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if (a < 0) {
  alert("This is an invalid age");
} else if (a < 9) {
  alert("You are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
  alert("You are a kid and you can think of driving after 18");
} else {
  alert("You can now drive as you are above 18");
}
console.log("Done");
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", a < 18 ? "not drive" : "drive");



//using script tag in html


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Age Check</title>
// </head>
// <body>

//     <h1>JavaScript Age Check</h1>
//     <p>The script will run when the page loads.</p>

//     <script>
//         // Aapka JavaScript code yahan hai
//         let a = prompt("Hey whats you age?");
//         a = Number.parseInt(a); // String ko number mein convert karte hain

//         // Check karte hain ki conversion safal hua ya user ne cancel kiya
//         if (isNaN(a)) {
//             alert("Invalid input. Please enter a number.");
//         } else {
//             // Ab age conditions check karte hain
//             if (a < 0) {
//                 alert("This is an invalid age");
//             } else if (a < 9) {
//                 alert("You are a kid and you cannot even think of driving");
//             } else if (a < 18) { // 9 se 17 saal ke liye (condition simplified)
//                 alert("You are a kid and you can think of driving after 18");
//             } else { // 18 ya usse zyada ke liye
//                 alert("You can now drive as you are above 18");
//             }
//         }

//         console.log("Script execution finished."); // Console mein message
//     </script>

// </body>
// </html>