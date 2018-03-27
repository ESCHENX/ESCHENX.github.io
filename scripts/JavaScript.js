function responsiveNav(){
    var rspNavBar = document.getElementById("rspNavBar");
    if (rspNavBar.className === "navbar"){
        rspNavBar.className += " responsive";
    } else {
        rspNavBar.className = "navbar";
    }
}