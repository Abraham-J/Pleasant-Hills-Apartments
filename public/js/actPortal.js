window.onload = function(){
    var submit = document.getElementById("request");
    if (submit){
        submit.addEventListener("submit", function redirect(event){
            event.preventDefault();
            console.log("submitted");
            window.location.href = "actPortal";
            alert("Submitted");
            return false;
        });
    }
}
