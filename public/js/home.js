

  function SignUpbtn() {
    window.location.href = 'signUp.html'
  }

 async function logIn() {

  const emailId =  document.getElementById('inputEmail').value
  const password =  document.getElementById('inputPassword').value
  const userCategory =  document.getElementById('userCategory').value

const loginResponseObj = await fetch ('/login', {
   method: 'POST',
   headers: {
       'Content-type': 'application/json'
   },
   body: JSON.stringify({
     emailId,
     password,
     userCategory
   })
})

const loginstatus = await loginResponseObj.json()
console.log(loginstatus)
if(loginstatus.status === 'sucess'){
   window.location = "/jobSeekerDash.html"
}
}




  

 