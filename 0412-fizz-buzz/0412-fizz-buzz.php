class Solution
{

    /**
     * @param Integer $n
     * @return String[]
     */
    function fizzBuzz($n)
    {
        $output = [];
        for ($i = 1; $i <= $n; $i++) {
            if ($i % 3 == 0 && $i % 5 == 0) {
                $output[] = "FizzBuzz";
            } elseif ($i % 3 == 0) {
                $output[] = "Fizz";

            } elseif ($i % 5 == 0) {
                $output[] = "Buzz";
            } else {
                $output[] = "$i";

            }
        }
    

        return $output;
    }
}