function Util() {
  function calculateTotalDistributedPassengers(distributedPassengers) {
let totalDistributedPassengers = 0;
let value;
for (value in distributedPassengers) {
  totalDistributedPassengers += distributedPassengers[value];
}
return totalDistributedPassengers;
  }
  function calculateTotalNumberOfPassengers(passengersArray) {
    let totalNumberOfPassengers = 0;
    let passengers;
    for (passengers in passengersArray) {
      totalNumberOfPassengers += passengersArray[passengers];
    }
    return totalNumberOfPassengers;
  }
  return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}

module.exports = Util();
