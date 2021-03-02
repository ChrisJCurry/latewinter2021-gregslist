import { ProxyState } from '../AppState.js'
import { jobsService } from '../Services/JobsService.js'
import { generateId } from '../Utils/GenerateId.js';

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
            jobTitle: form.jobTitle.value,
            company: form.company.value,
            rate: form.rate.value || 30,
            hours: form.hours.value || 40,
            description: form.description.value || "This job has no description."
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