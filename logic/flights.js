function Flights() {
  calculateNumberOfFlights() {
    if(passengers < 0) {
      return alert("The number of passengers must be a positive integer value");
    } else if (capacity < 0) {
      return alert("The capacity of the flight must be a positive integer number value");
    }
  }
  return {calculateNumberOfFlights}
}

module.export = Flights();
