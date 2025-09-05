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
