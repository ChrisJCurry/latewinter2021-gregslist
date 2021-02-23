import {generateId} from "../Utils/GenerateId.js";

export default class House {
    constructor({bedrooms=3, bathrooms=2, levels=1, price=100000, imgUrl='https://via.placeholder.com/150', description = "default", year="2000", _id, id}) {
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.levels = levels;
        this.price = price;
        this.imgUrl = imgUrl;
        this.description = description;
        this.year = year;
        this.id = _id || id;
    }

    get Template() {
        return /*html*/`<div class="card houses-text-hide col-12 col-sm-6 col-md-3 mx-4 my-2">
            <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer py-1" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body bg-danger">                
                <h2 class="card-title">$${this.price} ${this.bedrooms} bed, ${this.bathrooms} bath, ${this.levels} levels</h2>
                <h2 class="card-text">${this.description}</h2>
                <div class="row text-right">
                    <div class="col d-flex align-self-end">
                        <h3 class="d-flex text-left pt-3">Current bids:</h3>
                        <button class="btn btn-lg btn-dark text-light font-weight-bold ml-auto" onclick="app.housesController.bid('${this.id}')">Bid</button>
                    </div>
                </div>
            </div>
        </div>`
    }
}