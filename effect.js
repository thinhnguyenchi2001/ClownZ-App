const searchIcon = document.getElementById('basketIcon');
const searchModal = document.getElementById('searchModal');
const headerDrop = document.getElementsByClassName('header__drop');
const headerHeight = headerDrop[0].offsetHeight;
const modelCover = document.getElementsByClassName('body__cover');
const closeSearch = document.getElementById('header__search-box-close');
var n = 0;

searchIcon.addEventListener("click", function() {
    n++;
    if(!searchModal.classList.contains('open')) {
        searchModal.classList.add('open');
        document.getElementsByClassName('header')[0].style.marginTop = headerHeight +"px" ;
        modelCover[0].style.display = "block"
    } else {
        searchModal.classList.remove('open');
       document.getElementsByClassName('header')[0].style.marginTop = "150px"
        modelCover[0].style.display = "none"
    }
})

modelCover[0].addEventListener("click", function() {
    searchModal.classList.remove('open');
    document.getElementsByClassName('header')[0].style.marginTop = "150px"
    modelCover[0].style.display = "none";
})

closeSearch.addEventListener("click", function() {
    searchModal.classList.remove('open');
    document.getElementsByClassName('header')[0].style.marginTop = "150px"
    modelCover[0].style.display = "none";
})

console.log(headerHeight)