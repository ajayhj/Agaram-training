number_oftoken=int(input("enter the amount"))
if number_oftoken >500 and number_oftoken<=1000:
    print("you have owned silver token")
elif number_oftoken >1000 and mumber_oftoken <=5000:
    print ("you have owned gold token")
elif number_oftoken>=5000:
    print ("you have owned platinum token")
else :
    print ("no token available")
#task2
email =input("enter the email")
password =input ("enter the password")
if email=="example@gmail.com"and password=="123456":
    print ("you are logged in sucessfully")
elif email!= "example@gmail.com" and passoword== "123456":
    print("your email is wrong")
elif email=="example@gmail.com" and password!="123456":
    print("your password is wrong")
else:
    print("log in failed")
  