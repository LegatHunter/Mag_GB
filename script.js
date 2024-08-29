const menuActive = document.querySelector(".menu__burger");
const burger = document.querySelector(".menu");
const menuClose = document.querySelector(".x");

let expanded1 = false;
let expanded2 = false;
let expanded3 = false;

function toggleMenu() {
  menuActive.classList.toggle("hidden__menu");
}
burger.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

function showCheckboxes1() {
  const checkboxes1 = document.querySelector(".chois__trending_checkboxes");
  if (!expanded1) {
    checkboxes1.style.display = "block";
    expanded1 = true;
  } else {
    checkboxes1.style.display = "none";
    expanded1 = false;
  }
}

function showCheckboxes2() {
  const checkboxes2 = document.querySelector(".chois__size_checkboxes");
  if (!expanded2) {
    checkboxes2.style.display = "block";
    expanded2 = true;
  } else {
    checkboxes2.style.display = "none";
    expanded2 = false;
  }
}

function showCheckboxes3() {
  const checkboxes3 = document.querySelector(".chois__price_checkboxes");
  if (!expanded3) {
    checkboxes3.style.display = "block";
    expanded3 = true;
  } else {
    checkboxes3.style.display = "none";
    expanded3 = false;
  }
}

const url = "./json.json";

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await getData(url);
  const list = document.querySelector(".grid__product");
  const findCartItem = document.querySelector(".subscribe");

  data.forEach((e) => {
    list.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card${e.count} cards">
        <img src="${e.img}" alt="" />
        <div class="card${e.count}__text pad">
          <h6>${e.tittle}</h6>
          <p class="card__info">${e.desc}</p>
          <p class="card__price">$${e.price}</p>
          <div class="card__hover">
            <div class="card__hover__button">
              <button class="btn__card btn__card_${e.count}">
                <svg width="32" height="29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.2 29a2.477 2.477 0 1 1 .201 0h-.2ZM6.754 26.32a2.68 2.68 0 1 1 5.364 0 2.68 2.68 0 0 1-5.366 0h.002Zm3.8-5.634a1.184 1.184 0 0 1-1.145-.867L4.575 2.364H1.182a1.182 1.182 0 0 1 0-2.364h4.281a1.183 1.183 0 0 1 1.144.868l4.833 17.455h13.178L29 8.275h-14.6a1.183 1.183 0 1 1 0-2.365h16.413a1.178 1.178 0 0 1 .986.533 1.191 1.191 0 0 1 .1 1.122l-5.405 12.412a1.185 1.185 0 0 1-1.084.709H10.553Z" fill="#E8E8E8"/>
                </svg>
                Add to&nbsp;Cart
              </button>
            </div>
          </div>
        </div>
      </div>`
    );

    const btnCart = document.querySelector(`.btn__card_${e.count}`);

    btnCart.addEventListener("click", () => {
      if (!document.querySelector(".cart-item-tittle")) {
        findCartItem.insertAdjacentHTML(
          "beforebegin",
          `
          <section class="cart-items container">
              <h5 class="cart-item-tittle">Cart Items</h5>
              <div class="cart cart-index"></div>
          </section>`
        );
      }
      const cart = document.querySelector(".cart");
      const productId = `cart__product_${e.count}_${Date.now()}`;
      cart.insertAdjacentHTML(
        "beforeend",
        `
        <div class="cart__product" id="${productId}">
          <div class="cart__product_i">
            <img class="cart__product_img" src="${e.img}" alt="${e.tittle}" />
            <div class="cart__product_text">
              <div class="cart__product_inf">
                <h2>${e.tittle}<br /></h2>
                <h4>Price: <span class="cart__span_red">$${e.price}</span></h4>
                <h4>Color: <span class="cart__span">Red</span></h4>
                <h4>Size: <span class="cart__span">Xl</span></h4>
                <div class="quantity">
                  <h4>Quantity:</h4>
                  <h4>1</h4>
                </div>
              </div>
              <div class="cart__product_close">
                <button class="cart__product_closebtn" data-product-id="${productId}">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
</svg>
                </button>
              </div>
            </div>
          </div>
        </div>`
      );
    });
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest(".cart__product_closebtn")) {
      const productId = event.target.closest(".cart__product_closebtn").dataset
        .productId;
      const productElement = document.getElementById(productId);
      if (productElement) {
        productElement.remove();
        const remainingProducts = document.querySelectorAll(".cart__product");
        if (remainingProducts.length === 0) {
          const cartSection = document.querySelector(".cart-items.container");
          if (cartSection) {
            cartSection.remove();
          }
        }
      }
    }
  });
});
