function Vehicle(brand,model,speed,fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}
Vehicle.prototype.accelerate = function(){
    this.speed+=10;
    console.log("car speed is",this.speed)
}
Vehicle.prototype.brake = function(){
    this.speed-=5;
    console.log("car speed is",this.speed)
}
Vehicle.prototype.refuel = function(){
    console.log("Refueling")
}


function Car(brand,model,speed,fuelType,numberOfWheels){
    Vehicle.call(this,brand,model,speed,fuelType)
    this.numberOfWheels = numberOfWheels;
}
Car.prototype.honk = function(){
    console.log("Dont Honk")
}
Object.setPrototypeOf(Car.prototype,Vehicle.prototype)



function Airplain(brand,model,speed,fuelType,numberOfEngines,landingGear){
    Vehicle.call(this,brand,model,speed,fuelType)
    this.numberOfEngines = numberOfEngines;
    this.landingGear = landingGear;
}
Airplain.prototype.takeOff = function(){
    console.log(this.brand,"is taking off")
}
Object.setPrototypeOf(Airplain.prototype,Vehicle.prototype)







let car1 = new Car("tata",2020,0,"petrol",4)
console.log(car1)
car1.accelerate()
car1.refuel()
car1.brake()
car1.honk()

let airplain1 = new Airplain("Jet airways",2022,0,"Jet Fuel",2,2)
console.log(airplain1)
airplain1.refuel()
airplain1.takeOff()