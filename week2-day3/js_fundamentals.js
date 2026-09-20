// =========================================
// WEEK 2 - DAY 3
// JAVASCRIPT FUNDAMENTALS
// =========================================

// ---------- 1. Arrow Function ----------

const greetUser = (name) => {
    return `Hello, ${name}!`;
};

console.log(greetUser("Bhavya"));


// ---------- 2. Default Parameters ----------

const calculatePrice = (price, tax = 18) => {
    return price + (price * tax / 100);
};

console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 10));


// ---------- 3. Arrow Function with Arrays ----------

const numbers = [10, 20, 30, 40, 50];

const doubleNumbers = numbers.map((number) => number * 2);

console.log(doubleNumbers);


// ---------- 4. Array Filter ----------

const ages = [15, 18, 21, 25, 16, 30];

const adults = ages.filter((age) => age >= 18);

console.log(adults);


// ---------- 5. Array Reduce ----------

const marks = [80, 75, 90, 85, 70];

const totalMarks = marks.reduce(
    (total, mark) => total + mark,
    0
);

console.log(totalMarks);


// ---------- 6. Rest Operator ----------

const calculateTotal = (...prices) => {
    return prices.reduce(
        (total, price) => total + price,
        0
    );
};

console.log(calculateTotal(100, 200, 300));


// ---------- 7. Spread Operator ----------

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combinedArray = [...firstArray, ...secondArray];

console.log(combinedArray);


// ---------- 8. Object with Arrow Function ----------

const student = {
    name: "Bhavya",
    course: "Full Stack Development",
    year: 2026
};

const getStudentDetails = (student) => {
    return `${student.name} is studying ${student.course}.`;
};

console.log(getStudentDetails(student));


// ---------- 9. Spread Operator with Objects ----------

const updatedStudent = {
    ...student,
    year: 2027
};

console.log(updatedStudent);


// ---------- 10. Rest and Spread Together ----------

const findMaximum = (...numbers) => {
    return Math.max(...numbers);
};

console.log(findMaximum(10, 25, 5, 40, 15));


// =========================================
// PROMISE-BASED ASYNCHRONOUS FLOW
// =========================================

const getDataWithPromise = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            return response.json();
        })
        .then((data) => {
            console.log("Promise API Result:");
            console.log(data);
        })
        .catch((error) => {
            console.error("Promise Error:", error.message);
        });
};

getDataWithPromise();


// =========================================
// ASYNC / AWAIT WITH TRY / CATCH
// =========================================

const getPosts = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error("Unable to fetch posts");
        }

        const posts = await response.json();

        console.log("Async/Await API Result:");
        console.log(posts.slice(0, 5));
    } catch (error) {
        console.error("Async/Await Error:", error.message);
    }
};

getPosts();