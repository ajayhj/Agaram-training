# reverse function program
# def reverse_string(input_string):
#     return input_string[::-1]

# if __name__ == "__main__":
#     user_input = input("Enter a string to reverse: ")
#     reversed_string = reverse_string(user_input)
#     print("Reversed string:", reversed_string)

#prime number
# def is_prime(number):
#     if number <= 1:
#         return False
#     if number == 2:
#         return True
#     if number % 2 == 0:
#         return False

#     # We only need to check odd divisors up to the square root of the number.
#     # If there is no divisor up to the square root, there won't be any beyond it either.
#     for i in range(3, int(number**0.5) + 1, 2):
#         if number % i == 0:
#             return False

#     return True

# # Test the function
# if __name__ == "__main__":
#     num = int(input("Enter a positive integer: "))
#     if is_prime(num):
#         print(f"{num} is a prime number.")
#     else:
#         print(f"{num} is not a prime number.")