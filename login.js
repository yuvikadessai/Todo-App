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


document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();     

  const name = document.getElementById("name").value;
  const email_id = document.getElementById("email_id").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:8000/login/", {   // ⚡ add /
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email_id, password })
    });

    const data = await res.json();
    document.getElementById("message").textContent = data.message || "Login successful!";

    if (data.message.includes("Successfully")) {
      nextPage();
    }
  } catch (err) {
    document.getElementById("message").textContent = "Error logging in.";
    console.error(err);
  }
});

function nextPage() {
window.location.href = "todo2.html";
}