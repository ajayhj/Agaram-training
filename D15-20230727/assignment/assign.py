
items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
]
def items_category(items_list):
   
    dic={
        "Fruits":[],
        "Vegetables":[]
   }
    for item in items_list:
        if item["category"]=="Fruits":
            dic["Fruits"].append(item["name"])
        elif item["category"]=="Vegetables":
            dic["Vegetables"].append(item["name"])
    return dic

output=items_category(items_list)
print(output)