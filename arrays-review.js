// 2.0 create an array with no elements inside of it, log the array
const array = []
console.log(`array:${JSON.stringify(array, null, 2)}`)
// 2.1 use array.push to add a number to the array, log the array
array.push (1)
console.log(`array: ${JSON.stringify(array, null, 2)}`)

// 2.2 create a new array with a number already inside of it, log the array
const newArray = [2]
console.log(`newArray: ${JSON.stringify(newArray, null, 2)}`)

// 2.3 use newArray.pop to remove an element from the back of the array
newArray.pop()
console.log(`newArray: ${JSON.stringify(newArray, null, 2)}`)

// 2.4 push two more numbers into your array
newArray.push(2, 3)
console.log(`newArray: ${JSON.stringify(newArray, null, 2)}`)

// 2.5 use spread syntax to combine arrays from above problems, log the results
const thirdArray = [...array, ...newArray]
console.log(`thirdArray: ${JSON.stringify(thirdArray, null, 2)}`)

// 2.6 use array.find to locate one of the elements in your array, log the located result
const found = thirdArray.find((number) => number === 2)
console.log(`found: ${found}`)

// 2.7 use array.every to determine if every single number is above "5", log the result
const BiggerThan5 = thirdArray.every((number) => number >5)
console.log(`numbersBiggerThanFive: ${BiggerThan5}`)
// 2.8 use array.filter to remove any numbers smaller than 5, log the result
const GreaterThan5 = thirdArray.filter((number) => number > 5)
console.log(`GreaterThan5: ${GreaterThan5}`)

// 2.9 use array.sort to sort the items from smallest to largest
const SortedNumbers = thirdArray.sort()
console.log(`Result: ${SortedNumbers}`)

// 2.91 use array.reverse to reverse the items so that they are now largest to smallest
const ReverseSortedNumbers = thirdArray.reverse()
console.log(`ReversedResult: ${ReverseSortedNumbers}`)

// 2.92 use array.reduce to sum up the entire list of numbers in the array
const Sum = thirdArray.reduce((Sum, CurrentNumber) => (Sum += CurrentNumber),0)
console.log(`Sum: ${Sum}`)

// 2.93 use array.map to scale each number in the array up by a factor of 10
const ScaledArray = thirdArray.map((number) => number * 10)
console.log(`ScaledArray: ${ScaledArray}`)

const FirstArray = thirdArray [0]
console.log(`FirstArray: ${thirdArray[0]}`)

const secondArray = thirdArray [1]
console.log(`FirstArray: ${thirdArray[1]}`)

const ThirdArray = thirdArray [thirdArray.length - 1]
console.log(`FirstArray: ${thirdArray[2]}`)