const pannels = document.querySelectorAll(".pannel");


pannels.forEach(item=> {
item.addEventListener('click',() =>{
removeActiveClass();
item.classList.add("active");



});

});

function removeActiveClass(){

pannels.forEach(item => {

item.classList.remove('active');

});


}
