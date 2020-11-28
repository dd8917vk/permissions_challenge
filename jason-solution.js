// Assumes always correct input
const perm = (permission_string) => {
  return [...permission_string]
    .reduce((acc,cur,i)=>{
      acc[~~(i/3)] += cur == '-' ? '0':'1';
      return acc;
    } , new Array(3).fill(''))
    .map(n=>parseInt(n,2).toString())
    .join('');
}

console.log(perm('rwxr-xr-x')) // should = 755
console.log(perm('r-xr-xr-x')) // should = 555
console.log(perm('rw-rw-rw-')) // should = 666
console.log(perm('---------')) // should = 0
