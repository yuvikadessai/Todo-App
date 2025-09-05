// Sidebar toggle
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const main = document.querySelector("main");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  main.classList.toggle("shift");
});

// Page navigation
const links = document.querySelectorAll(".sidebar a[data-page]");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide all pages
    pages.forEach(page => page.classList.remove("active"));

    // Show the clicked one
    const target = link.getAttribute("data-page");
    document.getElementById(target).classList.add("active");

    // Close sidebar after click
    sidebar.classList.remove("open");
    main.classList.remove("shift");
  });
});

// Task management
const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const completedList = document.getElementById("completedList");

// Dashboard stats
const totalTasksEl = document.getElementById("totalTasks");
const pendingTasksEl = document.getElementById("pendingTasks");
const completedTasksEl = document.getElementById("completedTasks");

let tasks = [];

// Add new task
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const task = { id: Date.now(), text: taskText, completed: false };
  tasks.push(task);
  taskInput.value = "";

  renderTasks();
  updateStats();

  // Redirect to My Tasks
  pages.forEach(page => page.classList.remove("active"));
  document.getElementById("myTasks").classList.add("active");
});

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";
  completedList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    const btn = document.createElement("button");
    btn.textContent = task.completed ? "Undo" : "Complete";
    btn.addEventListener("click", () => toggleTask(task.id));

    li.appendChild(btn);

    if (task.completed) {
      completedList.appendChild(li);
    } else {
      taskList.appendChild(li);
    }
  });
}

// Toggle task complete/incomplete
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
  updateStats();
}

// Update dashboard stats
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  totalTasksEl.textContent = total;
  completedTasksEl.textContent = completed;
  pendingTasksEl.textContent = pending;
}

// Logout button (for now just clears everything)
document.getElementById("logoutBtn").addEventListener("click", () => {
  alert("You have been logged out!");
  // Redirect to login page if you have one
  window.location.href = "login.html";
});
