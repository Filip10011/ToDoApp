const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const completed = document.querySelector(".completed");
const uncompleted = document.querySelector(".uncompleted");
const all = document.querySelector(".allOption");

const allTodos = [];

const addToDo = (e) => {
  e.preventDefault();
  if (todoInput.value.length <= 4) {
    return;
  }

  const todoDivEl = document.createElement("div");
  todoDivEl.classList.add("todo");

  const liEl = document.createElement("li");
  liEl.innerHTML = todoInput.value;

  allTodos.push(todoInput.value);

  liEl.classList.add("todo-item");
  todoDivEl.appendChild(liEl);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDivEl.appendChild(completedButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteButton.classList.add("trash-btn");
  todoDivEl.appendChild(deleteButton);

  todoList.appendChild(todoDivEl);
  todoInput.value = "";
};

const deleteToDo = (e) => {
  const element = e.target;

  if (element.classList[0] === "trash-btn") {
    const todo = element.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }
  if (element.classList[0] === "complete-btn") {
    const todo = element.parentElement;
    todo.classList.toggle("completed");
  }
};

const filterTodo = (event) => {
  const todos = todoList.childNodes;

  todos.forEach((todo) => {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteToDo);
completed.addEventListener("click", filterTodo);
uncompleted.addEventListener("click", filterTodo);
all.addEventListener("click", filterTodo);
