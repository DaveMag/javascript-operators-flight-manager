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
    for (passengers of passengersArray) {
      totalNumberOfPassengers += passengers;
    }
    return totalNumberOfPassengers;
  }

  function checkInput(input) {
    if(!input) {
      throw new Error("There is no input");
    }
    if(!Number(input)) {
      throw new Error("Make sure the input is a number");
    }
  }

  function calculateTotalDistance(distancesArray) {
    let totalDistances = 0;
    for(distances of distancesArray) {
      if(distances < 0){
        continue;
      }
      totalDistances += distances;
    }
    return totalDistances;
  }

  function calculateBonusPoints(distanceBusinessSeatsArray, distanceEconomySeatsArray, businessBonusPercentage, economyBonusPercentage) {
    let businessPoints = calculateTotalDistance(distanceBusinessSeatsArray);
    let economyPoints = calculateTotalDistance(distanceEconomySeatsArray);
    let points = (businessBonusPercentage * businessPoints)/100 + (economyPoints * economyBonusPercentage)/100;
    return points;
  }
  return{calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();
