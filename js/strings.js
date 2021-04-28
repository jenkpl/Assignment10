//STEP 1:Create an application that prompts the user for their name. Then, find the length of characters in the person’s name. Use the alert method to display the result.
    // let yName   = prompt('WELCOME TO THE NAME-LENGTH-O-METER!\nPlease enter your name:');
    // let howLong = yName.length;
    // alert(`RESULTS ARE IN: Your name is: ${howLong} characters long!`);


//STEP 2:Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
    // let yName   = prompt('WELCOME TO THE NAME-CHARACTER-FINDER!\nPlease enter your name:');
    // let max     = yName.length;
    // console.log(max);
    // let num     = parseInt(prompt(`Please enter a number between:\n0 and ${max}. ` ));
    // let answer  = yName.charAt(num);
    // alert(`The character at your selected position is: ${answer}`);

//STEP 3: Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
    // let fname    = prompt(`Please enter your first name.`);
    // let lname    = prompt(`Now, please enter your last name.`);
    // let fullName = fname.concat(lname);
    // alert(`Your name is: ${fullName}.` );

//STEP 4:Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
    // let sample = 'The quick brown fox jumps over the lazy dog';
    // let loc    = sample.indexOf('fox');
    // alert(`The index of the word \"fox\" is: ${loc}.` );

//STEP 5:Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
    // let sample  = 'The quick brown fox jumps over the lazy fox';
    // let loc     = sample.lastIndexOf('fox');
    // alert(`The last index of the word \"fox\" is: ${loc}.` );

//STEP 6: Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
    // let sample    = 'The quick brown fox jumps over the lazy dog';
    // let loc1      = sample.indexOf('The');
    // let loc2      = parseInt(sample.indexOf('over')) + 4;
    // let uName     = prompt(`Please enter your full name.`);
    // let cutSample = sample.slice(loc1, loc2);
    // alert(cutSample.concat(uName));

//STEP 7:Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
//     let sample = 'The quick brown fox jumps over the lazy dog';
//     let seek   = prompt(`Please enter a word to search for within the sample.`);
//     if(sample.indexOf(seek) !== -1){
// alert(`The location of the word \"${seek}\" is index: ` + sample.indexOf(seek));
// } else {
//     alert(`Sorry, no match found.`);
// }
//STEP 8:Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
    // let old_string       = 'The quick brown fox jumps over the lazy dog';
    // let loc1             = old_string.lastIndexOf('the');
    // let loc2             = parseInt(old_string.indexOf('dog')) + 3;
    // let new_string       = old_string.slice(loc1, loc2);
    // alert(new_string.toUpperCase());

//STEP 9:Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
    // let spaceyString = '           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
    // alert(spaceyString.toLowerCase().trim());


//STEP 10:Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
    // let samp  = 'the quick brown fox jumps over the lazy dog';
    // let first = samp.charAt(0);
    // let cap = first.toUpperCase();
    // console.log(first);
    // console.log(cap);
    // alert(samp.replace((first), (cap)));
    

