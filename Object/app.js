// var webCourse = {
//     t1: "Sir Ali",
//     t2: "Sir Ghous",
//     t3: "Sir Basit"
// }
// console.log(webCourse);
// webCourse.t4 = "Ma'am Nadia";
// console.log(webCourse);
// webCourse.class = [17, 18, 19];
// console.log(webCourse);
// webCourse.institute = {
//     Saylani: "Sunday",
//     BMJ: "TTS 7-9"
// }
// console.log(webCourse);
// var abc = "t4" in webCourse;
// console.log(abc);
// var xyz = "t5" in webCourse;
// console.log(xyz)


// var arr = ["Sir Ali", "Sir Ghous", "Sir Basit"];
// console.log(arr);


// var myQuestions = [
//     {
//         question : "What is your name?",
//         Answer : {
//             a : "Sir Ali",
//             b : "Sir Ghous",
//             c : "Sir Basit"
//         },
//         correctAnswer : "a"
//     },
//     {
//         question : "What is your age?",
//         Answer : {
//             a : "16",
//             b : "18",
//             c : "20"
//         },
//         correctAnswer : "b"
//     },
//     {
//         question : "What is your city?",
//         Answer : {
//             a : "Quetta",
//             b : "Peshawar",
//             c : "Karachi"
//         },
//         correctAnswer : "c"
//     },
// ]

// function webCourse(t1, t2, t3){
//     this.t1 = t1,
//     this.t2 = t2,
//     this.t3 = t3
// }
// var xyz = new webCourse("Sir Ali", "Sir Ghous", "Sir Basit");
// console.log(xyz)



// var student = {
//     name: "Shoaib",
//     roll: 27,
//     class: "BS-CS",
//     section: "C",
//     semester: 3,
//     course: "Vp"
// }
// console.log(student.roll)


// var students = [{name: "Shoaib"}, {name: "Ahmed"}]
// console.log(students[0].name)


// var student = {
//     name: "Shoaib",
//     roll: 27,
//     class: "BS-CS",
//     section: "C",
//     semester: 3,
//     course: "Vp"
// }
// delete student.semester
// console.log(student)




// function Student(name, roll){
//     this.name = name;
//     this.roll = roll;
// }
// Student.prototype.getName = function(){
//     return this.name;
// }

// var std1 = new Student("Shoaib", 123);
// var std2 = new Student("Ahmed", 12);
// var std3 = new Student("Hussain", 1);
// console.log(std1)
// console.log(std2)
// console.log(std3)

// var student1 = {
//     name: "Shoaib",
//     roll: 27,
//     school: "Saylani"
// }
// // // console.log('roll' in student1)
// // for (var prop in student1){
// //     console.log(student1[prop])
// // }
// console.log(student1.hasOwnProperty('name'))
// console.log(student1)



// function saveData() {
//     var name = document.getElementById('name');
//     var roll = document.getElementById('roll');


//     // own key
//     // var key = Math.random() * 234234587
//     // firebase.database().ref('student/' + key.toFixed()).set(student)

//     // firebase key
//     var key = firebase.database().ref('student').push().key
//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key: key
//     }
//     firebase.database().ref('student/' + key).set(student);

    // firebase.database().ref('student').child('student1').set(student)
    //  firebase.database().ref('student').push(student)
// }

    // retreive data
// function getFirebaseData(){
//         // once function
//     // firebase.database().ref('student').once('value', function(data){
//     //     console.log(data.val())
//     // })
//         // on function
//     firebase.database().ref('student').on('child_added', function(data){
//         console.log(data.val())
//     })
// }

// getFirebaseData()


    // remove data
// function removeFirebaseData(){
//     firebase.database().ref('student').remove()
// }
// removeFirebaseData()


    // edit data
// function ediFirebaseData(){
//     firebase.database().ref('student/-MErHlhItkW9j0qCSzvA').set({
//         key: '-MErHlhItkW9j0qCSzvA',
//         name: "Shoaib Ahmed",
//         roll: 123
//     })
// }
// ediFirebaseData()