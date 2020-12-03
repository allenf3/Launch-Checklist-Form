// Write your JavaScript code here!

window.addEventListener("load", function() { 

   function allFieldsEntered(values) {
      if(!values.pilotName || !values.copilotName || !values.fuelLevel || !values.cargoMass) {
         window.alert("All fields are required");
         return false;
      }
      return true;
   }

   function textForNames(values) {
      if(typeof values.pilotName !== "string" || typeof values.copilotName !== "string") {
         window.alert("Names must be text");
         return false;
      }
      if(!isNaN(Number(values.pilotName)) || !isNaN(Number(values.copilotName))) {
         window.alert("Names must be text");
         return false;
      }
      return true;
   }

   function numbersForFuelAndCargo(values) {
      if(isNaN(Number(values.fuelLevel)) || isNaN(Number(values.cargoMass))) {
         window.alert("Fuel and cargo must be numbers");
         return false;
      }
      return true;
   }

   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let allValues = {
         pilotName: document.querySelector("input[name=pilotName]").value,
         copilotName: document.querySelector("input[name=copilotName]").value,
         fuelLevel: document.querySelector("input[name=fuelLevel]").value,
         cargoMass: document.querySelector("input[name=cargoMass]").value
      }
      if(!allFieldsEntered(allValues) || !textForNames(allValues) || !numbersForFuelAndCargo(allValues)) {
      } 

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      pilotStatus.innerHTML = `Pilot ${allValues.pilotName} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${allValues.copilotName} is ready for launch`;
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");

      function setRed() {
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
      }
         
      if(Number(allValues.fuelLevel) < 10000) {
         setRed();
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
         faultyItems.style.visibility = "visible";
      } else if(Number(allValues.cargoMass) > 10000) {
         setRed();
         document.getElementById("cargoStatus").innerHTML = "Too much mass for takeoff";
         faultyItems.style.visibility = "visible";
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch"
         faultyItems.style.visibility = "hidden";
         launchStatus.style.color = "green";
      }
   });


   
   
   /* This block of code shows how to format the HTML once you fetch some planetary JSON!
   
   */
  
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
     response.json().then(function(data) {
         let target = document.getElementById("missionTarget");
         let targetChosen = Math.floor(Math.random()*data.length);
         target.innerHTML = `
             <h2>Mission Destination</h2>
              <ol>
                  <li>Name: ${data[targetChosen].name}</li>
                  <li>Diameter: ${data[targetChosen].diameter}</li>
                  <li>Star: ${data[targetChosen].star}</li>
                  <li>Distance from Earth: ${data[targetChosen].distance}</li>
                  <li>Number of Moons: ${data[targetChosen].moons}</li>
                  <img src="${data[targetChosen].image}">

               </ol>
            `
     });
  });
  

});