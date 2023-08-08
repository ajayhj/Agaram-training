#palindrom-means same a irukum reverse la potalum
string=input("enter the word")
temp=""
for i in string:
    temp=i+temp
    print(temp)

if string==temp:
    print("palindrom")
else:
    print("not palindrom")

