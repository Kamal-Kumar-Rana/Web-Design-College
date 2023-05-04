
/*function validate(){
    alert("Hello")
var fn=(document.getElementById("txtfirstname"))
alert(fn.length)
var ln=document.getElementById('txtlastname')
var phone=document.getElementById("txtphone")
var email=document.getElementById("txtemailid")
var dob=document.getElementById('txtdob')

var add=document.getElementById("txtadd")
var hs=document.getElementById('txths')
var dept=document.getElementById("txtdept")

if(length.fn>30){
    alert("Hello!")
     
}



}*/
function validate(){
    
    var username=document.getElementById("txtfirstname");
   
    var Lastname=document.getElementById("txtlastname");
    var Date=document.getElementById("Date");
    var Email=document.getElementById("Email");
    var Mobile=document.getElementById("Mobile");
    var Gender=document.getElementById("Gender");
    var Address=document.getElementById("Address");
    var City=document.getElementById("City");
    var pincode=document.getElementById("Pincode");
    var State=document.getElementById("State");
    var Country=document.getElementById("Country");
    var Hobbies=document.getElementById("Hobby");
    var Bordx=document.getElementById("Bordx");
    var Percentagex=document.getElementById("Percentagex");
    var Yearx = document.getElementById("Yearx");
    var Bordxii=document.getElementById("Bordxii");
    var Percentagexii=document.getElementById("Percentagexii");
    var Yearxii = document.getElementById("Yearxii");
   /* var Bordug=document.getElementById("Bordug");
    var Percentageug=document.getElementById("Percentageug");
    var Yearug = document.getElementById("Yearug");
    var Bordpg=document.getElementById("Bordpg");
    var Percentagepg=document.getElementById("Percentagepg");
    var Yearpg = document.getElementById("Yearpg");*/
    var Course=document.getElementById("course");

    if(username.value=="" ){
        alert("Please Provide your first name")
        return false;
    }
    if(Lastname.value=="" )
    {
        alert("please provide your last name")
        return false;
    }
    if(username.value.length>30 || Lastname.value.length>30 ){
        alert("Maximum 30 characters are allowed!")
        return false;
    }
    if(Date.value == "")
    {
        alert("please provide your date of birth")
        return false;
    }
    if(Email.value=="")
    {
        alert("please provide your Email id")
        return false;
    }
    if(Mobile.value=="")
    {
        alert("please provide your Mobile No!")
        return false;
    }
    if( Mobile.value.length>10){
        alert("Please Enter Valid Mobile Number with 10 digit")
        return false;
    }
    if(Gender.value=="")
    {
        alert("please provide your Gender!")
        return false;
    }
    if(Address.value.length == "")
    {
        alert("please provide your Address!")
        return false;
    }
    if(City.value == "" || City.value.length>30)
    {
        alert("please provide your City!")
        return false;
    }
    if(pincode.value=="" || pincode.value.length>6)
    {
        alert("please provide your pincode!")
        return false;
    }
    if(State.value=="" || State.value.length>30)
    {
        alert("please provide your State!")
        return false;
    }
   
    if(Hobbies.value == "")
    {
        alert("please provide your Hobbies!")
        return false;
    }
    if(Bordx.value == ""  || Bordxii.value == "" )
    {
        alert("please provide your Bord name!")
        return false;
    }
    if(Percentagex.value=="" || Percentagexii.value=="" )
    {
        alert("please provide your Persentage!")
        return false;
    }
    if(Yearx.value=="" || Yearxii.value=="")
    {
        alert("please provide your Passing Year")
        return false;
    }
    if(Bordx.value.length>10 || Bordxii.value.length>10 ){
        alert("Only 10 Characters are allow in Board!")
    }
    if(Percentagex.value.length>=2 || Percentagexii.value.length>=2){
        alert("Please enter 2 decimal number in percentage! ")
    }
    if(Course.value == "")
    {
        alert("please provide your Course!")
        return false;
    }
    return true;
}
