
let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }
}

let passengerId = 0
class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }
}

let tripId = 0
class Trip {
  constructor(name, driver, passenger){
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
setPassenger(passenger){
  this.passengerId = passenger.id
}
}
