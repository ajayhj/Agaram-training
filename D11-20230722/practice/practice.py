monthly_gold_rate=[
    {"month":"jan",
        "gold_rate":2000,
        "jewels_list":[
            {"name":"chain",
            "making_charge":12},
            {"name":"ring",
            "making_charge":8}]
    },
    {"month":"feb",
        "gold_rate":1550,
        "jewels_list":[
            {"name":"chain",
            "making_charge":15},
            {"name":"ring",
            "making_charge":10}
        ]
    },
    {"month":"march",
        "gold_rate":1940,
        "jewels_list":[
            {"name":"chain",
            "making_charge":17},
            {"name":"ring",
            "making_charge":19}
        ]
    },
    {"month":"apr",
        "gold_rate":3000,
        "jewels_list":[
            {"name":"chain",
            "making_charge":14},
            {"name":"ring",
            "making_charge":8}
        ]
    },
    {"month":"may",
        "gold_rate":3520,
        "jewels_list":[
            {"name":"chain",
            "making_charge":12},
            {"name":"ring",
            "making_charge":7}
        ]
    },
        ]
min_value=monthly_gold_rate[0]["gold_rate"]
max_value=monthly_gold_rate[0]["gold_rate"]
min_max_data={}
for item in monthly_gold_rate:
    if item["gold_rate"]<=min_value:
        min_value=item["gold_rate"]
        min_value_month=item["month"]
    if item["gold_rate"]>=max_value:
        max_value=item["gold_rate"]
        max_value_month=item["month"]
min_max_data["min_value_month"]={"month":min_value_month,"gold_rate":min_value,}
min_max_data["max_value_month"]={"month":max_value_month,"gold_rate":max_value}
print(min_value,min_value_month)
print(max_value,max_value_month)
#below code is to find the amount for minimum and maximum gold rate jewels
for jewels_data in monthly_gold_rate:
    jewels_list=jewels_data["jewels_list"]
    gold_rate=jewels_data["gold_rate"]
    month=jewels_data["month"]
    for jewels in jewels_list:
        making_charge=gold_rate*(jewels["making_charge"]/100)
        gst=gold_rate*0.18
        total=gold_rate+making_charge+gst
        if month == min_value_month:
            min_max_data['min_value_month'][jewels['name']] = total
        elif month == max_value_month:
            min_max_data['max_value_month'][jewels['name']] = total
            

print(min_max_data)
