let number = '266219';
let pow = 1;
for (let iter = 0; iter < number.length; iter++) {
    pow *= number[iter];
}
console.log(pow **= 3);
console.log(pow.toString().substr(0, 2));