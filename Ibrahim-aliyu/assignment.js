
//DATA TYPES
// String: 'Ibrahim Aliyu'
// Integer: 12 -2
// Float: 23.4 0.9 -3.0
// Boolean: True/false
// Array: ['Hello', 1, True]
// Objects: {"array":"['Hello', 1, True]", "name": "Ibrahim", "age":13, "isMale":true}


// NAMING CONVENTION

// camelCase for variables and function
// example: ibrahimAliyu = 'Ibrahim Aliyu'
// you cant start naming a variable with an integer 
// example: 007jamesbond
//you cant use symbols in naming variables 
// example: _person 


//STRING METHODS

fullName = 'Ibrahim Aliyu'
console.log(fullName.lastIndexOf('i'))
console.log(fullName.length)
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.includes('z'))



//Array methods

arry = ['Ibrahim', 13, 'Nigerian', 'Developer']

console.log(arry.length)
console.log(arry.at(2))
console.log(arry.includes('Ibrahim'))
console.log(arry.push('Male'))
console.log(arry.pop())
console.log(arry)



const students = [
    {
        name: "Ibrahim Aliyu",
        age: 15,
        class: "Jss Three",
        subjects: [
            {name: "Mathematics", CA: 20, Exam: 50},
            {name: "English Language", CA: 25, Exam: 60},
            {name: "Social Studies", CA: 10, Exam: 60},
            {name: "Basic Science", CA: 10, Exam: 25},
            {name: "Agricultural Science", CA: 45, Exam: 80}
        ]
    },
    {
        name: "Maiwada Joshua",
        age: 12,
        class: "Jss Two",
        subjects: [
            {name: "Mathematics", CA: 20, Exam: 70},
            {name: "English Language", CA: 30, Exam: 66},
            {name: "Spcial Studies", CA: 10, Exam: 40},
            {name: "Basic Science", CA: 20, Exam: 35},
            {name: "Agricultural Science", CA: 25, Exam: 33}
        ]
    },
    {
        name: "Rashida Jamiu",
        age: 15,
        class: "Jss Three",
        subjects: [
            {name: "Mathematics", CA: 30, Exam: 10},
            {name: "English Language", CA: 25, Exam: 30},
            {name: "Social Studies", CA: 20, Exam: 60},
            {name: "Basic Science", CA: 0, Exam: 25},
            {name: "Agricultural Science", CA: 5, Exam:14}
        ]
    }
];
const spaces = '------'
const Mathematics = students.at(0).subjects.at(0).CA + students.at(0).subjects.at(0).Exam
console.log(Mathematics)
console.log((students.at(0).name).concat(spaces).concat(students.at(0).age).concat(spaces).concat(students.at(0).class.concat(spaces)).concat(Mathematics))

