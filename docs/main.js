window.onload = function() {
  stateRetrieve ('btn');
  stateRetrieve ('btn2');
}


function changeClass(bttn) {
    var button = document.getElementById(bttn);
    if (button.className == "btn-empty") {
      button.className = "btn-occupied";
      console.log("Class changed to 'btn-occupied'!");

      button.innerHTML = "Occupied";
      console.log("Text changed to 'Occupied'!")

    } else if (button.className == "btn-occupied") {
      button.className = "btn-empty";
      button.innerHTML = "Free";
    }

    localStorage.setItem(bttn, button.innerHTML);
    console.log(bttn + " is saved in local storage.")
  };

function stateRetrieve (bttn) {
  if (typeof(Storage) !== "undefined") {
      // Retrieve
      var button = document.getElementById(bttn)
      button.innerHTML = localStorage.getItem(bttn);

      if (button.innerHTML == 'Occupied') {
        button.className = "btn-occupied";
      } else if (button.innerHTML == 'Free') {
        button.className = "btn-empty";
      }

      console.log("State is retrieved.");
      
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
