document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.querySelector(".yes-button");
    const noButton = document.querySelector(".no-button");
  
    yesButton.addEventListener("click", function() {
      yesButton.classList.add("clicked");
    });
  
    noButton.addEventListener("mousemove", function() {
      let x = Math.floor(Math.random() * 251) - 180;
      let y = Math.floor(Math.random() * 225) - 180;
      noButton.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  