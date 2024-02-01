const firebaseConfig = {

    apiKey: "AIzaSyCz5H4BKRAWbPgfm-RGGchXifJonWIyZ5w",
  
    authDomain: "login-reg-form-b35f0.firebaseapp.com",
  
    databaseURL: "https://login-reg-form-b35f0-default-rtdb.firebaseio.com",
  
    projectId: "login-reg-form-b35f0",
  
    storageBucket: "login-reg-form-b35f0.appspot.com",
  
    messagingSenderId: "406099067290",
  
    appId: "1:406099067290:web:4f80d4c7f83be90b92fa23"
  
  };




  // ------------------------------



  firebase.initializeApp(firebaseConfig);

  let all_data=[];
  var db = firebase.database();
        console.log(db)
        var auth=firebase.auth()
  console.log("auth",auth)
  var dataRef = db.ref("registeredUsers");
  console.log(dataRef)

function register(){
    
    alert('register function called');
    let reg_name=document.getElementById("name").value
    let reg_email=document.getElementById("mail").value
    let reg_password=document.getElementById("password").value

        reg_data = {
            name : reg_name,
            email : reg_email,
            password : reg_password,
    }

    dataRef.once('value')
        .then(function(snapshot) {
            let data = snapshot.val();
            console.log(data);
            if(data){
                data.push(reg_data);
                db.ref("registeredUsers").set(data);
            }
            else{
                db.ref(`registeredUsers/${0}`).set(reg_data);
            }
        })
}

function login(){

    let user_detail=document.getElementById("mail").value
    let Password=document.getElementById("password").value
        dataRef.once('value')
        .then(function(snapshot) {
            let data = snapshot.val();
            console.log('login',data);
          
            if(data){
                for(i=0;i<data.length;i++){
                  if((data[i].email==user_detail) && (data[i].password==Password))
                  {
                  // if((data[i].email==user_detail))  
                  // {
                        alert("login successfully")
                        localStorage.setItem("loggedin",true)
                        localStorage.setItem("logname",data[i].name)
                        window.location="fireauthhome.html";
                        
                    }
                    // else{
                    //     alert("Please Register First");   
                    //     break;             
                    // }
                }
                    
            }
        })
}
function registerpage(){
    window.location='fireauthreg.html';
}
function displaydata(){
        let tdata=''
        for(let i=0;i<all_data.length;i++)
        {
            l_name=all_data[i].name;
            l_mail=all_data[i].email;
            tdata=tdata+`<tr><td id="newname+'${i}'">${l_name}</td>
            <td id=newmail+'${i}'>${l_mail}</td>
            <td> <button onclick="updatepage('${l_mail}')">update</button></td>
            <td> <button onclick="deleted('${l_mail}')">Delete</td></tr>`
        }
        // document.getElementById('table').innerHTML=tdata;    
    }
function getdata()
{
    dataRef.once('value').then(function(alldata)
    {
        console.log('datas',alldata.val())
        all_data=alldata.val();
        console.log('all_data',all_data)
        displaydata()
    })
}
function updatepage(mailid)
{
    dataRef.once('value').then(function(alldata){
        let up=alldata.val();
        console.log(up)
        for(let i=0;i<up.length;i++){
            if(up[i].email==mailid){
                let n_name=prompt('name',`${up[i].name}`)
                let n_mail=prompt('email',`${up[i].email}`)
                console.log(n_name,n_mail)
                if(n_name!=null){
                    document.getElementById("newname+'${i}'").innerHTML=n_name;
                }
                if (n_mail!= null) {
                    document.getElementById(`newemail+'${i}'`).innerHTML =n_mail;
                    console.log(n_mail)
                } console.log(up[i].password)
                up[i] = ({
                    email: n_mail,
                    password: up[i].password,
                    name:n_mail
                })
            }
        }
        db.ref("registeredUsers").set(up[i])
    })
}
function getItem() {
    dataRef.once('value')
        .then(function (response) {
            all_data= response.val();
            displaydata()
        }
        )
}
function deleted(mail)
{
    alert(mail)
    let data=[]
    for(let i=0;i<all_data.length;i++){
        if(all_data[i].email!=mail)
        {
            data.push(all_data[i])
        }
        db.ref("registeredUsers").set(data)
        getdata()
    }
}
getdata()

function submitForm(){
  let mailid=document.getElementById('mail').value;
  let passwrd=document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(mailid,passwrd).then((result) =>{
    alert("sucess")
  })
}


