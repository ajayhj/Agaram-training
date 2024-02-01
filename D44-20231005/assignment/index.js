let resume_details={};

let temp={};

function val(a,b){
    if(b){
        if(resume_details[b]){
            resume_details[b]={...resume_details[b]}
        }else{
        resume_details[b]={}
        }
        resume_details[b][a.name]=a.value
    }else{
        resume_details[a.name]=a.value
    }display()
}

function add_skill(key,id,tbl_id,edu){
    if(edu){
        if(!resume_details[edu]){
            resume_details[edu]=[]
        }
        resume_details[edu].push(temp)
        let keys=Object.keys(temp)
        for(i=0;i<keys.length;i++){
            document.getElementById(keys[i]).value=""
        }
        temp={}
        display()
    }else{
        if(!resume_details[key]){
            resume_details[key]=[]
        }
        resume_details[key].push(document.getElementById(id).value)
        document.getElementById(id).value=""
        display()
        htmldata=""
        for(i=0;i<resume_details[key].length;i++){
            htmldata=htmldata+`<div id="${key[i]}"><button type="button" onclick="del('${[i]}','${key}')" class="btn btn-primary">
            remove</button><ul>${resume_details[key][i]}</ul></div>`
        }
        document.getElementById(tbl_id).innerHTML=htmldata}
}
function display(){
    document.getElementById("dispaly_items").innerHTML=JSON.stringify(resume_details,undefined,2)
}
function del(i,key){
    resume_details[key].splice(i,1)   //remove inside
    result=document.getElementById(${key[i]})         //remove display
    result.remove()
    display()
    
}

function get_info(item){
    temp[item.name]=item.value
}
