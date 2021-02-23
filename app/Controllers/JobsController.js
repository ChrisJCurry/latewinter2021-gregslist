import { ProxyState } from '../AppState.js'
import { jobsService } from '../Services/JobsService.js'

function _draw() {
    let jobs = ProxyState.jobs;
    let template = ""

    jobs.forEach(job => template += job.Template)
    document.getElementById("jobs").innerHTML = template;
}
export default class JobsController {

    constructor() {
        console.log("jobs controller")
        _draw();
        ProxyState.on("jobs", _draw)
    }

    createJob(event) {
        event.preventDefault();
        let form = event.target;

        let newJob = {
            jobTitle: form.title.value,
            company: form.company.value,
            rate: form.rate.value,
            hours: form.rate.value,
            description: form.description.value
        }

        jobsService.createJob(newJob);
    }

    deleteJob(id) {
        jobsService.deleteJob(id)
    }

    showInterest(id) {
        jobsService.showInterest(id);
    }

}