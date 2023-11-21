let myPhoto = document.querySelector(".image img");
function photo(phone) {
    myPhoto.src = phone;
}

let myFooterImg = document.querySelectorAll(".fotoer img");
let myContainer = document.querySelector(".container");

// Change font Color 
let myImageTwo = document.querySelector("[alt='image Two']");
let myli = document.querySelectorAll("ul li a");
let myh2 = document.querySelector("h2");
let myp = document.querySelector("p");
let mya = document.querySelector(".info a");


myFooterImg.forEach((el) => {
    el.addEventListener("click", function (ele) {

        window.sessionStorage.setItem("backgroundColor", ele.currentTarget.dataset.color);
        // remove All class 
        myFooterImg.forEach((e) => {
            e.classList.remove("active");
        });

        // Add class active
        ele.currentTarget.classList.add("active");

        window.sessionStorage.setItem("class", `${el.classList.value}`);

        window.sessionStorage.setItem("add", ele.currentTarget.alt);
        // Add Color in the Container
        myContainer.style.backgroundColor = ele.currentTarget.dataset.color;

        let myPhoto = this.src;
        window.sessionStorage.setItem("sourc", myPhoto);
        photo(window.sessionStorage.getItem("sourc"));

        // change font color 
        if (el === myImageTwo) {
            myli.forEach((e) => e.style.color = "#000");
            myh2.style.color = "#000";
            myp.style.color = "#000";
            mya.style.color = "#000";
            mya.style.borderColor = "#000";
        } else {
            myli.forEach((e) => e.style.color = "#fff");
            myh2.style.color = "#fff";
            myp.style.color = "#fff";
            mya.style.color = "#fff";
            mya.style.borderColor = "#fff";
        }
    })
});

if (window.sessionStorage.getItem("backgroundColor")) {
    myContainer.style.backgroundColor = window.sessionStorage.getItem("backgroundColor");
}

if (window.sessionStorage.getItem("add")) {
    let element = (document.querySelector(`[alt="${window.sessionStorage.getItem("add")}"]`));
    element.classList = window.sessionStorage.getItem("class");
}

if (window.sessionStorage.getItem("sourc")) {
    photo(window.sessionStorage.getItem("sourc"));
}

if (window.sessionStorage.getItem("add") === "image Two") {
    console.log("is IMage Two");
    myli.forEach((e) => e.style.color = "#000");
    myh2.style.color = "#000";
    myp.style.color = "#000";
    mya.style.color = "#000";
    mya.style.borderColor = "#000";
}

