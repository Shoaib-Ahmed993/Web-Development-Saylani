////////////// Variables ///////////////

// var name = "Shoaib"
// name = "Shoaib Ahmed"
// console.log(name)

// let name = "Shoaib"
// let name = "Shoaib Ahmed"
// console.log(name)

// const name = "Shoaib"
// const name = "Shoaib"
// console.log(name)



///////// Template Literals //////////

// let firstName = "Shoaib"
// let lastName = "Ahmed"

// // console.log(firstName + " "+ lastName)

// console.log(`My name is ${firstName} ${lastName}`)


/////// Spread Operators //////////

// var students1 = ["Shoaib", "Saqib", "Yasir"]
// var students2 = [...students1,"Zohaib", "Sharjeel", "Wasi"]
// console.log(students2)

// var merge = students1.concat(students2)
// console.log(merge)


//////// Object Destructuring /////////////


// var student = {
//     name: "Shoaib",
//     school: "Saylani",
//     roll: 1234
// }
// // console.log(student)

// let {name, school, roll} = student
// console.log(name)
// console.log(school)
// console.log(roll)


///// Ternary Operators //////

// let age = 40
// var check = age > 30 ? "30 se bara hai" : "30 se chhota hai"
// console.log(check)

// var bool = false
// var name = bool && "Shoaib"
// console.log(name)


/////// Asynchronous Synchronous ///////////


// setTimeout(function()  {
//     console.log("Number 1")

// }, 1000);

// console.log("Number 2")
// console.log("Number 3")

// var fullName;
// setTimeout( function() {
//     fullName = "Shoaib Ahmed"
// }, 1000);
// console.log(fullName)


////// Promise ////////

// var promise = new Promise( function (resolve, reject){
//     var zinger = "Available"

//     if (zinger === "Available"){
//         setTimeout(() => {
//             resolve("Promise pura")
//         }, 5000)
//     }
//     else{
//         reject("Promise adhura")
//     }
// })
// console.log(promise)
// promise.then(function(data){
//     console.log("Resolve")
// })
// promise.catch(function(error){
//     console.log("Reject") 
// })

// let promise = new Promise(function(resolve, reject){
//     firebase.database().ref("users").on("child_added", function(data){
//         if (data.val()){
//             resolve(data.val())
//         }
//         else{
//             reject("Something went wrong")
//         }
//     })
// })

// promise.then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(console.error())
// })



////////// Class 24 //////////

//// Array Destructuring /////

// let arr = ["Shoaib", "Ahmed", "Sharjeel", "Ali"]
// let [name1, name2, name3, name4] = arr
// console.log(name1)


////// Function Expressions /////


// let foo = function(){
//     alert("Hello World")
// }
// foo()


///// Arrow Function //////

// let hello = () => {
//     console.log("I'm arrow")
// }
// hello()

// let hello = name => {
//     console.log(`Hello ${name}`)
// }
// hello("Shoaib")

// let hello = (firstName, lastName) => {
//     console.log(`Hello ${firstName} ${lastName}`)
// }
// hello("Shoaib", "Ahmed")

// let hello = _ => {
//     return "Shoaib Ahmed"
// }
// console.log(hello())

// let hello = () =>
//     "Shoaib Ahmed"
// console.log(hello())

// () => "Shoaib Ahmed"
// console.log()


// setInterval(() => {
//     console.log("Hello world")
// }, 1000);


// let getData = (render_Data) => {
//     // fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         render_Data(data)
//     //     })
//     setTimeout(() => {
//         render_Data("Shoaib")
//     }, 3000);
// }

// let render_Data = (name) => {
//     console.log(name)
// }

// getData(render_Data)



///// Array Functions /////

// let arr = [{ name: "Ghous", age: 20 }, { name: "Basit", age: 30 }]
// let filter = arr.filter((a) => a.age === 20)
// console.log(filter)


////// Search //////

// let name = "Shoaib"
// let search = "Sh"
// if (name.startsWith(search)){
//     console.log(name)
// }
// let name = "Shoaib"
// let search = "b"
// if (name.endsWith(search)){
//     console.log(name)
// }


///// Array Map //////

// let arr = [1,2,3,4,5]
// console.log(arr)

// let multiply = arr.map((a) => a*3)
// console.log(multiply)

// let arr = [{name: "Shoaib"}, {name: "Ahmed"}]
// console.log(arr)

// let multiply = arr.map((a) => a.name = "SHOAIB")
// console.log(multiply)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log("Result is",data))
//   .catch(error => console.log("Error is",error))

// async function getData() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(data)
// }



/////  Classes  ////

// class Student {
//     constructor (name, email){
//         this.name = name
//         this.email = email
//     }
// }

// class School extends Student{
//     constructor (name, email, school){
//         super(name, email)
//         this.school = school
//     }
// }

// let student = new School("Shoaib", "shoaib@gmail.com", "Saylani")
// console.log(student)



//////// Firebase Authentication ////////

// let signUp = () => {
//     let email = document.getElementById('email')
//     let password = document.getElementById('password')

//     firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//         .then((result) => {
//             console.log(result)
//         })
//         .catch(function (error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorMessage)
//             // ...
//         }); email - password.html
// }


// let signIn = () => {
//     let email = document.getElementById('signin-email')
//     let password = document.getElementById('signin-password')

//     firebase.auth().signInWithEmailAndPassword(email.value, password.value)
//     .then((result) => {
//         console.log(result)
//     })

//     .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorMessage)

//         // ...
//       });email-password.html

// }




/////// Firebase Facebook Authentication ////////


// const facebook_login = () => {
//     var provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//         var user = result.user;
//         window.location = "home.html"
//         console.log("user ===> ", user.displayName)
//     }).catch(function (error) {
//         console.log(error.message)
//     });
// }

// const signout = () =>{
//     firebase.auth().signOut()
//     .then(() =>{
//         window.location = "login.html"
//     })
//     .catch(() =>{
        
//     })
// }














