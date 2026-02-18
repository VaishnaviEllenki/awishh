function createBackgroundHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤";
    heart.className = "bg-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 10 + 14) + "px";
    heart.style.opacity = Math.random();

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, 600);
}

createBackgroundHearts();
