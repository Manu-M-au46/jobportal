async function addSeeker(){
   
    const education =  document.getElementById('education').value
    const skills =  document.getElementById('skills').value
    const experience =  document.getElementById('experience').value
 
 const addJobSeekerResponseObj = await fetch ('/jobseekers', {
     method: 'POST',
     headers: {
         'Content-type': 'application/json'
     },
     body: JSON.stringify({
        education,
       skills,
       experience,
     })
 })
 
 const addJobSeekerstatus = await addJobSeekerResponseObj.json()
 console.log(addJobSeekerstatus)
 if(addJobSeekerstatus.status === 'success'){
    alert("SignUp Successfull. Please login")
     window.location = '/index.html'

 }
 
}