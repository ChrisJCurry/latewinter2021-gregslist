import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Value from "./Models/Value.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
  cars = [new Car({make: "Jeep", model: "Wrangler", price: 20, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its nice", miles: 75000}), new Car({make: "Jeep", model: "Rango", price: 1500, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its very nice", miles: 5000})]

  /**@type {House[]} */
  houses = [new House({forSaleDate: 2001, sqFt: 1500, bedrooms: 3, bathrooms: 2, price: 100000, imgUrl: 'https://media4.s-nbcnews.com/j/newscms/2020_33/1599433/pie-house-mc-main1-2008118_2616dcf6f8dc78ccf897abfedbc3c668.fit-1240w.jpg', color: "tan", garages: 2, bids: 0})]

  jobs = [new Job({title: "Programmer", salary: 75000, remote: true, hours: 40, travel: false, weeksTrainedReqd: 3, interests: 0})]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
