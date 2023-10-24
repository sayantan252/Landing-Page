document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');
  const showPasswordCheckbox = document.getElementById("show-password");
  const confirmpassword=document.getElementById('show-password1');
  const btntxt=document.getElementById('sign-in-btn');
  let a=0,b=0,c=0,d=0;

  form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
    if((a+b+c+d)===4)
    {
      alert("you are signed in");
      window.location.href = 'index.html';
      
    }
  });

  function checkInputs() {
    const username_value = username.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();
    const password2_value = password2.value.trim();

    if (username_value === '') {
      setErrorFor(username, 'Username cannot be blank');
    } else {
      setSuccessFor(username);
      a=1;
      
    }

    if(email_value===''){
      setErrorFor(email,'Email Cannot be blank');
      
    }
    else{
      setSuccessFor(email);
      b=1;
    }

    if(password_value===''){
      setErrorFor(password,'Password cannot be blank');
    }
     else if(!isValidPassword(password_value))
     {
        pwwrong();
     }
    else{
      setSuccessFor(password);
      c=1;
    }

   
    if(password2_value===''){
      setErrorFor(password2,'This cannot be blank');
    }
    else if(password_value!==password2_value){
      setErrorFor(password2,'Two passwords are not same');
    }
    else{
      setSuccessFor(password2);
      d=1;
    }
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  function isValidPassword(password) {
    // Use regular expression to validate password
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/.test(password);
  }
 
  function pwwrong(){
    alert("Password must have 5 charaters, 1 uppercase,1 lowercase and 1 special charater ");
  }
  
  showPasswordCheckbox.addEventListener("change", function() {
    const checked = this.checked;
    if (checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  });
   
 confirmpassword.addEventListener("change",function(){
  const checked1=this.checked;
  if(checked1){
        password2.type="text";
  }
  else{
    password2.type="password";
  }
 }) 

  





});
