function Passengers() {
  function checkFlightCapacity(flightCapacity, passengersArray) {
    let passengersNumber = passengersArray.length;
    if(passengersNumber < flightCapacity) {
      return passengersNumber;
    } else {
      console.error('Too many passengers');
    }
  }
  function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight) {
    return {
      vipPassengers: businessSeatsPerFlight,
      vipPassengers: economySeatsPerFlight,
      regularPassengers: businessSeatsPerFlight,
      regularPassengers: economySeatsPerFlight
    }
  }
  return {checkFlightCapacity};
}

module.exports = Passengers();
