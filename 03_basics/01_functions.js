

// function sayMyName(){
//     console.log("A")
//     console.log("Y")
//     console.log("U")
//     console.log("S")
//     console.log("H")
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("result:" , result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ayush"))
// console.log(loginUserMessage("Ayush"))
function calculateCartPrice( val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 1000))

const user ={
    username: "Ayush",
    prices: 199
}

function handleObject(anyObject){ 
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}

// handleObject(user)
handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200, 400, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600]));
