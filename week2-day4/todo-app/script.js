// =========================================
// WEEK 2 - DAY 4
// DOM MANIPULATION
// Dynamic To-Do List
// =========================================


// ---------- DOM Elements ----------

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#empty-message");


// ---------- Load Tasks from localStorage ----------

let todos = JSON.parse(localStorage.getItem("todos")) || [];


// ---------- Display Tasks ----------

const displayTodos = () => {
    todoList.innerHTML = "";

    emptyMessage.style.display =
        todos.length === 0 ? "block" : "none";

    todos.forEach((todo) => {
        const listItem = document.createElement("li");

        listItem.classList.add("todo-item");

        if (todo.completed) {
            listItem.classList.add("completed");
        }

        listItem.dataset.id = todo.id;

        const todoText = document.createElement("span");

        todoText.classList.add("todo-text");
        todoText.textContent = todo.text;

        const deleteButton = document.createElement("button");

        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";

        listItem.appendChild(todoText);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
    });
};


// ---------- Save Tasks to localStorage ----------

const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};


// ---------- Add New Task ----------

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    todos.push(newTodo);

    saveTodos();
    displayTodos();

    todoInput.value = "";
    todoInput.focus();
});


// ---------- Event Delegation ----------

todoList.addEventListener("click", (event) => {

    const listItem = event.target.closest(".todo-item");

    if (!listItem) {
        return;
    }

    const todoId = Number(listItem.dataset.id);

    // Complete / uncomplete task
    if (event.target.classList.contains("todo-text")) {

        todos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }

            return todo;
        });

        saveTodos();
        displayTodos();
    }


    // Delete task
    if (event.target.classList.contains("delete-button")) {

        todos = todos.filter((todo) => todo.id !== todoId);

        saveTodos();
        displayTodos();
    }
});


// ---------- Display Saved Tasks on Page Load ----------

displayTodos();