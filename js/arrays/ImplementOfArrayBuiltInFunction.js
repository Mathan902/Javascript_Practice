// 1.Write a function printNames(names) that takes an array of names (strings) and prints each name to the console.
function printNames(names){
    names.forEach(name=>{
        console.log(name);
    })
}
printNames(["ram","sam"])
// 2.Write a function squaredNumbers(numbers) that takes an array of numbers and returns a new array where each number is squared.
function squaredNumbers(numbers){
    return numbers.map((num)=>num*num)
}
console.log(squaredNumbers([1,2,3,4]))
// 3.Write a function getPositiveNumbers(numbers) that takes an array of numbers and returns a new array containing only the positive numbers
function getPositiveNumbers(numbers){
    return numbers.filter((number) => {return number>0})
}
console.log(getPositiveNumbers([1,2,-4,-3]))
// 4.Given an array of objects where each object represents a product with id, name, and price properties, write a function findProductById(products, id) that finds and returns the product with the specified id.
function findProductById(products,id){
    return products.find((product)=>{
        return product.id === id
    })
}
console.log(findProductById([{id:1,name:'TV',price:3000},{id:2,name:'Phone',price:1000}] , 1))
// 5.Create a function multiplyNumbers(numbers) that takes an array of numbers and returns the product of all the numbers using the reduce method.
function multiplyNumbers(numbers){
    return numbers.reduce((number , total)=>{return total*number})
}
console.log(multiplyNumbers([1,2,3,4,5]))
// 6.Write a function hasNegativeNumber(numbers) that checks if there is at least one negative number in an array of numbers.
function hasNegativeNumber(numbers){
    return numbers.some((number) => {return number<0})
}
console.log(hasNegativeNumber([1,2,3,4,5]));
// 7.Write a function allStrings(arr) that checks if all elements in an array are strings.
function allStrings(arr){
    return arr.every((elements)=>{return typeof elements === 'string'})
}
console.log(allStrings(["ram","sam"]))
// 8.Given an array of numbers, write a function sortDescending(numbers) that sorts the array in descending order.
function sortDescending(numbers){
    numbers.sort((a,b)=>{return b-a});
    //numbers.reverse();
    return numbers;
}
console.log("Sort array : " + sortDescending([10,4,3]));
// 9.Create a function combineArrays(arr1, arr2) that concatenates two arrays into a single array and returns it.
function combineArrays(arr1,arr2){
    return arr1.concat(arr2)
}
console.log(combineArrays([1,2,3],[4,5,6]))
// 10.Write a function removeFromArray(arr, startIndex, deleteCount) that removes deleteCount elements from startIndex in an array and returns the removed elements.
function removeFromArray(arr,startIndex,deleteCount){
    arr.splice(3,0,6)
    return arr;
}
console.log("Add 6 at 3 : "+removeFromArray([1,2,3,4,5],0,2))
// 11.Given a nested array (e.g., [[1, 2], [3, [4, 5]]]), write a function flattenNestedArray(arr) to flatten it into a single-level array.
function flattenNestedArray(arr){
    if (!Array.isArray(arr)) {
        return arr;
    }
    return arr.flatMap(element => flattenNestedArray(element));
}
console.log(flattenNestedArray([[1, 2], [3, [4, 5]]]))
// 12.Write a function findIndexOfPerson(people, name) that returns the index of the first person in an array of objects where the name property equals the specified name.
function findIndexOfPerson(peoples,name){
    var index = peoples.findIndex((people)=>{
        return people.name === name
    })
    return peoples[index]
}
console.log(findIndexOfPerson([{name:"TV"},{name:"Phone"}] , "TV"))

// 13.Create a function arrayIncludes(arr, value) that checks if an array contains the specified value and returns true or false.
function arrayIncludes(arr,value){
    return arr.includes(value);
}
console.log(arrayIncludes([1,2,3,4] , 4))
// 14.Write a function extractSubArray(arr, start, end) that returns a sub-array from index start to index end from a given array.
function extractSubArray(arr,start,end){
    return arr.slice(start,end)
}
console.log(extractSubArray([1,2,3,4,5],1,4))
// 15.Create a function createFilledArray(length, value) that initializes an array of length length with all values set to value using the fill method.
function createFilledArray(length,value){
    var arr = new Array(length);
    arr.fill(value);
    return arr;
}
console.log(createFilledArray(5,"hi"))
