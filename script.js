let number = '266219';
let iter;
let pow = 1;
for (iter = 0; iter < number.length; ++iter) {
    pow *= number[iter];
}
pow **= 3;
console.log(pow.toString().substr(0, 2));