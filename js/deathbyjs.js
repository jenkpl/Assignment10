//STEP 1:Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.Sample Data and OutputExample string: 'webmaster' Expected Output: 'abeemrstw
// let it = prompt('Enter a word or sentence without punctuation.');
// function organizeIt() {
// let lowerIt = it.toLowerCase();
// let splitUp = lowerIt.split(''); //is a substring of the characters
// let sorted  = splitUp.sort();//sorts the characters a to z
// let result  = sorted.toString().replace(/,/g,'');//removes the commas
// alert(`Your result is: ${result}`)
// };
// organizeIt();

//STEP 2:Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.Sample Data and OutputExample string: 'the quick brown fox' Expected Output: 'The Quick Brown Fox'
//  let it = prompt('Enter a word or sentence in lowercase characters.');
//  function capFirst() {
//         let locate = it.charAt(0);
//         let upper  = locate.toUpperCase();
//         alert(it.replace((locate), (upper)));
// }
//  capFirst();

//STEP 3:Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Sample Data and Output Example string: 'The quick brown fox' Expected Output: 5
// function countVowels(){
//     let samp = prompt('Please enter your sample to the Vowel Counter!');
//     let vowArray = samp.match(/[aeiou]/g);
//     let count = vowArray.length;
//     alert(`There are ${count} vowels in your sample.`);
// }
// countVowels();



//STEP 4:Write a JavaScript function that generates a string id (specified length) of random characters.Sample Data and OutputExpected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
//8 characters nums and letters cap & lowercase  (48 to 122)
// function createCode() {
// let final =[];
// for (i=0; i<8; i++){

//     let rando = Math.floor(Math.random() * 74) + 48; //need number in range of 48 to 122
//     let charCode = String.fromCharCode(rando);
//     final.push(charCode);
//     console.log(final);
// }
// let secretCode = final.join("");
// alert(`Your code is:  ${secretCode}`);
// }
// createCode();

//STEP 5:Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.Sample Data and OutputSample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])Expected output: "United States of America"

// function findLongestCountry(){
//     let list = prompt(`Enter a list of country names, separated by commas.`)
//     let countryArr = list.split(', ');
//     const sortIt  = countryArr.sort((a,b) => b.length - a.length);
//     console.log(sortIt);
//     let longest = sortIt[0];
//     alert(`The country with the longest name is: ${longest}.`);
// }
// findLongestCountry();
