async function addSeeker(){
   
    const mobileno =  document.getElementById('education').value
    const address =  document.getElementById('skills').value
    const basiceducation =  document.getElementById('experience').value
 
 const addJobSeekerResponseObj = await fetch ('/addSeeker', {
     method: 'POST',
     headers: {
         'Content-type': 'application/json'
     },
     body: JSON.stringify({
       mobileno,
       address,
       basiceducation,
       skills,
       experience,
       aboutme
     })
 })
 
 const addJobSeekerstatus = await addJobSeekerResponseObj.json()
 console.log(addJobSeekerstatus)
 if(addJobSeekerstatus.status === 'success'){
     window.location = '/jobSeekerDash.html'

 }
 
}