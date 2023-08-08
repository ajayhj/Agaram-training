user_details=[
    {"name":"ajay","mail":"ajayh@gmail.com",
    "password":"ajay123",
    "hobbies":"reading","movies","shuttle",
    "friends_lists":"subin","sheelan","reji"},

    {"name":"raju","mail":"rajumass@gmail.com",
    "password":"raju1009",
    "hobbies":"scrolling internet","movies","football",
    "friends_lists":"ajai","prasath","makesh"},

    {"name":"sheelan","mail":"sheelanb@gmail.com",
    "password":"123sheelanb",
    "hobbies":"coding","volleyball","travelling",
    "friends_lists":"ajay","vino","sathya"},

    {"name":"reji","mail":"rejiyoyo@gmail.com",
    "password":"yoyoreji9",
    "hobbies":"drawing","movies","scrolling mobile",
    "friends_lists":"yogesh","balu","deepak"},

    {"name":"deepak","mail":"devildeepak@gmail.com",
    "password":"spartendeep",
    "hobbies":"games","chess","drawing",
    "friends_lists":"yovan","sheelan","reji"},
]

user_mail=int(input("enter a mail"))
user_password=int(input("enter a password"))
def data(user_mail,user_password):
    for user in user_details:
        mail=user["mail"]
        password=user["password"]
        if user_mail==mail:
            print("mail is correct")
        elif user_password==["password"]:
            print("password is correct")
        else:
            print("invalid")