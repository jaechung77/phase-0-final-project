const toggleList = document.querySelector(".toggleList");
const destinations = document.querySelector(".destinations");
let country = document.querySelectorAll('input[name="country"');
const submit = document.querySelector("#submit");
let selected = false;

toggleList.addEventListener("click", function(){
    destinations.classList.toggle("active");
    
});


for (let i=0; i < country.length; i++){
    country[i].addEventListener("change", function(){
        selected= true;
        console.log("In the Loop: " + selected);
        //submit.classList.toggle("active"); 
    });
}
console.log("Outside of the Loop: " + selected);
if (selected){
     submit.classList.toggle("active");    
}  
