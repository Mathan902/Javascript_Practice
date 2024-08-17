var arr = [1,2,3,4,5];
// Basic Array Methods
console.log(arr.length) // 1. length method - return the length of the array
console.log(arr.toString()) // 2. toString method convert all array elements to single string seperated by comma
console.log(arr.at(3)) // 3. at method - to retain the element at the index 
console.log(arr.join("/")) // 4. join method is used to join all array elements with any character like , / * etc..
console.log(arr.pop()) // 5. pop method is used to last element of array
console.log(arr.push(6)) // 6.push element is used to element at last in the array
console.log(arr.shift()) // 7.shift method is used to pop first element of array
console.log(arr.unshift(9)) // 8.unshift method is used to push element at the first of the array
delete arr[2] // 9.delete element is used to delete the element at the given index

var ars = [11,12,13,14]
console.log(arr.concat(ars)) // 10.concat method is used to concat two arrays and return the new array

ars.copyWithin(0,1)
console.log(ars) // 11.copyWithin method is used to copy elements within a array

const myArr = [[1,2],[3,4],[5,6]]
console.log(myArr.flat()) // 12.converts every subarray into a single array

// 13.splice method is used to add new elements to array or replacing existing elements also
arr.splice(2,0,8,9)
console.log(arr)

// 14.toSpliced method is similar to splice where toSpliced method does not modify the original string and return a modified string
console.log(arr.splice(2,2,8,9))