const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];
  
function collectiveAge() {
const collective = hackYourFutureMembers.map(item => item.age).reduce((a,b) => a + b,0);
return collective
};

console.log(collectiveAge());
  