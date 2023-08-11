#method1
# str = "the quick brown fox jumps over the lazy dog the quick brown fox"
# output={}
# x=str.split()
# for a in x:
#     b=x.count(a)
#     output.update({a:b})
# print(output)

#method2
str = "the quick brown fox jumps over the lazy dog the quick brown fox the"
list_str = str.split()
result_dict={}

for wrd in list_str:

    if wrd in result_dict:
        result_dict[wrd]+=1
    else:
        result_dict[wrd]=1

print(result_dict)