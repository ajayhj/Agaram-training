#delete examples-in list

mylist=["ajay","anish","abarna","sam","gokul"]
#[1] idex matum intha mylist la iruthu delete paniruken
del mylist[1]
print(mylist)

#incase index kudukama delete pananum na
del mylist[0:2]
print(mylist)

#incase total a delete pannanum na
del mylist
print(mylist)

#delete examples- in dictionary
mydict={"regno":"6004","name":"ajay","dept":"ece"}
#delete all elements means comment
mydict.clear()
print(mydict)
