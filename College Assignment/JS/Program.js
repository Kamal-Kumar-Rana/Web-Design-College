//1. Swaping two no's using third variable and without third variable
/*let a=10
let b=20
b=b-a
a=a+b

console.log(a,b)

let x,y
x=prompt("Enter the first number: ")
y=prompt("Enter the the second number:");
document.write("Before Swaping: ",x,"  ",y);
let temp=x
x=y
y=temp
document.write(" After Swaping: ",x,"  ",y);

alert("Find the largest no among three no using ternary oparators")
let p,q,r
p=prompt("Enter the first number: ")
q=prompt("Enter the the second number:")
r=prompt("Enter the third number: ")
let res=(p>q)?((p>r)?p:r):((q>r)?q:r)
alert("Largest among "+p+" "+q+" and "+r+" is: "+res)

//4. Check even or odd
n=prompt("Enter the  number: ")
if(n%2==0){
    alert(n+" is even")
}
else{
    alert(n+" is odd")
}*/
//5. Check prime or not
let num,i,flag=true
num=prompt("Enter the number: ")
if(num>0){
for(i=2;i<=(num/2);i++){
    if(num%i==0){
        flag=false
        break
    }
}
    if(flag==true){
        alert(num+" is Prime")
    }
    else{
        alert(num+" is not Prime")
    }
}
else{
    alert("Please Enter Positive Number")
}

//Calculate the area of triangle (right angle &General)




