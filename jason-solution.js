// Assumes correct input
// Uses reduce function to separate the array of letters,
// which are converted into binary and placed into groups of 3.
// The result is converted from binary to decimal and joined back into a string.
const perm2 = (permission_string) => {
  return [...permission_string]
    .reduce((acc,cur,i)=>{
      acc[~~(i/3)] += cur == '-' ? '0':'1';
      return acc;
    } , new Array(3).fill(''))
    .map(n=>parseInt(n,2).toString())
    .join('');
}

// Using bitwise operator
const perm = (permission_string) => {
  let digits = [...permission_string].map(n=>n==='-'?'0':'1');
  groups = []
  while (digits.length)
    groups.push(digits.splice(0,3));
  return groups
    .map(e=>e.reduce((acc,cur,i)=>acc+(cur << e.length-i-1), 0))
    .join('');
}

console.log(perm('rwxr-xr-x')) // should = 755
console.log(perm('r-xr-xr-x')) // should = 555
console.log(perm('rw-rw-rw-')) // should = 666
console.log(perm('---------')) // should = 0
