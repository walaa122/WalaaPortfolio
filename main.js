






const Menu = document.getElementById("Menu");
const action = document.getElementById("actions");

Menu.addEventListener("click", ()=> {
    hundleMenu();
});
function hundleMenu() {
    Menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}



var arr = new Array(1,2,3);
var arr=[1,2,3];