import { ProxyState } from '../AppState.js'
import Job from '../Models/Job.js'
import { api } from './AxiosService.js'

class JobsService {
  constructor() {
    this.getJobs()
  }

  async getJobs() {
    try {
      const res = await api.get('jobs')
      ProxyState.jobs = res.data.map(rawJobData => new Job(rawJobData))
    }catch(err) {
      console.error(err)
    }
  }

  showInterest(id) {
    let temp = ProxyState.jobs;
    let houseIndex = temp.findIndex(house => house.id == id)
    ProxyState.jobs = temp
  }

  async createJob(newJob) {
    // let temp = ProxyState.jobs
    // temp.push(new Job(newJob))
    // ProxyState.jobs = temp
    try {
      const res = await api.post('jobs', newJob)
      ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
    }catch(err) {
      console.error(err)
    }
  }

  async deleteJob(id) {
    // let temp = ProxyState.jobs
    // let jobIndex = temp.findIndex(job => job.id == id)
    // temp.splice(jobIndex, 1)
    // ProxyState.jobs = temp

    try {
      await api.delete(`jobs/${id}`)
      this.getJobs()
    }catch(err) {
      console.error(err)
    }
  }
}


export const jobsService = new JobsService()