// I learned how to do it at W3 Schools 
window.onscroll = function() {myFunction()}

let navbar = document.getElementById("topNav")

let sticky = navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }
}