// Q1: Using comments, list all the data types you know with examples
// Integers: 1, 2, -1, -2
// Floats: 1.2, 2.1, -1.2, -2.1
// Arrays: [1, 2, 3, "a", []]
// Objects: {"name":"Aisha"}
// Strings; "This is a String"
// Boolean: true, false

// Q2: Read about variable naming convention in javascript and create examples of each
// myName = "Ayman Musa"
// myname = "Khadija Yahya"
// MYNAME = "Zayad Shuaibu"
// _myname = "Ibrahim Aliyu"


// Q3: List 5 String methods with an example using console.log in each case to print your result
// concat
console.log("my name is ".concat("Mustapha"))
// at
console.log("my name ".at(0))
// indexOf
console.log("my name ".indexOf("m"))
// lastIndexOf
console.log("my name ".lastIndexOf("m"))
// replace
console.log("my name is mustapha".replace("mustapha", "nasir"))


// Q4: List 5 Array methods with an example using console.log in each case to print your result
// at
console.log([1, 2].at(0))
// indexOf
console.log([1, 2].indexOf(1))
// lastIndexOf
console.log([1, 2].lastIndexOf(1))
// push
console.log([1, 2].push(1))
// sort
console.log([1, 2].sort())

// Q5: Create an an array with objects with the following information
//      Name, Age, Class, Subjects
//      each subject should have CA and Exam score
//      use console to print the following statement for at least two of the students.
//      NAME -----  AGE  ------  CLASS  ------ TOTAL
//      James ----- 10 --------  Jss One ----- 150.5
//      NOTE: there should be atleast 3 students and atleast 5 subjects each student.

students = [
    {
        name: "Aisha Mustapha",
        class: "Jss One",
        age: 15,
        subjects: [
            {
                name: "Integrated Science",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Music",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Agric Science",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Basic Science",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Civic",
                ca: 10.5,
                exam: 25.6
            }
        ],
    },
    {
        name: "Mansur Mustapha",
        class: "Jss One",
        age: 15,
        subjects: [
            {
                name: "Integrated Science",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Music",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Agric Science",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Basic Science",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Civic",
                ca: 10.5,
                exam: 25.6
            }
        ],
    },
    {
        name: "Bilkis Mustapha",
        class: "Jss One",
        age: 15,
        subjects: [
            {
                name: "Integrated Science",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Music",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Agric Science",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Basic Science",
                ca: 10.5,
                exam: 25.6
            },
            {
                name: "Civic",
                ca: 10.5,
                exam: 25.6
            }
        ],
    }
]

console.log("NAME -----  AGE  ------  CLASS  ------ TOTAL")
console.log(students.at(0).name.concat(" ----- ").concat(students.at(0).age).concat(" -------- ").concat(students.at(0).class).concat("-----").concat(students.at(0).subjects.at(0).ca+students.at(0).subjects.at(0).exam))
console.log(students.at(1).name.concat(" ----- ").concat(students.at(1).age).concat(" -------- ").concat(students.at(1).class).concat("-----").concat(students.at(1).subjects.at(1).ca+students.at(1).subjects.at(1).exam))
console.log(students.at(2).name.concat(" ----- ").concat(students.at(2).age).concat(" -------- ").concat(students.at(2).class).concat("-----").concat(students.at(2).subjects.at(2).ca+students.at(2).subjects.at(2).exam))