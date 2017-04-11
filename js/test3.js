
// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
  
     function sayHello (event) {
      this.textContent = "Display";
      var name =
       document.getElementById("number").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);



// document.querySelector("button")
//   .onclick = sayHello;

    
document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/m3.json", 
            function (request) {
              var number = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);


// document.querySelector("button")
//   .onclick = sayHello;
