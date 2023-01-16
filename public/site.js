function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Replace this with your own validation logic
    if (username === "admin" && password === "password") {
      alert("Successful login!");
      // Redirect to the job portal dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
  