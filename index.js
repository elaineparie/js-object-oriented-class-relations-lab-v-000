
let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }
  trips () {
		return store.trips.filter(trip => {return trip.driverId === this.id});
	}
  passengers () {
    return store.passengers.filter(passenger => {return passenger.tripId === this.tripId});
  }
}

let passengerId = 0
class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }
  trips () {
    return store.trips.filter(trip => {return trip.passengerId === this.id});
  }
  drivers () {
    return store.drivers.filter(driver => {return driver.tripId === this.tripId});
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    this.name = name
    if(driver){
     this.driverId = driver.id
   }
   if(passenger){
     this.passengerId = passenger.id
   }

    store.trips.push(this)
  }

	driver () {
		return store.drivers.find((driver) => {return this.driverId === driver.id});
	}

  passenger () {
  return store.passengers.find((passenger) => {return this.passengerId === passenger.id});
}

}
