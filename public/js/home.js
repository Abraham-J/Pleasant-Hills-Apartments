

function redirect(){
    var tenantCheck = document.getElementById("tenant");
    var prospCheck = document.getElementById("prospective");
    if(tenantCheck.checked){
        window.location.href = window.location.href + "actPortal";
    }
    if(prospCheck.checked){
        window.location.href = window.location.href + "apartment";
    }
}