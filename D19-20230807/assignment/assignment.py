# n=int(input("enter a number"))
# for i in range(n):
#     for j in range(n):
#         print('*',end='')
#     print('')

#task2- 
# n=int(input("enter a number"))
# for i in range(1,(n*n)+1):
#     print(i,end='')
#     if i%n==0:
#         print('\n')

# #task3-reverse la print aganum
# n=int(input("enter"))
# for i in range(n*n,0,-1):
#     if i%n==0:
#         print('\n')
#     print(i,end='')
#task4
# n=int(input("enter"))
# for i in range(0,n+1):
#     print(i*"*")
# #task5
# n=int(input("enter"))
# for i in range(n*n,0,-1):
#     print(i*'*')

given  = [1,0,2,3,0,4,0,5,0]
res = []
for i in given: 
    if len(res) < len(given) : 

        if i == 0 and len(res) < (len(given)-1) :
                res+=[i,i]
        else: 
            res+=[i]
    
    else : 
          break

print('result', res)