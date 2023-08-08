#task
friend_details=[
    {"name":"anish","place":"ammandivilai",
    "hobbies":["movies","tutuion","volleyball"]
    },
{"name":"surya","place":"osaravilai",
"hobbies":["roaming","movies","onlinegames"]
},
{"name":"krish","place":"krishnankoil",
"hobbies":["football","cricket","pubg"]
},

{"name":"evangaline","place":"krishnankoil",
"hobbies":["drwaing","graftwork","wateringplant"]
},
{"name":"asmitha","place":"parakai",
"hobbies":["wateringplants","scroillingmobile","reading"]
},
{"name":"arun","place":"sathanvilai",
"hobbies":["gym","running","kabadi"]
},
{"name":"divya","place":"kotor",
"hobbies":["mobilescrolling","watringplants","reading"]
},
{"name":"abisha","place":"ramanputhur",
"hobbies":["reading","watringplants","dressdesigning"]
}]
friend_details.append({"name":"vasu","place":"kotor",
"hobbies":["gym","news","chess"]})
print(friend_details)
#"coding" a freind_details(hobbies)la add pandrom
for name in friend_details:
    hby=name["hobbies"]
    hby.append("coding")
print(friend_details)
#hobbies list la ipo drawing pandravnga yaralanu keta code ipadi varum:next list kula check pandra nala for eduthurkom
for x in friend_details:
    for hobby in x["hobbies"]:
        if hobby=="drawing":
            x.update({"eligible":True})
            break
        else:
            x.update({"eligible":False})
print(friend_details)       
#hobies la drawing irukura place la desigining varona program
for name in friend_details:
    hobbies=name["hobbies"]
    position=0
    for hobby in hobbies:

        
        if hobby=="drawing":
          hobbies[position]="designing"
        position=position+1
        
print(friend_details)


