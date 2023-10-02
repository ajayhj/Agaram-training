const firebaseConfig = {

    apiKey: "AIzaSyCz5H4BKRAWbPgfm-RGGchXifJonWIyZ5w",
  
    authDomain: "login-reg-form-b35f0.firebaseapp.com",
  
    databaseURL: "https://login-reg-form-b35f0-default-rtdb.firebaseio.com",
  
    projectId: "login-reg-form-b35f0",
  
    storageBucket: "login-reg-form-b35f0.appspot.com",
  
    messagingSenderId: "406099067290",
  
    appId: "1:406099067290:web:4f80d4c7f83be90b92fa23"
  
  };
  let alldata=[]
  firebase.initializeApp(firebaseConfig);

  var db = firebase.database();

  console.log(db)
  var dataRef = db.ref("registeredUsers");

function register(){
    console.log('register function called');
    let reg_name=document.getElementById("name").value
    let reg_email=document.getElementById("Email").value
    let reg_password=document.getElementById("password").value

    let reg_data = {
            name : reg_name,
            email : reg_email,
            password : reg_password,
    }

    dataRef.once('value')
        .then(function(response) {
            let data = response.val();
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

    let user_detail=document.getElementById("Email").value
    let Password=document.getElementById("password").value
        dataRef.once('value')
        .then(function(response) {
            let data = response.val();
            console.log(data);
            if(data){
                for(i=0;i<data.length;i++){

                    if ((data[i].email==user_detail) && (data[i].password==Password))
                    {
                        alert("login successfully")
                        localStorage.setItem("loggedin",true)
                        localStorage.setItem("logname",data[i].name)
                        window.location="firebasehome.html";
                         break;
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
    window.location='firebasereg.html'
}
// function login(){
//     window.location="firebasehome.html"
// }

function getdata(){
  dataRef.once("value")
   .then(function (response){
    console.log(response.val());
    alldata=response.val();
    displaydata()
   })   
}
function displaydata(){
    let tabledata='';
    for (let i=0;i<alldata.length;i++){
        listname=alldata[i].name;
        list_email=alldata[i].email;
        console.log(listname)
        tabledata=tabledata+`<tr>
        <td>${listname}</td>
        <td>${list_email}</td>
        <td><button>update</button></td>
        <td><button>delete</button></td> </tr>`
}
document.getElementById("list-table").innerHTML=tabledata;
}

// displaydata()
getdata()

function deletedata(){

      dataRef.once("value").then(function(){
      alert(delete)
      }
    )}