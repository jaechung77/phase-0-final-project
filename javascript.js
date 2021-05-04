const toggleList = document.querySelector(".toggleList");
const countries = document.querySelector(".countries");
toggleList.addEventListener("click", function(){
    countries.classList.toggle("active");
});