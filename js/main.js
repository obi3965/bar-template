
if(null){
      const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector(".navbar ul");
  const navbarLinks = document.querySelectorAll(".navbar a");
      
   
        navbarToggler.addEventListener('click', function(){
              
        navbarToggler.classList.toggle("open-navbar-toggler");
         navbarMenu.classList.toggle("open");
        
  })   
   
    
  
  navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));
  
  function navbarLinkClick() {
    if(navbarMenu.classList.contains("open")) {
      navbarToggler.click();
    }
  }  
  }




  fetch('/pages/navbar.html')
.then((res) =>{
      return res.text()
})
.then((navbarOutput)=>{
       //TO ADD ACTIVE LINKS FOR MY NAVBAR LINKS

  

   document.querySelector('#navbar-output').innerHTML = navbarOutput
    //TO ADD ACTIVE LINKS FOR MY NAVBAR LINKS

})



fetch('/pages/footer.html')
.then((res) =>{
      return res.text()
})
.then((footerOutput)=>{
       //TO ADD ACTIVE LINKS FOR MY NAVBAR LINKS

  

   document.querySelector('#footer-output').innerHTML = footerOutput
    //TO ADD ACTIVE LINKS FOR MY NAVBAR LINKS

})


//TO VALIDATE MY SUBSCRIBE FORM
function validateEmail(){
      var emailText = document.getElementById('email').value;
      var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
      if(pattern.test(emailText)){
          return true;
      }else{
          document.getElementById("error").innerHTML = 'please enter your valid email';
          //alert('bad email' + emailText);
          return false;
      }
  }
   window.onload = function(){
       document.querySelector("#email-form").onsubmit = validateEmail;
   }