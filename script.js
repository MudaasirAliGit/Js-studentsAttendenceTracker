// Task # 1
// Problem: Student Attendance Tracker
// Write a JavaScript program to track student attendance in a class using an array. The program should:

// Ask the user (teacher) to enter the number of students in the class.
// Use a for loop to prompt the teacher to enter the student's name and whether the student is "Present" or "Absent".
// Store the names of absent students in an array.
// At the end, display a message showing how many students are present and the names of the absent students.
// Requirements:
// Use an array to store student names.
// Use a for loop to get attendance for each student.
// Use if-else statements to check whether a student is present or absent.
// Use nested if statements to ensure valid input (e.g., "Present" or "Absent" only).

let numberOfStudents = +prompt("Enter the number of students in the class:");
if(!isNaN(numberOfStudents)){
    let names = [];
    let attendence = [];
    for(let i = 1; i <= numberOfStudents; i++){
        names.push(prompt(`Enter the name of student ${i}`));
    }
    for(let i = 0; i < names.length; i++){
        attendence.push(prompt(`Is ${names[i]} is present in the class?`,`Present or Absent`));
    }
    let presentStudents = 0;
    let absentStudentsName = [];
    for(let i = 0; i < attendence.length; i++){
        if(attendence[i].toLocaleLowerCase() === "present"){
            ++presentStudents;
        }
        else{
            absentStudentsName.push(names[i]);
        }
    }
    alert(`Number of students present in the class: ${presentStudents}\n${(numberOfStudents>0)?`Absent Students Name: ${absentStudentsName}`:``}`);
}
else{
    alert("Invalid Input!");
}