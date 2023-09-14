// var a="Agaram";
// console.log(typeof(a));
// var b=5;
// console.log(typeof(b))
// var c=true;
// console.log(typeof(c))
// var d=5.04;
// console.log(typeof(d))
// var e={
//     name:"agaram",
//     palce:"nagercoil"
// }
// console.log(typeof(e))
 var my_resume={
    name:"AJAY.H",
    email:"ajayhb2c@gmail.com",
    mobile_no:"9047719688",
    objective:"apply the possition of python developer",
    soft_skills:["listening skills","leadership"],
    hard_skills:["programming","design"],
    educational_qualification:
      [
        {
            course:"ELECRTONICS AND COMMUNICATIONENGINEERING",
            institute_name:"vinschristian college of engineering",
            yearofpassing:2019,
            percentage:62.4,
            place:"chunkankadai",
        },
        { 
            course:"SSC",
            institute_name:"govt school agasteeswaram",
            yearofpassing:2015,
            percentage:72,
            place:"agasteeswaram",
        },
        { 
            course:"SSLC",
            institute_name:"govt school agasteeswaram",
            Yearofpassing:2013,
            percentage:67,
            place:"agasteeswaram",
        }
      ],
    projects:
      [
        {
            project:"Iot based irrigation system",
            tools:"internet of things",
            duration:"6months"
        },
        {
            project:"Development of IOT enabled multipurpose for emergency purpose",
            tools:"robotics",
            duration:"2months",
        }

      ],
    experience:
       [
         {
            campanyname:"b2c teachnologies",
            yearsofworking:2020_2023,
            position:"process_asscociate",
         }
       ],
    hobbies:["movies","sports","photoshot"],
    personal_details:
       [
        {
          fathers_name:"Hariram",
          fathers_occupation:"coolie",
          language_known:["english","tamil"],
          date_of_birth:17/6/1998,
          gender:"male",
          martial_status:"unmarried",
          address:
                 {
                    door_number:14/87,
                    street:"kovilstreet",
                    place:"agastesswaram",
                    district:"kanyakumari",
                    pincode:629701,
                 }
                }
            ],
            declaration:"i cleare by declare the facts given above are genunie to the best of my knowledge and believe",
     }
console.log(my_resume)
my_resume.educational_qualification[0]["district"]="kanyakumari"
my_resume.educational_qualification[1]["district"]="kanyakumari"
my_resume.educational_qualification[2]["district"]="kanyakumari"
console.log(my_resume)
my_resume.educational_qualification[0]
console.log(my_resume.educational_qualification[0])
console.log(my_resume.educational_qualification[0]["place"])



function getname(){
        console.log("welcome");
}
getname()

 var h="ajay"
 function getname(k){
         console.log(k);
 }
 getname(h)









// let g=["sunday","monday","tuesday",]
// console.log(g[3]);
// console.log(g[2]);
// console.log(g.length);
// console.log(g[g.length-1]);
// g[2]="wednseday"
// console.log(g)
// g[3]="thursday"
// console.log(g)
// g.push("friday")
// console.log(g)
// g.pop("friday")
// console.log(g)

// let f={
//     name:"ajay",
//     age:24,
//     place:"kk",

// }
// f.gender="male"
// console.log(f)
// f.age=26;
// console.log(f)

// for loop example

for (var i=0;i<5;i++){
    console.log(i)
}

for (var i=0; i>-10;i--){
    console.log(i)
}

// for (var i=0; i<10;i--){
//     console.log(i)
// }

let a=["sunday","monday","tuesday","wednesday"]
for (var i=0;i<a.length;i++){
    console.log(a[i])
}

// let l=["ajay","abish","suresh"]
// for (var i=1;i<a.length;i++){
//     console.log(l[i])
// }

//ist la iruka object name veliya eduka


let c=[{name:"suresh",place:"nagercoil"}]
for (var i=0;i<c.length;i++){
    console.log(c[i].name)
    console.log(c[i].place)
}
function getmark(a){
 for (i=0;i<a.length;i++)
}
getmark(educational_qualification)