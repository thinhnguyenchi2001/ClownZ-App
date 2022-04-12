const searchIcon = document.getElementById("basketIcon");
const searchModal = document.getElementById("searchModal");
const headerDrop = document.getElementsByClassName("header__drop");
const headerHeight = headerDrop[0].offsetHeight;
const modelCover = document.getElementsByClassName("body__cover");
const closeSearch = document.getElementById("header__search-box-close");
var n = 0;

searchIcon.addEventListener("click", function () {
  n++;
  if (!searchModal.classList.contains("open")) {
    searchModal.classList.add("open");
    document.getElementsByClassName("header")[0].style.marginTop =
      headerHeight + "px";
    modelCover[0].style.display = "block";
  } else {
    searchModal.classList.remove("open");
    document.getElementsByClassName("header")[0].style.marginTop = "150px";
    modelCover[0].style.display = "none";
  }
});

modelCover[0].addEventListener("click", function () {
  searchModal.classList.remove("open");
  document.getElementsByClassName("header")[0].style.marginTop = "150px";
  modelCover[0].style.display = "none";
});

closeSearch.addEventListener("click", function () {
  searchModal.classList.remove("open");
  document.getElementsByClassName("header")[0].style.marginTop = "150px";
  modelCover[0].style.display = "none";
});

console.log(headerHeight);

const texts = document.querySelectorAll(".product__detail-description-text");
const titles = document.querySelectorAll(".product__detail-description-title");

titles.forEach((title, index) => {
  const text = texts[index];

  title.onclick = function () {
    document.querySelector(".product__detail-description-text.active").classList.remove("active");
    document.querySelector(".product__detail-description-title.active").classList.remove("active");

    this.classList.add("active");
    text.classList.add("active");
  };
});

const colors = document.querySelectorAll(".product__detail-info-color-item");

colors.forEach((color,index) => {
    color.onclick = function() {
        document.querySelector(".product__detail-info-color-item.active").classList.remove("active");
        this.classList.add("active");
    }
})

const sizes = document.querySelectorAll(".product__detail-info-kind-size");

sizes.forEach((size,index) => {
    size.onclick = function() {
        document.querySelector(".product__detail-info-kind-size.active").classList.remove("active");
        this.classList.add("active");
    }
})


const plus = document.querySelector(".product__detail-info-quantity-plus");
const number = document.querySelector(".product__detail-info-quantity-number");
const sub = document.querySelector(".product__detail-info-quantity-sub");

plus.onclick = function() {
    return number.textContent = Number(number.textContent) + 1;
}

sub.onclick = function() {
    if(Number(number.textContent) > 0) {
        return number.textContent = Number(number.textContent) - 1;
    }
    else {
        return 0;
    }
}

const imgMains = document.querySelectorAll(".product__detail-img-center");
const imgs = document.querySelectorAll(".product__detail-img-more-item");

imgs.forEach((img, index) => {
    const imgMain = imgMains[index];
  
    img.onclick = function () {
      document.querySelector(".product__detail-img-center.active").classList.remove("active");
      document.querySelector(".product__detail-img-more-item.active").classList.remove("active");
  
      this.classList.add("active");
      imgMain.classList.add("active");
    };
  });
 