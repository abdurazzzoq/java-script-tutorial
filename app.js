let result;
const firstName = 'Lala'
const lastName = 'lll'
result = firstName + ' ' + lastName


//Properties and methods
 result ='hello world'.length;
result = firstName.length


// concat methods
 result= firstName.concat
 (' ',lastName);
result = result.toLocaleLowerCase();
result = firstName[0];
result = 'hello'.indexOf('l'); // 'index of' returns the position of the first the element


// in order to get the last element of the longest string we can use the code below:
const theLongestString = 'hello, kakasf nfesufnunsdnfnnaj ejfijsjdfjijiewjjewpuwel;sd,ksd';
result = theLongestString.charAt /* charat is the method where user can find the element with the numbers*/  
(theLongestString.length - 1);


// slice();
const lala = 'salam alekum yang yang'
result = lala.slice(-10);

// split();
result = lala.split('a');

//replace();
result  = lala.replace('yang' , 'lalla');

// includes();
result = lala.includes('salam');



console.log(result);