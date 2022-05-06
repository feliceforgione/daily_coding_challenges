// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

const pairProduct = (numbers, targetProduct) => {
    const hash = {}
    for (let i = 0; i < numbers.length; i++) {
       const num = numbers[i];
       const comp = targetProduct/num 
       if (comp in hash) {
         return [hash[comp], i]
       }
       hash[num] = i;
    }
  }

