/**
 * runs intro sequence
 */
function intro(){
  var i = 0;
  var title = document.getElementById("logo");
  var type = setInterval(function(){add("OurSpace", "logo")}, 150);

  title.addEventListener("mouseover", function(event){
      this.innerHTML = "Log In";
  });
  title.addEventListener("mouseout", function(event){
      this.innerHTML = "OurSpace";
  });
  title.addEventListener("click", function(event){
    document.getElementById('titlepage').style.display = 'none';
    document.getElementById('flexbox').style.display = 'flex';
  });
  function add(text, id){
      var element = document.getElementById(id);
      element.innerHTML += text[i];
      i++;
      if (i == text.length){
          clearInterval(type);
          element.style.border = "solid";
          element.style.backgroundColor = "#4d3c63"
      }
  }
}