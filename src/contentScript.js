// Checking page title
if (document.title.indexOf("Google Maps") != -1) {
    
    //Create image in div
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.classList = "oya4hc vxq1Hc";
    div.setAttribute("data-travel_mode", "7");
    div.setAttribute("jsaction", "toggleTravelMode;keydown:keydownTravelMode");
    div.onmouseover = function () {
        div.className = "oya4hc vxq1Hc FsvUe";
    };
    div.onmouseout = function () {
        div.classList = "oya4hc vxq1Hc";
    };

    var button = document.createElement("button");
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");
    button.setAttribute("jsaction", "click:toggleTravelMode");
    div.appendChild(button);

    var img = document.createElement("img");
    img.src = "https://i.imgur.com/v8kIHTR.png"
    img.className = "OzmNAc";
    img.style.width = "24px";
    img.style.height = "24px";
    img.setAttribute("data-tooltip", "Gay walk");
    button.appendChild(img);

    //Appending to DOM when class has loaded
    //check when class has loaded
    var checkExist = setInterval(function () {
        if (document.getElementsByClassName("FkdJRd vRIAEd dS8AEf").length) {
            console.log("Exists!");
            document.getElementsByClassName("FkdJRd vRIAEd dS8AEf")[0].appendChild(div);
            clearInterval(checkExist);
        }
    }, 100); // check every 100ms
}