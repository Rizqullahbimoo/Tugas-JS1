// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const usernameFeedback = document.getElementById("usernameFeedback");
  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");
  const confirmPasswordFeedback = document.getElementById("confirmPasswordFeedback");

  // Validasi username
  username.addEventListener("keyup", () => {
    const usernameRegex = /^[a-zA-Z0-9]{5,20}$/;
    if (!usernameRegex.test(username.value)) {
      usernameFeedback.textContent = "Username harus 5-20 karakter dan alfanumerik.";
    } else {
      usernameFeedback.textContent = "";
    }
  });

  // Validasi email
  email.addEventListener("change", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailFeedback.textContent = "Format email tidak valid.";
    } else {
      emailFeedback.textContent = "";
    }
  });

  // Validasi password
  password.addEventListener("keyup", () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password.value)) {
      passwordFeedback.textContent = "Password harus minimal 8 karakter dan mengandung huruf dan angka.";
    } else {
      passwordFeedback.textContent = "";
    }
  });

  // Konfirmasi kecocokan password
  confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value !== password.value) {
      confirmPasswordFeedback.textContent = "Password tidak cocok.";
    } else {
      confirmPasswordFeedback.textContent = "";
    }
  });

  // Validasi akhir saat submit formulir
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah pengiriman formulir default
    if (
      usernameFeedback.textContent === "" &&
      emailFeedback.textContent === "" &&
      passwordFeedback.textContent === "" &&
      confirmPasswordFeedback.textContent === ""
    ) {
      alert("Pendaftaran berhasil!");
      form.reset();
    } else {
      alert("Silakan perbaiki kesalahan pada formulir sebelum mendaftar.");
    }
  });
});
