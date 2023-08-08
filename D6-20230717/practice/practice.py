my_resume={
        "Name":"AJAY.H",
        "Email":"ajayhb2c@gmail.com",
        "Mobile_No":"9047719688",
        "objective":"apply the possition of python developer",
        "Soft_Skills":["listening skills","leadership"],
        "Hard_Skills":["programming","design"],
        "Educational_qualification":
          [
            {
                "Course":"ELECRTONICS AND COMMUNICATIONENGINEERING",
                "institute_name":"vinschristian college of engineering",
                "Yearofpassing":2019,
                "Percentage":62.4,
                "place":"chunkankadai",
            },
            { 
                "Course":"SSC",
                "institute_name":"govt school agasteeswaram",
                "Yearofpassing":2015,
                "Percentage":72,
                "place":"agasteeswaram",
            },
            { 
                "COURSE":"SSLC",
                "institute_name":"govt school agasteeswaram",
                "Yearofpassing":2013,
                "percentage":67,
                "place":"agasteeswaram",
            }
          ],
        "Projects":
          [
            {
                "project":"Iot based irrigation system",
                "tools":"internet of things",
                "duration":"6months"
            },
            {
                "project":"Development of IOT enabled multipurpose for emergency purpose",
                "tools":"robotics",
                "duration":"2months",
            }

          ],
        "Experience":
           [
             {
                "campanyname":"b2c teachnologies",
                "yearsofworking":2020_2023,
                "position":"process_asscociate",
             }
           ],
        "Hobbies":["movies","sports","photoshot"],
        "Personal_details":
           [
            {
              "Fathers_name":"Hariram",
              "Father's_occupation":"coolie",
              "Language_known":["english","tamil"],
              "date_of_birth":17/6/1998,
              "gender":"male",
              "martial_status":"unmarried",
              "address":
                     {
                        "door_number":14/87,
                        "street":"kovilstreet",
                        "place":"agastesswaram",
                        "district":"kanyakumari",
                        "pincode":629701,
                     }

            }
           ],
           "declaration":"i cleare by declare the facts given above are genunie to the best of my knowledge and believe",
    }
print(my_resume)

#conditional statment exaples
gender="male"
if gender== "male":
    print("blue")
else:
    print("pink")
#exaple
gender=input("enter gender")
if gender== "male":
    print("blue")
elif gender== "female":
     print("pink")
elif gender=="thirdgender":
    print("lavender")
else:
    print("invalid input")
#multiple condtional statement
total_mark=int(input("enter total mark"))
if total_mark >92:
    print("you are eligible for mbbs")
elif total_mark >85 and total_mark<=92:
    print("you are eligible for bds")
elif total_mark >75 or total_mark <=85:
    print ("you are eligible for agriculture")
else:
    print("go to enginreering")

