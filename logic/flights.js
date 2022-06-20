function Flights() {
   function calculateNumberOfFlights() {
    if(passengers < 0) {
      return alert("The number of passengers must be a positive integer value");
    } else if (capacity < 0) {
      return alert("The capacity of the flight must be a positive integer number value");
    }
}
  function checkAircraftRevision(distanceLimit, distanceArray) {
    if(distance <= distanceLimit/2) {
      return "The revision needs to be done within the next 3 months";
    } else if(distance > distanceLimit/2 && distance <= (distanceLimit/4)*3) {
      return "The revision needs to be done within the next 2 months";
    } else if(distance > (distanceLimit/4)*3 && distance <= distanceLimit) {
      return "The revision needs to be done next month";
    } else if(distance > distanceLimit) {
      console.error("Too far");
    }
  }
  return {calculateNumberOfFlights, checkAircraftRevision};
}



module.export = Flights();
