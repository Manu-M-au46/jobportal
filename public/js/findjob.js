const jobsListEle = document.getElementById('job-list')

async function findJobs(){

    const   getJobsResponse = await fetch ('/jobs')
    const getjobsbody = await getJobsResponse.json()

    const { jobs } = getjobsbody
     if(jobs.length ===0){
        jobsListEle.append('no jobs found')
     }else{
        for (let index = 0; index < jobs.length; index++) {
            const job = jobs[index];
            const liEle =  document.createElement('li')
            liEle.innerHTML = job.position
            jobsListEle.append(liEle)
        }
     }
}
