setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤";
  heart.className = "bg-heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 800);
