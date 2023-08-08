#task1
numbers=[1,2,3,4,5,6,7,8,9]
even=0
odd=0
for i in numbers:
    if (i%2==0):
        even+=1
    else:
        odd+=1
print("number of even numbers:",even)
print("number of odd numbers:",odd)        

#task2
mixedlist=[1,2.0,"hai","@",5,6,"&",8,9]
count=0
for i in mixedlist:
    name=type(i)
    if name==int:
        count+=1
    
print("number of real numbers",count)



