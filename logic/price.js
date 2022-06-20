function Prices() {
  function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType) {
    let finalPrice = basePrice;
    finalPrice *= 1 + variationPassengerType/100;
    finalPrice *= 1 + variationFlightType/100;
    return finalPrice.toFixed(2);
  }

  function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
    let finalPrice = basePrice;
    switch(passengerType.toUpperCase()) {
      case "REGULAR": finalPrice *= 0.95;
      break;
      case "VIP": finalPrice *= 1.05;
      break;
    }
    switch(flightType.toUpperCase()) {
      case "ECONOMY": finalPrice *= 0.97;
      break;
      case "BUSINESS": finalPrice *= 1.1;
      break;
    }
    return finalPrice.toFixed(2);
  }

  function calculateTotalFinalPrice(nrOfSeats, passengerType, flightType, basePrice) {
    let finalPrice = basePrice;
    return nrOfSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
  }

  return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();
