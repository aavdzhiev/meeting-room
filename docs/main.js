console.log("Танита пръцка!");
function changeClass(btn) {
    var button = document.getElementById(btn);
    if (button.className == "btn-empty") {
      button.className = "btn-occupied";
      console.log("Occupied class works!)");
      button.innerHTML = "Occupied"
    } else {
      button.className = "btn-empty";
      button.innerHTML = "Free"
    }
  };
