import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from "./AxiosService.js";

class CarsService{

 
  constructor(){
    this.getCars();
  }

  async getCars() {
    try {
      const res = await api.get('cars')
      ProxyState.cars = res.data.map(rawCarData => new Car(rawCarData))
    } catch(err) {
      console.error(err)
    }
  }

  async createCar(rawCar) {
  //  let newCar = new Car(rawCar)
  //  console.log(newCar)
  //  ProxyState.cars = [...ProxyState.cars, newCar]

    // let temp = ProxyState.cars
    // temp.push(new Car(rawCar))
    // ProxyState.cars = temp
    console.log("raw car: ", rawCar)
    try {
      const res = await api.post('cars', rawCar)
      ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
    } catch (err) {
      console.error(err)
    }
  }

  bid(id) {
    let temp = ProxyState.cars
    let car = temp.find(c=> c.id === id)
    car.price += 100
    ProxyState.cars = temp
  }

  async deleteCar(id) {
    // let temp = ProxyState.cars
    // let carIndex = temp.findIndex(car =>  car.id == id)
    // temp.splice(carIndex, 1)
    // ProxyState.cars = temp
    try {
      await api.delete(`cars/${id}`)
      this.getCars()
    }catch(err){ 
      console.error(err)
    }

  }
  
}

export const carsService = new CarsService()