function loginForm(){
  let user_email=document.getElementById('mail').value;
  let user_password=document.getElementById('password').value;
  auth.signInWithEmailAndPassword(user_email,user_password).then((result) =>{
    alert("login successfully")
    window.location="fbauth_home.html";
    login()
    })
    .catch((error)=> {
      console.log(error);
    });
}


// uth




  // ---------------Authentication_Code--------------------
// firebase.initializeApp(firebaseConfig);

// var db =firebase.database();
// console.log(db)
// var auth = firebase.auth();
// var dataRef=db.ref("registeredUsers")
// console.log(auth)

// function register(){
  
//   let reg_name=document.getElementById("name").value
//   let reg_email=document.getElementById("Email").value
//   let reg_password=document.getElementById("password").value
//   let reg_data = {
//           name : reg_name,
//           email : reg_email,
//           password : reg_password,
//   }

//   dataRef.once('value')
//       .then(function(response) {
//           let data = response.val();
//           console.log(data);
//           if(data){
//               data.push(reg_data);
//               db.ref("registeredUsers").set(data);
//           }
//           else{
//               db.ref(`registeredUsers/${0}`).set(reg_data);
//           }
//       })
//       alert("register success")
//       window.location="fireauthlogin.html"
// }

// function login(){

//   let user_detail=document.getElementById("Email").value
//   let Password=document.getElementById("password").value
//       dataRef.once('value')
//       .then(function(response) {
//           let data = response.val();
//           console.log(data);
//           if(data){
//               for(i=0;i<data.length;i++){

//                   if ((data[i].email==user_detail) && (data[i].password==Password))
//                   {
//                       alert("login successfully")
//                       localStorage.setItem("loggedin",true)
//                       localStorage.setItem("logname",data[i].name)
//                       window.location="fireauthreg.html";
//                        break;
//                   }
//                   // else{
//                   //     alert("Please Register First");  
//                   //     break;              
//                   // }
//               }
//           }
//       })
// }  

// function registerpage(){
//   window.location='fireauthreg.html'
// }

// function submitForm(){
//   var user_name=document.getElementById('name').value;
//   var user_email=document.getElementById('email').value;
//   var user_password=document.getElementById('password').value;
//   auth.createUserWithEmailAndPassword(user_email,user_password).then((result)=>{
//    alert("register sucess")
//    register()
//    console.log(result)
//   })
// }


// function loginForm(){
//   let user_email=document.getElementById('email').value;
//   let user_password=document.getElementById('password').value;
//   auth.signInWithEmailAndPassword(user_email,user_password).then((result) =>{
//     alert("login successfully")
//     window.location="fbauth_home.html";
//     login()
//     })
//     .catch((error)=> {
//       console.log(error);
//     });
// }









// // const register =() => {
// //   var Name = document.getElementById("name").value;
// //   var email = document.getElementById("Email").value;
// //   var password = document.getElementById("password").value;
// //   auth.createUserWithEmailAndPassword(email, password).then((result) => {
// //     console.log(result)
// //     // register()
// //   })
// //     .catch((error) => {
// //       console.log(error.code);
// //       console.log(error.message);
// //       alert(error.message)
// //     })
// // }
// // function  register() {
// //   Window.location="fireauthreg.html"
// // }


// // const login = () => {
// //   var email = document.getElementById("Email").value;
// //   var password = document.getElementById("password").value;
// //   auth.signInWithEmailAndPassword(email, password)
// //     .then((result) => {
// //       login()
// //       console.log(result)
// //     })
// //     .catch((error) => {
// //       alert("Please Register First")
// //       window.location = "fireauthlog.html"
// //       console.log(error.code);
// //       console.log(error.message);

// //     });
// // }


// // const dele = () => {
// //   const user = firebase.auth().currentUser;
// //   user.delete().then(() => {
// //     // User deleted.
// //     alert("Account Deleted Successfully")
// //     logout()
// //     del()
// //   }).catch((error) => {
// //   });
// // }

// // function authUpdate() {
// //   window.location = "authUp.html"

// // }

// // function updateUserData() {
// //   var userNow = firebase.auth().currentUser;
// //   var u_name = document.getElementById("a_name").value
// //   var u_email = document.getElementById("a_mail").value
// //   var u_password = document.getElementById("a_password").value
// //   userNow.updateProfile({
// //     name: u_name,
// //     email: u_email,
// //     password: u_password,
// //   }).then(function () {
// //     var name = userNow.name;
// //     var email = userNow.email;
// //     var password = userNow.password;
// //   }, function (error) {
// //     console.log(error)
// //   });
// // }
