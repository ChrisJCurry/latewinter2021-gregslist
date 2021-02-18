import { ProxyState } from '../AppState.js'
import Job from '../Models/Job.js'

class JobsService {
  constructor() {

  }

  showInterest(id) {
    let temp = ProxyState.jobs;
    let houseIndex = temp.findIndex(house => house.id == id)
    temp[houseIndex].interests += 1
    ProxyState.jobs = temp
  }

  createJob(newJob) {
    let temp = ProxyState.jobs
    temp.push(new Job(newJob))
    ProxyState.jobs = temp
  }

  deleteJob(id) {
    let temp = ProxyState.jobs
    let jobIndex = temp.findIndex(job => job.id == id)
    temp.splice(jobIndex, 1)
    ProxyState.jobs = temp
  }
}


export const jobsService = new JobsService()