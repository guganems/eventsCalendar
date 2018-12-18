isOpen = false;

function openNav() {
    isOpen = true;
    document.getElementById("mySidenav").style.width = "900px";
    document.getElementById("calendar").style.display = "none";
}
  
function closeNav() {
    isOpen = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("calendar").style.display = "block";
}

function toggleNav(){
    if (isOpen)
        closeNav();
    else
        openNav();
}