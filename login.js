document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();     

    const name = document.getElementById("name").value;
    const email_id = document.getElementById("email_id").value;
    const password = document.getElementById("password").value;

    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email_id, password })  // ✅ ok
      });

      const data = await res.json();
      document.getElementById("message").textContent = data.message || "Login successful!";
    } catch (err) {
      document.getElementById("message").textContent = "Error logging in.";
      console.error(err);
    }
});
