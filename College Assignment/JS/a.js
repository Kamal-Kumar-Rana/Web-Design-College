function clearerrors(){
    errors =document.getElementsByClassName('formerror');
    for (let item of errors){
    item.innerHTML="";
    }
    }
    function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
    }
    function validateForm(){
    var returnval=true;
    clearerrors();
    var name=document.forms['myform']["fname"].value;
    if(name.length<5){
    seterror("name","*Length of name is too short");
    console.log("name");
    returnval=false;
    
    }
    if (name.length==0){
    seterror("name" ,"* length of name can not be empty");
    rerutnval=false;
    }
    var email=document.forms['myform']["femail"].value;
    if(email.length>15){
    seterror ("email","*email length is too big");
    returnval=false;
    }
    var phone=document.forms['myform']["fphone"].value;
    if(phone.length!=10){
    seterror("phone","*;phone number should be 10 numbers");
    returnval=false;
    }
    var password=document.forms['myform']["fpass"].value;
    if(password.length<6){
    seerror("password","password should be at least 6 character long");
    returnval=false;
    }
    var cpassword=document.forms['myform']["cpass"].value;
    if (cpassword != password){
    seterror("cpassword","*password did not match with confirmation password");
    returnval=false;
    }
    return returnval;
    }