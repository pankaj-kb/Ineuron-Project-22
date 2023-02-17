// Task 1 change text color

let mainTitle = document.querySelector("h1.title");

// console.log(mainTitle.textContent);

mainTitle.style.color = "#DC143C";

// Task 2 on hover effect

let cartButton = document.querySelector(".add-to-cart")

cartButton.addEventListener("mouseover", () => {

    cartButton.style.backgroundColor = "#DC143C"
    mainTitle.style.color = "#3C8067";


})

cartButton.addEventListener("mouseout", () => {
    cartButton.style.backgroundColor = "#3C8067";
    mainTitle.style.color = "#DC143C";

})