// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // stop the click from reaching window
  sidebar.style.width = "250px";
});

// Close sidebar if clicked outside
window.addEventListener("click", (e) => {
  if (sidebar.style.width === "250px" && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.style.width = "0";
  }
});

// To-Do App Logic
const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">❌</button>
  `;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".deleteBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
