class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        output=[]
        for i in range(n):
            number=i+1
            if number%3 == 0 and number%5 == 0:
                output.append("FizzBuzz")
            elif number % 3==0 :
                 output.append("Fizz")
            elif number % 5==0:
                 output.append("Buzz")
            else:
                output.append(str(number))
        return output