import {generateId} from '../Utils/GenerateId.js'

export default class Job {
    constructor({title = "Potato farmer", salary = 50000, remote = false, hours = 40, travel = true, weeksTrainedReqd = 2, interests = 0}) {
        this.title = title;
        this.salary = salary;
        this.remote = remote;
        this.hours = hours;
        this.travel = travel;
        this.weeksTrainedReqd = weeksTrainedReqd;
        this.interests = interests;
        this.id = generateId();
    }

    get Template() {
        return /*html*/`<div class="card houses-text-hide col-12 col-sm-6 col-md-3 my-2">
            <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer py-1" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
            <div class="card-body bg-danger">                
                <h2 class="card-title">${this.title}</h2>
                <h4>Hours: ${this.hours}</h4>
                <h4>Salary: ${this.salary}</h4>
                <h4>Remote?: ${this.remote}</h4>
                <h4>Travel?: ${this.travel}</h4>
                <h4>Weeks required for training: ${this.weeksTrainedReqd}</h4>
                <div class="row text-right">
                    <div class="col d-flex align-self-end">
                        <h3 class="d-flex text-left pt-3">Current interests: ${this.interests}</h3>
                        <button class="btn btn-lg btn-dark text-light font-weight-bold ml-auto" onclick="app.jobsController.showInterest('${this.id}')">Interested</button>
                    </div>
                </div>
            </div>
        </div>`
    }
}