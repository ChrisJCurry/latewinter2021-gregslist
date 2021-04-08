import { generateId } from '../Utils/GenerateId.js'

export default class Job {
    constructor({ title = "", company = "", rate = 40, hours = 60, description = "default", _id, id }) {
        this.title = title;
        this.company = company;
        this.rate = rate;
        this.hours = hours;
        this.description = description;
        this.id = _id || id
    }

    get Template() {
        return /*html*/`<div class="card jobs-text-hide col-12 col-sm-6 col-md-3 my-2 pb-2">
            <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer py-1" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
            <div class="card-body bg-danger">                
                <h2 class="card-title">${this.title}</h2>
                <h4>Hours: ${this.hours}, Rate: $${this.rate}/hr</h4>
                <h4>Company: ${this.company}</h4>
                <div class="row text-right">
                    <div class="col d-flex align-self-end">
                    <h3 class="d-flex text-left pt-3">Description: ${this.description}<h3>
                        <h3 class="d-flex text-left pt-3">Current interests: <h3>
                        <button class="btn btn-lg btn-dark text-light font-weight-bold ml-auto" onclick="app.jobsController.showInterest('${this.id}')">Interested</button>
                    </div>
                </div>
            </div>
        </div>`
    }
}