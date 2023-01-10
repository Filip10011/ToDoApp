const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector("todo-list");
const completed = document.querySelector(".completed");
const uncompleted = document.querySelector(".uncompleted");
const all = document.querySelector(".allOption");

const allTodos = [];

const addToDo = (e) => {
  e.preventDefault();

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
};

todoButton.addEventListener("click", addToDo);
