//1. calculateDifference function:
function calculateDifference(num1,num2){
    return num1-num2;
}
console.log('calculateDifference :',calculateDifference(50,30));

//2. isOdd function
function isOdd(num1){
    return num1%2!==0;
}
console.log('isOdd :',isOdd(31))

//3. findMin function
function findMin(arr){
    let minimum= arr[0];
    for(let i=0; i< arr.length;i++){
        if(minimum > arr[i]){
            minimum = arr[i];
        } 
    }
    return minimum;
}

let arr = [20,30,10,5,50,60,100,40,1,-4,-4,99,78,-10];
console.log('findMin :',findMin(arr));

//4. filterEvenNumbers function

function filterEvenNumbers(arr){
    let res = arr.filter((item)=>{
        return item % 2 ===0;
    })
    return res;
}
console.log('filterEvenNumbers :',filterEvenNumbers(arr));


//5. sortArrayDescending function
function sortArrayDescending(arr){
    return arr.sort((a,b)=> b-a);
}

console.log('sortArrayDescending :',sortArrayDescending(arr));

//6. lowercaseFirstLetter function
function lowercaseFirstLetter(arr){
    const myArray = arr.split("");
    const res = myArray.map((item,index)=>{
        if(index === 0) return item.toLowerCase();
        return item;
    })
    let s='';
    res.forEach(element => {
        s+=element;
    });
    return s;
}
console.log('lowercaseFirstLetter :',lowercaseFirstLetter('Hello Lucifer'))
console.log('lowercaseFirstLetter :',lowercaseFirstLetter('WORLD'))


//7. findAverage function

function findAverage(arr){
    let length =arr.length;
    let sum=0;
    arr.forEach((el)=> sum+=el);
    return sum/length;
}
console.log('findAverage :', findAverage([1,2,3]));


//8. isLeapYear function

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
}

console.log('isLeapYear :',isLeapYear(2020)); 
console.log('isLeapYear :',isLeapYear(1900)); 


  

