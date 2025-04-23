document.addEventListener("DOMContentLoaded", () => {
    // Load dark mode preference
    const darkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark", darkMode);
    document.getElementById("darkModeToggle").checked = darkMode;
  
    // Animate button on click
    const btn = document.getElementById("animateBtn");
    btn.addEventListener("click", () => {
      btn.classList.remove("animate"); // Reset animation
      void btn.offsetWidth; // Force reflow
      btn.classList.add("animate"); // Trigger animation
    });
  });
  
  // Save dark mode toggle
  document.getElementById("darkModeToggle").addEventListener("change", function () {
    const isDark = this.checked;
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("darkMode", isDark);
  });
  