// Student dataset
let students = [
    {
        name: "Arun",
        marks: 85
    },
    {
        name: "Priya",
        marks: 72
    },
    {
        name: "Rahul",
        marks: 45
    }
];

const studentContainer = document.getElementById("students");
const summaryText = document.getElementById("summaryText");


// Display students
const displayStudents = (studentList) => {

    studentContainer.innerHTML = "";

    studentList.map(student => {

        // Object destructuring
        const { name, marks } = student;

        const card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `
            <h3>${name}</h3>
            <p>Marks: ${marks}</p>
            <p>Status: ${marks >= 50 ? "Passed" : "Failed"}</p>
        `;

        studentContainer.appendChild(card);
    });
};


// Update summary using reduce()
const updateSummary = () => {

    const totalMarks = students.reduce(
        (total, student) => total + student.marks,
        0
    );

    const average = totalMarks / students.length;

    summaryText.textContent =
        `Total Students: ${students.length} | Average Marks: ${average.toFixed(2)}`;
};


// Add student using event listener
document.getElementById("addBtn").addEventListener("click", () => {

    const nameInput = document.getElementById("name");
    const marksInput = document.getElementById("marks");

    const name = nameInput.value.trim();
    const marks = Number(marksInput.value);

    if (name === "" || marks < 0 || marks > 100) {
        alert("Please enter a valid name and marks between 0 and 100.");
        return;
    }

    students.push({
        name,
        marks
    });

    nameInput.value = "";
    marksInput.value = "";

    displayStudents(students);
    updateSummary();
});


// Show all students
document.getElementById("allBtn").addEventListener("click", () => {

    displayStudents(students);
});


// filter() - show passed students
document.getElementById("passedBtn").addEventListener("click", () => {

    const passedStudents = students.filter(
        student => student.marks >= 50
    );

    displayStudents(passedStudents);
});


// Array destructuring
const [firstStudent, secondStudent] = students;

console.log("First Student:", firstStudent.name);
console.log("Second Student:", secondStudent.name);


// map() example
const studentNames = students.map(student => student.name);

console.log("Student Names:", studentNames);


// Initial display
displayStudents(students);
updateSummary();