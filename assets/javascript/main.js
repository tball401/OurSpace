var i = 0;
var test = setTimeout(function(){var type = setInterval(function(){add("OurSpace", "logo")}, 150)}, 5000);
var title = document.getElementById("logo");

title.addEventListener("mouseover", function(event){
    this.innerHTML = "Log In";
});

title.addEventListener("mouseout", function(event){
    this.innerHTML = "OurSpace";
});

function add(text, id){
    var element = document.getElementById(id);
    element.innerHTML += text[i];
    i++;
    if (i == text.length){
        clearInterval(type);
        element.style.border = "solid";
    }
}


function changeText(text, id){
    var element = document.getElementById(id);
    element.innerHTML = "Log In";
}
