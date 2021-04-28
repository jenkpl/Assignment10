//STEP 1:Create an application that gets the number of days in a month. Display that result within the console window.
    // function daysinM (month, year) {
    //     return new Date(year, month, 0).getDate();
    // }
    // let uMonth = prompt(`Enter desired month according to the following numeric code:\nJanuary = 1, February = 2, March = 3, April = 4,\nMay = 5, June = 6, July = 7, August = 8, September = 9, \nOctober = 10, November = 11, December = 12`);
    // let uYear = prompt(`Now enter the year in numeric format XXXX`);
    // alert(`There were ${daysinM(uMonth, uYear)} days in the month of ${uMonth}/${uYear}.`);

//STEP 2:Create an application that gets the month name from a particular date. Display that result within the console window.
// let d = new Date();
// let m = d.getMonth();
// switch(m) {
//     case 0:
//     disp = "January";
//     break;
//     case 1:
//     disp = "February";
//     break;
//     case 2:
//     disp = "March";
//     break;
//     case 3:
//     disp = "April";
//     break;
//     case 4:
//     disp = "May";
//     break;
//     case 5:
//     disp = "June";
//     break;
//     case 6:
//     disp = "July";
//     break;
//     case 7:
//     disp = "August";
//     break;
//     case 8:
//     disp = "September";
//     break;
//     case 9:
//     disp = "October";
//     break;
//     case 10:
//     disp = "November";
//     break;
//     case 11:
//     disp = "December";
//     break;
// }
// console.log(disp);

//STEP 3:Create an application that tests whether a date is a weekend. Display that result within the console window.
// let    d = new Date();
// let test = d.getDay();
// if(test === 0 || test === 7) {
//     console.log(`It's the weekend!`);
// }
// else{
//     console.log(`It's NOT the weekend.`);
// }

//STEP 4:Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
// let d    = new Date();
// let day  = d.getDay();
// let yDay;
// switch(day){
//     case 0:
//     yDay = "Saturday";
//     break;
//     case 1:
//     yDay = "Sunday";
//     break;
//     case 2:
//     yDay = "Monday";
//     break;
//     case 3:
//     yDay = "Tuesday";
//     break;
//     case 4:
//     yDay = "Wednesday";
//     break;
//     case 5:
//     yDay = "Thursday";
//     break;
//     case 6:
//     yDay = "Friday";
// }
// console.log(`Yesterday was: ${yDay}.`);


// STEP 5:Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
// let d    = new Date();
// let day  = d.getDay();
// let disp;
// switch(day){
//   case 0:
//     disp = "S";
//     break;
//   case 1:
//     disp = "M";
//     break;
//   case 2:
//     disp = "T";
//     break;
//   case 3:
//     disp = "W";
//     break;
//   case 4:
//     disp = "T";
//     break;
//   case 5:
//     disp = "F";
//     break;
//   case 6:
//     disp = "S";
// }
// console.log(disp);