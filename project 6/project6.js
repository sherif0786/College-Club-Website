document.addEventListener("DOMContentLoaded", () => {
  // Active nav highlight
  const path = location.pathname.split("/").pop();
  document.querySelectorAll("#navbarNav a").forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });

  // Back to top button
  const backToTop = document.createElement("button");
  backToTop.innerText = "↑";
  backToTop.id = "backToTop";
  backToTop.className = "btn neon-btn position-fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.display = "none";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
