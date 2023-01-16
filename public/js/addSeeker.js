async function addSeeker(){
   
    const mobileno =  document.getElementById('mobNo').value
    const address =  document.getElementById('address').value
    const basiceducation =  document.getElementById('basiceducation').value
    const skills =  document.getElementById('skills').value
    const experience =  document.getElementById('experience').value
    const aboutme =  document.getElementById('aboutme').value
 
 const addJobSeekerResponseObj = await fetch ('/jobseekers', {
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
//  if(addJobSeekerstatus.status === 'success'){
//      window.location = '/EmployerDash.html'
//  }
 }
 
 