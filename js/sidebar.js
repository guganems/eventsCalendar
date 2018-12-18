isOpen = false;

function openNav() {
    isOpen = true;
    document.getElementById("mySidenav").style.width = "900px";
    document.getElementById("main").style.marginLeft = "900px";
    document.getElementById('openSidebar').style.display = 'none';
}
  
function closeNav() {
    isOpen = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById('openSidebar').style.display = 'block';
}

function toggleNav(){
    if (isOpen)
        closeNav();
    else
        openNav();
}