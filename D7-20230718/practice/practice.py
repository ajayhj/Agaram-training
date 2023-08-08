value=int(input("enter number"))
reminder_values=value%2
if reminder_values==0:
    print("the number is even")
else:
    print("the number is odd")

value1=int(input("enter number"))
value2=int(input("enter number"))
total=value1%value2
if  total==0:
    print("the number is dived")
else:
    print("the number is not dived")
year=int(input("enter a year"))
if  (year%400==0 and year%100==0) or (year%4==0 and year%100!=0):
    print("is a leap year")
else:
    print("is not leap year")
