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




const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email_id = document.getElementById('email_id').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;

    fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"   // ✅ fixed
        },
        body: JSON.stringify({ name, email_id, password, confirm_password })
    })
    .then(res => res.json())   // ✅ fixed
    .then(data => {
        message.textContent = data.message;
        form.reset();
    })
    .catch(err => {
        message.textContent = "Error: " + err;
    });
});

function nextPage(){
    window.location.href = "todo2.html";
}