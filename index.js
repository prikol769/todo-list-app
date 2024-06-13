const addTodoBtn = document.getElementById("add-todo");

function handleAddTodo() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");

  const input = document.querySelector("input");

  if (input.value !== "") {
    li.textContent = input.value;

    ul.appendChild(li);
  }
}

addTodoBtn.addEventListener("click", handleAddTodo);
