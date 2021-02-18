import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HousesService {
    constructor() {
    }

    createHouse(newHouse) {
        //  let newCar = new Car(rawCar)
        //  console.log(newCar)
        //  ProxyState.cars = [...ProxyState.cars, newCar]
      
          let temp = ProxyState.houses
          temp.push(new House(newHouse))
          ProxyState.houses = temp
      
    }

    deleteHouse(id) {
    let temp = ProxyState.houses
    let houseIndex = temp.findIndex(houseIndex =>  houseIndex.id == id)
    temp.splice(houseIndex, 1)
    ProxyState.houses = temp
    }

    bid(id){
      let temp = ProxyState.houses;
      let houseIndex = temp.findIndex(house => house.id == id)
      temp[houseIndex].bids += 1
      temp[houseIndex].price += 1000
      ProxyState.houses = temp
    }

    toggleView(id) {
      if(id.innerText == "Cars") {
        let ids = document.getElementsByClassName("cars-text-hide")
        for(let i = 0; i < ids.length; i++) {
          ids[i].classList.toggle("hidden")
        }
      } else if(id.innerText == "Houses") {
        let ids = document.getElementsByClassName("houses-text-hide")
        for(let i = 0; i < ids.length; i++) {
          ids[i].classList.toggle("hidden")
        }
      } else if(id.innerText == "Jobs") {
        let ids = document.getElementsByClassName("jobs-text-hide")
        for(let i = 0; i < ids.length; i++) {
          ids[i].classList.toggle("hidden")
        }
      }
    }
}

export const housesService = new HousesService()