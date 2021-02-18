import {generateId} from "../Utils/GenerateId.js";

export default class House {
    constructor({forSaleDate=2003, sqFt=200, bedrooms=3, bathrooms=2, price=100000, imgUrl='https://via.placeholder.com/150', color='blue', garages=3, bids=0}) {
        this.forSaleDate = forSaleDate;
        this.sqFt = sqFt;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.price = price;
        this.imgUrl = imgUrl;
        this.color = color;
        this.garages = garages;
        this.bids = bids
        this.id = generateId();
    }

    get Template() {
        return /*html*/`<div class="card houses-text-hide col-12 col-sm-6 col-md-3 mx-4 my-2">
            <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer py-1" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body bg-danger">                
                <h2 class="card-title">$${this.price} ${this.bedrooms} bed, ${this.bathrooms} bath</h2>
                <h4>Garages: ${this.garages}</h4>
                <h4>SqFt: ${this.sqFt}</h4>
                <div class="row text-right">
                    <div class="col d-flex align-self-end">
                        <h3 class="d-flex text-left pt-3">Current bids: ${this.bids}</h3>
                        <button class="btn btn-lg btn-dark text-light font-weight-bold ml-auto" onclick="app.housesController.bid('${this.id}')">Bid</button>
                    </div>
                </div>
            </div>
        </div>`
    }
}