// Write your JavaScript code here!

window.addEventListener("load", function() { 

   function allFieldsEntered(values) {
      if(!values.pilotName || !values.copilotName || !values.fuelLevel || !values.cargoMass) {
         console.log(values);
         return false;
      }
      console.log(values);
      return true;
   }

   function textForNames(values) {
      if(typeof values.pilotName !== "string" || typeof values.copilotName !== "string") {
         return false;
      }
      if(!isNaN(Number(values.pilotName)) || !isNaN(Number(values.copilotName))) {
         return false;
      }
      return true;
   }

   function numbersForFuelAndCargo(values) {
      if(isNaN(Number(values.fuelLevel))) {
         return false;
      }
      console.log(Number(values.fuelLevel));
      return true;
   }

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let allValues = {
         pilotName: document.querySelector("input[name=pilotName]").value,
         copilotName: document.querySelector("input[name=copilotName]").value,
         fuelLevel: document.querySelector("input[name=fuelLevel]").value,
         cargoMass: document.querySelector("input[name=cargoMass]").value
      }
      if(!allFieldsEntered(allValues) || !textForNames(allValues))
      console.log(allFieldsEntered(allValues));
      console.log(textForNames(allValues));
      console.log(numbersForFuelAndCargo(allValues));
      event.preventDefault();
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
