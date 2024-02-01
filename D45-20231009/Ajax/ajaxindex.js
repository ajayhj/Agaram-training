
function show_list(){
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{},
        success: function(response){
              console.log(response)
              let list_data=""
              for (i=0;i<response.length;i++){
                list_data=list_data + `
                <tr>
      <th scope="row" id='${response[i]}'>${response[i].userId}</th>
      <td id='${response[i]}'>${response[i].id}</td>
      <td id='${response[i]}'>${response[i].title}</td>
      <td id='${response[i]}'>${response[i].body}</td>
    </tr>

                `
              }
              document.getElementById("list_table").innerHTML=list_data;
        },
        error: function(err){
             alert("error")
        }
    }) 
}

    // function show_list(){
//    // alert("hi")
// }
// function post(){
//     alert("hello")
//     $.ajax({
//         type:"post",
//         url:"https://jsonplaceholder.typicode.com/posts",
//         data:{body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//             id: 1,
//             title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             userId:1},
//         success:function(response){
//                 console.log(response)
//                 // let tabledata=""
//                 // for(i=0;i<response.length;i++){
//                 //     tabledata=tabledata+`<tr>
//                 //     <td>${response[i].body}</td>
//                 //     <td>${response[i].id}</td>
//                 //     <td>${response[i].name}</td>
//                 //     <td>${response[i].email}</td>
//                 //     </tr>`
//                 // }
//                 // document.getElementById("table_list").innerHTML=tabledata;

// //         },
// //         error:function(error){
// //               console.log(error)
// //         },     
            
// //     })   
// // }