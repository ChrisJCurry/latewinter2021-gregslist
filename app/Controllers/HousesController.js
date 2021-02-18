import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _draw() {
    let homes = ProxyState.houses;
    let template = ""

    homes.forEach(home => template += home.Template)
    document.getElementById("houses").innerHTML = template;
}

export default class HousesController {
    constructor() {
        _draw();
        ProxyState.on("houses", _draw)
    }

    createHouse(event) {
        event.preventDefault();
        let form = event.target;

        let newHouse = {
            forSaleDate: form.forSaleDate.value,
            sqFt: form.sqFt.value,
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            price: parseInt(form.price.value),
            imgUrl: form.imgUrl.value,
            color: form.color.value,
            garages: form.garages.value,
            bids: 0
        }

        housesService.createHouse(newHouse);
    }

    deleteHouse(id) {
        housesService.deleteHouse(id)
    }

    bid(id){
        housesService.bid(id)
    }

    toggleView(id) {
        housesService.toggleView(id)
    }

}