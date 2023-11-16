var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-content');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// --------------------------------for small screens---------------------------------

var menu =document.querySelector(".list-container")

function closemenu(){
    menu.style.right="-200px"
}

function openmenu(){
    menu.style.right="0";
}