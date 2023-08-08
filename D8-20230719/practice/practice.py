customer_age=int(input("enter a age"))
if customer_age<3:
    print("ticket free")
elif customer_age>=3 and customer_age<=12:
    print("ticket $10")
elif customer_age>=65:
    print("ticket $12")
else:
    print("pay $15")
#task2
days=int(input("enter the day number"))
if days==1:
   print("today is sunday")
elif days==2:
    print("todat is monday")
elif days==3:
    print("today is tuesday")
elif days==4:
    print("today is wednesday")
elif days==5:
    print("today is thursday")
elif days==6:
    print("today is friday")
elif days==7:
    print ("today is saturday")
else:
    print("invalid input")
#task3-intha task la first 2 than check panirukom 3 panala so atha um ithukuleye check pana nested if use pandrom34line la
number1=int(input("enter a number"))
number2=int(input("enter a number"))
number3=int (input("enter a number"))
if number1>number2:
    print("number 1")
    if number1>number3:
        print("number1")
elif number2>number3:
    print("number2")
else:
    print("number3")

#task3 la else if use panama if vachi panuna
number1=int(input("enter a number"))
number2=int(input("enter a number"))
number3=int (input("enter a number"))
if number1>number2:
    print("number1")
    if number1>number3:
        print("number1")
if number2>number1:
    print("number2")
    if number2>number3:
        print("number2")
if number3>number1:
    print("number3")
    if number3>number2:
        print("number3")
