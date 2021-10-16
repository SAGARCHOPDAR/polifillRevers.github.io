// Assignment-2

// Pollyfill (own implementation) for join,split & reverse method.

// Pollyfil for join:-

const countries = ['London', 'UK', 'Paris', 'Canada.'];

const res = countries.join(', ');

console.log('I want to visit ' +res);

/*Expected Output:
I want to visit London, UK, Paris, Canada.
*/

// Pollyfil for split:-

const str = "Hi guys let's learn pollyfill for split.";

const arr = str.split(" ");

console.log(arr)

/*Expected Output:-
0: "Hi"
1: "guys"
2: "let's"
3: "learn"
4: "pollyfill"
5: "for"
6: "split."
length: 7
[[Prototype]]: Array(0) 
const arr = str.split(' ',4);
0: "Hi"
1: "guys"
2: "let's"
3: "learn"
length: 4 
*/



// Pollyfil for reverse:-

const arr1 = [10,9,8,7,6,5,4,3,2,1,0];

const reversed = arr1.reverse();

console.log(reversed);

/* Expected Output:-
0: 0
1: 1
2: 2
3: 3
4: 4
5: 5
6: 6
7: 7
8: 8
9: 9
10: 10
length: 11
*/

console.log("--------------------------------------------------------------------------------------------------------------------------");

const str = "val1&$val2&$val3";
const op = str.mySplit('&$');
console.log(op);

// output
// ["val1", "val2", "val3"]


String.prototype.mySplit = function(splitVal) {
    const outputArr = [];
    const string = this;
    let nextVal = '';
    const splitlength = splitVal.length;
    let i = 0;
    
  }
   while(i < string.length) {
    // When the current character is same as splitVal's first character
    if (string[i] === splitVal[0]) {
      let split_length_remaining = splitlength - 1;
      let split_length_passed = 1;
      let similarSplit = string[i];
      while(split_length_remaining) {
        if (string[i + split_length_passed] === splitVal[split_length_passed]) {
          similarSplit += string[i + split_length_passed];
          split_length_passed++;
          split_length_remaining--;
        } else {
          break;
        }
      }
      if (!split_length_remaining) {
        outputArr.push(nextVal);
        nextVal = '';
      } else  {
        nextVal += similarSplit;
      }
      i = i + split_length_passed;
    } else {    // When the current character is different from `splitVal` 's first character
      nextVal += string[i];
      i++;
    }
  }
  outputArr.push(nextVal);
  return outputArr;
   const x = "val1&$val2&$val3".myCustomSplit('&$');
   console.log(x);