name=input("enter your name")
gender=input("enter your gender")
age=int (input("enter your age"))
if (age>=60):
    print("hi"+name+"you are under senior")
#ithukla question keta mari mr or mss venuna nested if use pani pananum
elif (age<60 and age>18):
    print ("hi"+name+"you are under adult")
elif age<=18:
    print("hi"+name+"you are under teenagers")

