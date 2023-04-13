function convertKMToMile(){
var km=document.getElementById('data1').value;
var mile=(km*0.621371);
//alert(km+" km"+"= "+mile+" mile");
document.getElementById('ans1').innerText=mile;



}
function convertMileToKM(){
    var mile=document.getElementById('data2').value;
    var km=(mile*1.60934) 
    //alert(km+" km"+"= "+mile+" mile");
    document.getElementById('ans2').innerText=km;
    
    
    
    }
    function convertCToF(){
      var C=document.getElementById('data1').value;
      var F=((9/5)*C)+32
      //alert(km+" km"+"= "+mile+" mile");
      document.getElementById('ans1').innerText=F;

    }
    function convertFToC() {
      var F=document.getElementById('data2').value;
      var C=(5*(F-32))/9
      //alert(km+" km"+"= "+mile+" mile");
      document.getElementById('ans2').innerText=C;
        
    }

    function calculateGrade() {

    
        let p1=Number(document.getElementById("p1").value)
        let p2=Number(document.getElementById("p2").value)
        let p3=Number(document.getElementById("p3").value)
        let p4=Number(document.getElementById("p4").value)
        let p5=Number(document.getElementById("p5").value)
      
        const marks =(p1+p2+p3+p4+p5)
     
        document.getElementById("marks").textContent=marks;
        const total = Number(document.getElementById("total").value);
        const percentage = (marks / total) * 100;
        document.getElementById("percentage").textContent=percentage;
        
        let grade;
        if (percentage >= 90) {
          grade = "A+";
        } else if (percentage >= 80) {
          grade = "A";
        } else if (percentage >= 70) {
          grade = "B+";
        } else if (percentage >= 60) {
          grade = "B";
        } else if (percentage >= 50) {
          grade = "C";
        } else {
          grade = "D";
        }
        
        document.getElementById("grade").textContent = grade;
       
      }
