#task2
# a=int(input("enter a number"))
# b=int(input ("enter a number"))
# c=int(input("enter a number"))
# d=int(input("enter a number"))
# e=int(input("enter a number"))
# print ((a+b+c)*d*e)
# ouput=((a+b+c)*d*e)
# if ouput%2==0:
#     print("even number")
# else:
#     print("odd number")

#task1
input1= int(input("enter a number"))
input2=int(input("enter a number"))
input3=input("enter")
if input3=="add":
   total=input1+input2
   print(total)
elif input3=="multiply":
   total=input1*input2
   print(total)
elif input3=="divide":
    total=input1%input2
    print(total)
elif input3=="subtraction":
    total=input1-input2
    print(total)

#task3
electricity_units=int(input("enter a units"))
costper_units= int(input("enter a cost per units"))
print(electricity_units*costper_units)
total_electricitybil=electricity_units*costper_units
if electricity_units>100:
    total_electricitybil=50+total_electricitybil
    print(total_electricitybil)
else:
    print("no charge")

gst=total_electricitybil*0.18
print(gst) 
 
with_gst=total_electricitybil+gst
print(with_gst)

if (electricity_units>500 )and (electricity_units<1000):
    fiveper=0.05*with_gst
    print(fiveper)
    total_amount=with_gst+fiveper
    print(total_amount)
else:
    (with_gst)
    
