async function addJob(){
   const position =  document.getElementById('position').value
   const description =  document.getElementById('description').value
   const company =  document.getElementById('company').value
   const skills =  document.getElementById('skills').value
   const experience =  document.getElementById('experience').value
   console.log(skills);

const addJobResponseObj = await fetch ('/jobs', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        position,
        description,
        company,
        skills,
        experience
    })
})

const addJobstatus = await addJobResponseObj.json()
console.log(addJobstatus)
if(addJobstatus.status === 'success'){
    window.location.href = "EmployerDash.html"
}
}


