// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: "ayushshaw@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayush",
            lastname: "shaw"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1: "A", 2: "B"}
const obj2 ={3: "A", 4: "B"}
const obj4 ={5: "A", 6: "B"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 ={...obj1, ...obj2, ...obj4}
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

console.log(Instructor);