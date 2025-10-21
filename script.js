const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  li.innerHTML = `<span>${taskText}</span>
    <div>
      <button class="btn btn-sm btn-warning edit"><i class="bi bi-pencil-square"></i></button>
      <button class="btn btn-sm btn-danger delete"><i class="bi bi-trash"></i></button>
      <button class="btn btn-sm btn-success done"><i class="bi bi-check-circle"></i></button>
    </div>`;

  taskList.appendChild(li);
  taskInput.value = "";

  const editBtn = li.getElementsByClassName("edit")[0];
  const deleteBtn = li.getElementsByClassName("delete")[0];
  const doneBtn = li.getElementsByClassName("done")[0];
  const span = li.getElementsByTagName("span")[0];

  // Delete Task
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Done 
  doneBtn.addEventListener("click", function () {
    span.classList.toggle("done");
  });

  // Edit Task
  editBtn.addEventListener("click", function () {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask) span.textContent = newTask;
  });
}