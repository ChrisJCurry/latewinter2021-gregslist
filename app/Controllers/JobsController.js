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
            title: form.title.value,
            salary: form.salary.value,
            remote: form.remote.checked,
            hours: form.hours.value,
            travel: form.travel.checked,
            weeksTrainedReqd: form.weeksTrainedReqd.value,
            interests: 0
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