function showJobSeekerLogin() {
    var container = document.querySelector('.container');
    container.classList.toggle('expanded');
    document.querySelector('.job-seeker-login').classList.toggle('show');
    document.querySelector('.employer-login').classList.remove('show');
   
  }
  
  function showEmployerLogin() {
    var container = document.querySelector('.container');
    container.classList.toggle('expanded');
    document.querySelector('.employer-login').classList.toggle('show');
    document.querySelector('.job-seeker-login').classList.remove('show');
  }
  
