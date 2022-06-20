function Passengers() {
  function checkFlightCapacity(flightCapacity, passengersArray) {
    let passengersNumber = 0;
    for(let passengers = 0; passengers < passengersArray.length; passengers++) {
      passengersNumber += passengers;
    }
    if(passengersNumber > flightCapacity) {
      throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers.")
    }
    return passengersNumber;
  }

  function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight) {
    let vipPassengersWithBusinessSeats = 0;
    let vipPassengersWithEconomySeats = 0;
    let regularPassengersWithBusinessSeats = 0;
    let regularPassengersWithEconomySeats = 0;
    let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
    let availableEconomySeats = nrOfFlights * economySeatsPerFlight;

    let vipBusinessConfiguration = {passengers: vipPassengers, seats: availableBusinessSeats};
    vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

    let vipEconomyConfiguration = {passengers: vipBusinessConfiguration.passengers, seats: availableEconomySeats};
    vipPassengersEconomyseats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

    let regularBusinessConfiguration = {passengers: regularPassengers, seats: vipBusinessConfiguration.seats};
    regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

    let regularEconomyConfiguration = {passengers: regularBusinessConfiguration, seats: vipEconomyConfiguration.seats};
    regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

    return {vipPassengersWithBusinessSeats: vipPassengersWithBusinessSeats, vipPassengersWithEconomySeats: vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats: regularPassengersWithBusinessSeats, regularPassengersWithEconomySeats: regularPassengersWithEconomySeats};
  }
  return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();
