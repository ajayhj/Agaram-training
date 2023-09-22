
let userDetails=[
    {
    email:"aji@gmail.com",
    password:"123",
    name:"Aji"
},
{
    email:"sobi@gmail.com",
    password:"1234",
    name:"Sobith"
},
{
    email:"ajay@gmail.com",
    password:"12",
    name:"ajay"
}
]

localStorage.setItem("user",JSON.stringify(userDetails))
function loger(){
    alert("Success")
}
function loginCheck(){
    let login_email=document.getElementById("email").value;
    let login_password=document.getElementById("password").value;
    var details=JSON.parse(localStorage.getItem("user"))
    for (var i=0;i<details.length;i++){
        var e=details[i].email
        var p=details[i].password
        var n=details[i].name
        // console.log(details[i].email,details[i].password,details[i].name)
        if (e==login_email&&p==login_password){
            localStorage.setItem("loggedIn",true)
            document.getElementById("login").style.display="none"
            document.getElementById("top").style.display="block"
            console.log()
            document.getElementById("intro").innerHTML=`Welcome ${n}`
        // alert("Success")
        }
    }

}

function logout(){
    document.getElementById("login").style.display="block"
    document.getElementById("top").style.display="none"
}
function loging(){
    if(localStorage.getItem("loggedIn",true)){   console.log("ajay")
    document.getElementById("login").style.display="none"
    document.getElementById("top").style.display="block"
    document.getElementById("intro").innerHTML=`Welcome ${n}`
}}
// function register(){
//     let name_obj= document.getElementById("name").value;
//     let email_obj= document.getElementById("email").value;
//     let password_obj= document.getElementById("password").value;
//     // let profile={};
//     // profile.names=name_obj;
//     // profile.emails=email_obj;
//     // profile.passwords=password_obj;
//     // console.log(profile)
//     // localStorage.setItem("new_list",profile)
//     if(localStorage.getItem("user")){
//         parselocaldata= JSON.parse(localStorage.getItem("user"))
//     }
//     else{
//         let parselocaldata=[]
//     }
    
//     console.log(parselocaldata)
//     parselocaldata.push({
//     email: email_obj,




//     password:password_obj,
//     name: name_obj
// //     })
//     localStorage.setItem("user",JSON.stringify(parselocaldata));
// }

// function regpage(){
//     document.getElementById("register").style.display="block"
//     document.getElementById("login").style.display="none"
// }

// let data=localStorage.getItem("username")
// console.log(data)
// let det=JSON.stringify(data)
// console.log(det)
// let deta=JSON.parse(data)
// console.log(deta)
// console.log(deta[1].name)

