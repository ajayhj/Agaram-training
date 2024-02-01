function registerform(){
    let user_name=$('#name').val()
    let user_email=$('#email').val()
    let user_password=$('#password').val()
    let user_aadhar=$('#aadhar').val()
    let user_address=$('#address').val()
    let user_phone=$('#number').val()
    let user_city=$('#city').val()
    let user_area=$('#area').val()
    let user_pin=$('#area').val()
 //another method -let user_name=document.getElementById("name").value
    $.ajax({
        type:"POST",
        url:"http://agaram.academy/api/action.php",
        
        data :
        {
         request :"create_candidate", 
         name :user_name,
         email :user_email, 
         password:user_password,
         aadhar :user_aadhar,
         address : user_address,
         phone:user_phone,
         city:user_city,
         area:user_area,
         pin:user_pin,
        


        },
        success:function(response){
             console.log(response)
            
        },
        error:function(err){
              console.log(err)
        }
    })


}


function login(){
    let userdata_email=$('#email').val()
    let userdata_password=$('#password').val()
    $.ajax({
        type:"Post",
        url:"http://agaram.academy/api/action.php",
        
        data :
        {
         request :"candidate_login", 
         email :userdata_email, 
         password:userdata_password,
        },
        success:function(response){
            a=JSON.parse(response)
            console.log(a.status)
             if(a.status==="success"){
                  window.location="user_homepage.html"
                  getalluser()
            }

            // getalluser()
            
        },
        error:function(err){
              console.log(err)
        }
    })
}

function getalluser(){
    $.ajax({
        type:"GET",
        url:"http://agaram.academy/api/action.php",
        
        data :
        {
         request :"getAllMembers", 
         
        },
        success:function(response){
             console.log(response)
            // parse ethuna key la vulla String poga
             b=JSON.parse(response)
             console.log(b.data[0].aadhar)
            //  alert("hi")
            let shows_data=""
            for(i=0;i<b.data.length;i++){
                console.log(i)
                shows_data=shows_data+`<tr>
                <td>${b.data[i].id}</td>
                <td>${b.data[i].name}</td>
                <td>${b.data[i].email}</td>
                <td>${b.data[i].password}</td>
                <td>${b.data[i].aadhar}</td>
                <td>${b.data[i].address}</td>
                <td>${b.data[i].phone}</td>
                <td>${b.data[i].city}</td>
                <td>${b.data[i].area}</td>
                <td>${b.data[i].pin}</td>
                // <td>${b.data[i].status}</td>
                // <td>${b.data[i].time}</td>
                
                
                </tr>`
            }
            document.getElementById("list_alluserdata").innerHTML=shows_data
            
        },
        error:function(err){
              console.log(err)
        }
    })


}
