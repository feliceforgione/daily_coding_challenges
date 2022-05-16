//Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array. double([1,2,3]) 

const double = (num) => {
    let doubled = [];
    for (let i = 0; i < num.length; i++) {
        doubled.push(num[i]*2)
    }
    return doubled
}

console.log(double([1,2,3]) )

//num.map( c => c*2)

//Write a function called add which takes in an array and returns the result of adding up every item in the array. add([1,2,3]) // 6

const add = nums => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}

console.log(add([1,2,3]))

// nums.reduce( (acc, n) => acc + n, 0 )


