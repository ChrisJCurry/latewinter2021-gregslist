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
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            levels: form.levels.value,
            price: parseInt(form.price.value),
            imgUrl: form.imgUrl.value,
            description: form.description.value,
            year: form.year.value,
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