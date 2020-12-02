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
         //event.preventDefault();
      } 

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      pilotStatus.innerHTML = `Pilot ${allValues.pilotName} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${allValues.copilotName} is ready for launch`;
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
         
      if(Number(allValues.fuelLevel) < 10000) {
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
         faultyItems.style.visibility = "visible";
         //event.preventDefault();
      } else if(Number(allValues.cargoMass) > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red"
            document.getElementById("cargoStatus").innerHTML = "Too much mass for takeoff";
            faultyItems.style.visibility = "visible";
            //event.preventDefault();
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green";
         //event.preventDefault();
      }
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
