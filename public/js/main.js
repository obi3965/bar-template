
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
       document.querySelector("#subscribe").onsubmit = validateEmail;
   }




   let messageForm = document.querySelector('#myMessageBox');
   let messageName = document.querySelector('#messageName');
   let messageTextBox = document.querySelector('#support');


   messageForm.addEventListener('submit', messageBox)

   function messageBox(e){
    //  alert('hi')
     e.preventDefault()
     
     removeMessages()

     let valid = true;

     if(messageName.value.length == 0){
        messageName.classList.add('errorsMessage');
        messageName.nextElementSibling.innerHTML = 'please enter your name';
        valid = false
     }

     if (messageTextBox.value.length == "") {
        messageTextBox.classList.add('errorsMessage');
        messageTextBox.nextElementSibling.innerHTML = 'please enter your messages';
        valid = false;
      }
      return valid;
   }


   function removeMessages() {
    let errorInput = document.querySelectorAll('#errorsMessage');
    [].forEach.call(errorInput, function (el) {
      el.classList.remove("wrong-input");
    })

    let errorParagraph = document.querySelectorAll('#errorsMessage');
    [].forEach.call(errorParagraph, function (el) {
      el.innerHTML = "";
    })
  }




  //TO VALIDATE MY CONTACT FORM
  let contactForm = document.querySelector('#contact-form');
  let contactEmail = document.querySelector('#contactEmail');
  let contactFirstName = document.querySelector('#contactName');
  let contactLastName = document.querySelector('#contactLastName');
  let contactPhoneNumber = document.querySelector('#contactPhoneNumber');
  let contactMessage = document.querySelector('#exampleFormControlTextarea1');
  contactForm.addEventListener('submit', contactInfo)

  function contactInfo(e){
   
    e.preventDefault()
    
    removeFormMessages()
    let valid = true;

    if(contactFirstName.value.length == 0){
      contactFirstName.classList.add('wrong-input');
      contactFirstName.nextElementSibling.innerHTML = 'please enter your first name';
      valid = false
    }

    if(contactLastName.value.length == 0){
      contactLastName.classList.add('wrong-input');
      contactLastName.nextElementSibling.innerHTML = 'please enter your last name';
      valid = false
    }

    if(contactEmail.value == ''){
      contactEmail.classList.add('wrong-input');
      contactEmail.nextElementSibling.innerHTML = 'please enter your email';
      valid = false
    }

    if(contactPhoneNumber.value.length < 7){
      contactPhoneNumber.classList.add('wrong-input');
      contactPhoneNumber.nextElementSibling.innerHTML = 'please enter your phone number';
      valid = false
    }
    if(contactMessage.value.length == ''){
      contactMessage.classList.add('wrong-input');
      contactMessage.nextElementSibling.innerHTML = 'please enter your message';
      valid = false
    }
    return valid
  }

  function removeFormMessages() {
    let errorInput = document.querySelectorAll('.wrong-input');
    [].forEach.call(errorInput, function (el) {
      el.classList.remove("wrong-input");
    })

    let errorParagraph = document.querySelectorAll('.errorMessage');
    [].forEach.call(errorParagraph, function (el) {
      el.innerHTML = "";
    })
  }