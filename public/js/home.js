

  function SignUpbtn() {
    window.location.href = 'signUp.html'
  }

 async function login() {

  const email =  document.getElementById('inputEmail').value
  const password =  document.getElementById('inputPassword').value
  const userCategory =  document.getElementById('userCategory').value

const loginResponseObj = await fetch ('/login', {
   method: 'POST',
   headers: {
       'Content-type': 'application/json'
   },
   body: JSON.stringify({
     email,
     password,
     userCategory
   })
})

const loginstatus = await loginResponseObj.json()
console.log(loginstatus)
if(loginstatus.status === 'success'){
  window.location = "/jobSeekerDash.html"
}
}




  

 