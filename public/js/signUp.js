async function signUp(){
    const name =  document.getElementById('name').value
    const email =  document.getElementById('email').value
    const password =  document.getElementById('password').value
    const cpassword =  document.getElementById('cpassword').value
    const userCategory =  document.getElementById('userCategory').value

 const addJobSeekerResponseObj = await fetch ('/users', {
     method: 'POST',
     headers: {
         'Content-type': 'application/json'
     },
     body: JSON.stringify({
       name,
       email,
       password,
       cpassword,
       userCategory
     })
 })
 
 const addJobSeekerstatus = await addJobSeekerResponseObj.json()
 console.log(addJobSeekerstatus)
 if(addJobSeekerstatus.status === 'success'){
     window.location.href = "jobSeekerProfile.html"
 }
 }
 
 