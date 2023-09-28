function loginform(){
    let login_email=document.getElementById("user").value;
    let login_password=document.getElementById("pass").value;
//    // alert(login_email)
//    // alert(login_password)
   let val=localStorage.getItem("username")
   let vale=JSON.parse(val);                                                    
   console.log(vale)
   for (i=0;i<vale.length;i++){
       console.log(i)
//        // console.log(vale[i].name)
     if ((login_email==vale[i].email) &&(login_password==vale[i].password)) {
   
       alert("log in sucessfully")
       localStorage.setItem("loggedIn",true)
       window.location="home.html"
       document.getElementById("welcome").innerHTML=`welcome ${vale[i].name}`
       document.getElementById("loginform").style.display="none"
       
       document.getElementById("home").style.display="block"
       
       
   //  ~
   // //document.getElementById("loginform").style.display="none"
      } 

   }
}



function logout(){
    window.location="login.html"
// // document.getElementById("loginform").style.display="block"
// //document.getElementById("home").style.display="none"
}

register form
function registerform(){



let reg_name=document.getElementById("username").value;
let reg_email=document.getElementById("useremail").value;
let reg_password=document.getElementById("userpassword").value;

//// let localdata=localStorage.getItem("list")
// //let parselocaldata=JSON.parse(localdata)
//  //parselocaldata.push({name:reg_name,email:reg_email,password:reg_password})
// // localStorage.setItem("list",parselocaldata)
if (localStorage.getItem("username")){
     parsedata =JSON.parse(localStorage.getItem("username"))
}
else{
    let parsedata=[]
}
console.log(parsedata)
parsedata.push({name:reg_name,
password:reg_password,email:reg_email})
localStorage.setItem("username",JSON.stringify(parsedata));
tableof();
}

function regpage(){
 
//  / /  document.getElementById(loginform).style.display="none"
//  / /  document.getElementById(registerform).style.display="block"
}

function regpage(){
    window.location="register.html"
   
}



let listof=localStorage.getItem("username")
function tableof(){
    
    let listof=localStorage.getItem("username")
  console.log(listof)
let det=JSON.stringify(listof)
  console.log(det)
 let deta=JSON.parse(listof)
 console.log(deta)


    let htmlinput="";
    for (let i=0;i<deta.length;i++){
    htmlinput=htmlinput+`   
    <tr>
        <td>${deta[i].name}</td>
        <td>${deta[i].email}</td>
        <td><button onclick="updateof('${deta[i].email}')">update</button></td>
       <td><button onclick="deleteitem('${deta[i].email}')">delete</button></td>
    </tr>`
}
document.getElementById("list-table").innerHTML=htmlinput;
}

function deleteitem(l){
    let a=JSON.parse(localStorage.getItem("username"))
    let newdata=[]
    console.log(a)
    for (let i=0; i<a.length;i++){
        if(a[i].email !=l){
            newdata.push(a[i])
        }
    }
    let obj=JSON.stringify(newdata)
    localStorage.setItem("username",obj)
tableof();
}
deleteitem()
 
function secure(){
    if(!localStorage.getItem("loggedIn"))
    window.location="login.html"
}