async function getSeeker(){
   
    const education =  document.getElementById('education').value
    const skills =  document.getElementById('skills').value
    const experience =  document.getElementById('experience').value
 
 const addJobSeekerEditResponseObj = await fetch ('/jobseekers', {
     method: 'PUT',
     headers: {
         'Content-type': 'application/json'
     },
     body: JSON.stringify({
        education,
       skills,
       experience,
     })
 })
 
 const addJobSeekerEditstatus = await addJobSeekerEditResponseObj.json()
 console.log(addJobSeekerEditstatus)
 if(addJobSeekerEditstatus.status === 'success'){
    alert("Changes Made Successfully")
     window.location = '/jobSeekerDash.html'

 }
 else{
    alert("error making changes")
 }
 
}