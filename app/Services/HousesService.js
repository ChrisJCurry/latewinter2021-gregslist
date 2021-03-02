import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    constructor() {
      this.getHouses()
    }

    async getHouses() {
      try {
        const res = await api.get('houses')
        ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
        console.log(ProxyState.houses)
      } catch (err) {
        console.log(err)
      }
    }
    

    async createHouse(newHouse) {
        //  let newCar = new Car(rawCar)
        //  console.log(newCar)
        //  ProxyState.cars = [...ProxyState.cars, newCar]
      
          // let temp = ProxyState.houses
          // temp.push(new House(newHouse))
          // ProxyState.houses = temp

          try {
            const res = await api.post('houses', newHouse)
            ProxyState.houses = [...ProxyState.houses, new House(res.data)]
          } catch(err) {
            console.error(err)
          }
      
    }

    async deleteHouse(id) {
    // let temp = ProxyState.houses
    // let houseIndex = temp.findIndex(houseIndex =>  houseIndex.id == id)
    // temp.splice(houseIndex, 1)
    // ProxyState.houses = temp

      try {
        await api.delete(`houses/${id}`)
        this.getHouses()
      }catch(err) {
        console.error(err)
      }
    }

    bid(id){
      let temp = ProxyState.houses;
      let houseIndex = temp.findIndex(house => house.id == id)
      console.log(temp)
      if(!temp[houseIndex]) {
        this.getHouses()
      }
      if(temp[houseIndex] != null) {
        temp[houseIndex].price += 1000
        ProxyState.houses = temp
      }
      
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