let stack = document.querySelector(".stack");
let cards = Array.from(stack.children).reverse();

stack.addEventListener("click", swap);

function swap(e) {
  let card = e.target;
  if (!card.classList.contains("card")) return;

  card.style.animation = "swap 700ms forwards";

  setTimeout(() => {
    card.style.animation = "";
    stack.prepend(card);

    // Atualize a lista de cards
    cards.unshift(cards.pop());
  }, 700);
}
