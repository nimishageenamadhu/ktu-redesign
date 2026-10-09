/* LOGIN AND PAGE ACCESS */

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const loginMessage = document.getElementById("loginMessage");

  // If already logged in, open the homepage.
  if (sessionStorage.getItem("ktuLoggedIn") === "true") {
    window.location.replace("home.html");
  }

  togglePassword.addEventListener("click", () => {
    const hidden = passwordInput.type === "password";
    passwordInput.type = hidden ? "text" : "password";
    togglePassword.textContent = hidden ? "Hide" : "Show";
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username =
      document.getElementById("studentId").value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
      loginMessage.textContent =
        "Please enter your username and password.";
      return;
    }

    // DEMO ONLY: accepts any non-empty credentials.
    sessionStorage.setItem("ktuLoggedIn", "true");
    loginMessage.textContent = "Login successful!";

    window.location.href = "home.html";
  });

  document.getElementById("forgotPassword")
    .addEventListener("click", (event) => {
      event.preventDefault();
      loginMessage.textContent =
        "Password recovery is not available in this demo.";
    });
}

// Protect the other pages from casual navigation.
const protectedPages = [
  "home.html",
  "academics.html",
  "examinations.html",
  "results.html",
  "services.html"
];

const currentPage = window.location.pathname
  .split("/")
  .pop()
  .toLowerCase();

if (protectedPages.includes(currentPage) &&
    sessionStorage.getItem("ktuLoggedIn") !== "true") {
  window.location.replace("login.html");
}

// Logout button support.
const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem("ktuLoggedIn");
    window.location.replace("login.html");
  });
}
