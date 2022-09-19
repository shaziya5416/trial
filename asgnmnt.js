// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) { 
    var max = Math.max.apply(null, array); 
    array.splice(array.indexOf(max), 1); 
    return Math.max.apply(null, array); 
};

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(str) {
  let feq = {}
    for ( let i = 0 ; i < str.length ; i ++ ) {
        if ( str[i].charCodeAt() >= 97 || str[i].charCodeAt() >= 122 ) {
            if ( feq[str[i]] ) {
                feq[str[i]]++
            } else {
                feq[str[i]] = 1
            }
        }
    }
    return feq;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  let finalObj = {};
	
    for (let key in unflatObject) {      

      if ((typeof unflatObject[key]) == 'object') {     
        let flatObject = flatten(unflatObject[key]);     
        for (let x in flatObject) {          
          finalObj[key + '.' + x] = flatObject[x];
        }
      } else {                                        
        finalObj[key] = unflatObject[key];
      }
    }
    return finalObj;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
}
